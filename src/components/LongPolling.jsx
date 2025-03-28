import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const LongPolling = () => {
  const [productosDescuento, setProductosDescuento] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/countProductsInDiscount");
        setProductosDescuento(response.data.discounted_products);
        fetchData(); 
      } catch (error) {
        console.error("Error en long polling:", error);
        setTimeout(fetchData, 3000); 
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Long Polling</h2>
      <p>Productos en descuento: {productosDescuento}</p>
    </div>
  );
};

export default LongPolling;
