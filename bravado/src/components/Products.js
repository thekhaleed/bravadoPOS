import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom'

function Products(props) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    availability: false,
    image:"",
  });

  const handleFormChange = (e) => {
    const {name, value, type, checked} = e.target

    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [name]: type === 'checkbox'? checked : value
      }
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('price', formData.price);
    formDataObj.append('availability', formData.availability);
    formDataObj.append('image', formData.image);

    try {
      await axios.post('http://localhost:8000/meals/create/', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      props.handleFetch(); // Call fetchMeals after adding a new meal
      setFormData({
        name: '',
        price: '',
        availability:false,
        image: "",
      });
    } catch (error) {
      console.error(error)
      alert(error);
    }
    
  };

  const handleEdit = async (id) => {
    // Handle edit functionality
    console.log('Edit meal with ID:', id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/meals/delete/${id}/`);
      props.handleFetch();
       // Call fetchMeals after deleting a meal
    } catch (error) {
      console.error(error);
    }
    
  };

  const displayMeals =props.AllMeals.map((meal) => {
    return(
    <div key={meal.id} className='prod-card card shadow d-flex flex-column shadow p-1 mb-2'>
      {meal.image && (
        <img src={`http://localhost:8000${meal.image}`} alt={meal.name} className='image mb-2' />
      )}
      <h4 className="product-title">{meal.name}</h4>
      <p className="card-price">KSh.{meal.price}</p>
      <h6 className='card-availability'>{meal.availability ? 'Available' : 'N/A'}</h6>
      
      {/* <button onClick={() => handleEdit(meal.id)}>Edit</button> */}
      <button className="btn bg-danger text-light" onClick={() => handleDelete(meal.id)}>Delete</button>
    </div>
  )})

  const Location = useLocation();
  props.location(Location)

  return (
    <div className='col-12 col-sm-11 col-md-11 text-light bg-dangr'>
      <div className='p-2'>
        <h5 className='head-title'>Products </h5>
        <hr className='line'/>
      </div>

      <div className='screen bg-dange d-flex p-0'>
        <span className='prod d-flex p-3 m-2 gap-2 flex-wrap justify-content-cente bg-warnin'>
          {displayMeals}
        </span>

        <span className='bg-warnin p-1 side-panel'>
          <section className='ss'>
            <h5 className='form-title mb-3'>Add meals</h5>
          </section>
          
          <form onSubmit={handleSubmit} className='meal-form d-flex flex-column text-center gap-3 '>
            <div className="form-floating">
              <input 
                type="text"
                className="form-control inputs capitalize" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Name"
                required

              />
              <label for="name" className='text-secondary labeler'>Name</label>
            </div>

            <div className="form-floating">
              <input 
                type="number"
                className="form-control inputs" 
                id="price" 
                name="price"
                value={formData.price}
                onChange={handleFormChange}
                placeholder="Price"
                required

              />
              <label for="price" className='text-secondary labeler'>Price</label>
            </div>
            <div className="form-check text-start">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="availability" 
                name="availability"
                checked={formData.availability}
                onChange={handleFormChange}

              />
              <label className="form-check-label labeler" for="availability">Available</label>
            </div>
            <div className="mb-3 text-start">
              <label for="formFileSm" className="form-label labeler">Select Image</label>
              <input className="form-control form-control-sm image-selector" name='image' onChange={handleFileChange} type="file" required />
            </div>
            <button className='btn bg-success text-light' type="submit">Add Meal</button>
          </form>
        </span>
      </div>
    </div>
  );
}

export default Products;
