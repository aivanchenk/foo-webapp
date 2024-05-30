import React, { useState } from "react";
import PreviousSearches from "../components/previousSearches";
import RecipeCard from "../components/recipeCard";

export default function Recipes() {
  const [searchQuery, setSearchQuery] = useState("");

  const recipes = [
    {
      title: "Healthy salmon salad",
      image: "/img/gallery/img_1.jpeg",
      authorImg: "/img/top-chiefs/img_1.jpg",
    },
    {
      title: "Avocado Meals Ideas",
      image: "/img/gallery/img_4.jpg",
      authorImg: "/img/top-chiefs/img_2.jpg",
    },
    {
      title: "Balanced diet",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
    },
    {
      title: "Fried salmon salad",
      image: "/img/gallery/img_10.jpg",
      authorImg: "/img/top-chiefs/img_6.jpg",
    },
    {
      title: "Healthy salmon salad",
      image: "/img/gallery/img_1.jpeg",
      authorImg: "/img/top-chiefs/img_1.jpg",
    },
    {
      title: "Avocado meals ideas",
      image: "/img/gallery/img_4.jpg",
      authorImg: "/img/top-chiefs/img_2.jpg",
    },
    {
      title: "Balanced diet",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
    },
    {
      title: "Fried salmon salad lunch",
      image: "/img/gallery/img_10.jpg",
      authorImg: "/img/top-chiefs/img_6.jpg",
    },
    {
      title: "Balanced diet tips",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
    },
  ].sort(() => Math.random() - 0.5);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <PreviousSearches onSearch={setSearchQuery} />
      <div className="recipes-container">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
