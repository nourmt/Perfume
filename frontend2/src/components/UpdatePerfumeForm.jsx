import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdatePerfume = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8800/perfumes/${id}`)
      .then((res) => {
        setName(res.data.name);
        setBrand(res.data.brand);
        setImage(res.data.image);
        setDescription(res.data.description);
        setPrice(res.data.price);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedPerfume = {
      name: name,
      brand: brand,
      image: image,
      description: description,
      price: price,
    };

    axios
      .put(`http://localhost:8800/perfumes/${id}`, updatedPerfume)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleUpdate}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Brand:
        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
      </label>
      <label>
        Image:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <button type="submit">Update Perfume</button>
    </form>
  );
};

export default UpdatePerfume;
