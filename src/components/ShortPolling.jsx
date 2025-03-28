import React, { useState, useEffect } from "react";
import axios from "axios";

const ShortPolling = () => {
  const [productos, setProductos] = useState([]);
  const [mensaje, setMensaje] = useState("No se ha agregado ningún producto");

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await axios.get("http://localhost:8080/isNewProductAdded");
        if (response.data.new_product) {
          const productosResponse = await axios.get("http://localhost:8080/getAllProducts");
          setProductos(productosResponse.data);
          setMensaje("Nuevos productos detectados!");
        } else {
          setMensaje("No se ha agregado ningún producto recientemente");
          setTimeout(() => {
            setProductos([]); 
          }, 5000);
        }
      } catch (error) {
        console.error("Error en short polling:", error);
      }
    }, 5000); // Cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Últimos Productos Agregados</h2>
      <p>{mensaje}</p>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto.nombre} - ${producto.precio} - {producto.codigo} {producto.descuento ? "(Con descuento)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShortPolling;
