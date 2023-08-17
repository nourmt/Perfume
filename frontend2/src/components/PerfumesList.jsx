import React, { useEffect, useState } from 'react';
import axios from 'axios';



function PerfumesList() {

  const [perfumes, setPerfumes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8800/perfumes')
      .then(response => setPerfumes(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (perfumeId) => {
    axios.delete(`http://localhost:8800/perfumes/${perfumeId}`)
      .then(() => {
        const updatedPerfumes = perfumes.filter(perfume => perfume.idperfume !== perfumeId);
        setPerfumes(updatedPerfumes);
      })
      .catch(error => console.error(error));
  };
  const search=()=>setPerfumes( perfumes.filter(perfume =>
    perfume.name.toLowerCase().includes(searchQuery.toLowerCase())
  ))
 

  return (
    <div>
      <h1>Without perfume the skin is mute</h1>
      <form>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={event => {setSearchQuery(event.target.value);search()}}
          style={{ 
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '20px',
            width: '300px'
          }}
        />
      </form>
      <ul className='perfume-list'>
        {perfumes.map(perfume => (
          <li className='perf' key={perfume.idperfume}>
            <img src={perfume.image} alt={perfume.name} style={{ width: '200px', marginRight: '50px', float: 'left' }} />
            <h2 >{perfume.name}</h2>
            <p>{perfume.brand}</p>
            <p>{perfume.description}</p>
            <p>{perfume.price}</p>
            <button onClick={() => window.location.href=`/update/${perfume.idperfume}`}>Update</button>
            <button onClick={() => handleDelete(perfume.idperfume)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
 }

export default PerfumesList;