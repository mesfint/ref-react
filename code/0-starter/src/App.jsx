import React from "react";
import "./index.css";
import RecipeTitle from "./RecipeTitle";

const App = () => {
  return (
    <article className="article">
      <h1>Recipe Manager</h1>
      <RecipeTitle />
    </article>
  );
};

export default App;
