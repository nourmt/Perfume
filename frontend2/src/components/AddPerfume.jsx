import React, { useState } from "react";
import axios from "axios";

const AddPerfume = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerfume = {
      name: name,
      brand: brand,
      image: image,
      description: description,
      price: price,
    };

    axios
      .post("http://localhost:8800/perfumes", newPerfume)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setName("");
    setBrand("");
    setImage("");
    setDescription("");
    setPrice("");
  };

  return (
    <div id="background2">
      <h2>Add Perfume</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Brand:</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
</div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Perfume</button>
      </form>
    </div>
  );
};

export default AddPerfume;