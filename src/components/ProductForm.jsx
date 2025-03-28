import React from "react";
import { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [codigo, setCodigo] = useState("");
  const [descuento, setDescuento] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const agregarProducto = async () => {
    try {
      
      await axios.post("http://localhost:8080/addProduct", {
        nombre,
        precio: parseInt(precio),
        codigo,
        descuento
      });

      
      setMensaje("Producto agregado correctamente!");

      
      setNombre("");
      setPrecio("");
      setCodigo("");
      setDescuento(false);
    } catch (error) {
      setMensaje("Error al agregar producto");
    }
  };

  return (
    <div>
      <h2>Agregar Producto</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <input
        type="text"
        placeholder="Código"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={descuento}
          onChange={(e) => setDescuento(e.target.checked)}
        />
        Tiene descuento
      </label>
      <button onClick={agregarProducto}>Agregar</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default ProductForm;
