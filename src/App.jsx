import React from "react";
import ProductForm from "./components/ProductForm";
import ShortPolling from "./components/ShortPolling";
import LongPolling from "./components/LongPolling";

const App = () => {
  return (
    <div>
      <h1>Gestión de Productos</h1>
      <ProductForm />
      <ShortPolling />
      <LongPolling />
    </div>
  );
};

export default App;
