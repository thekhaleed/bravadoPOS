import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom'

function Customers(props) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    contact: '',
    address:'',
  });

  const handleFormChange = (e) => {
    const {name, value} = e.target

    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [name]: value
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append('first_name', formData.first_name);
    formDataObj.append('last_name', formData.last_name);
    formDataObj.append('contact', formData.contact);
    formDataObj.append('address', formData.address);

    try {
      await axios.post('http://localhost:8000/customers/create/', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      props.handleFetch(); // Call fetchCustomers after adding a new customer
      setFormData({
        first_name: '',
        last_name: '',
        contact: '',
        address:'',
      });
    } catch (error) {
      console.error(error)
      alert(error);
    }

  };

  const handleEdit = async (id) => {
    // Handle edit functionality
    console.log('Edit customer with ID:', id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/customers/delete/${id}/`);
      props.handleFetch();
       // Call fetchCustomers after deleting a customer
      
    } catch (error) {
      console.error(error);
    }
    
  };

  const displayCustomers =props.AllCustomers.map(customer => {
      
    const index = props.AllCustomers.indexOf(customer) +1

    return(
      <tr  className='table.active table-row text-capitalize bg-danger p-0 ' key={index}>
        <th scope="row">{index}</th>
        <td>{customer.first_name}</td>
        <td>{customer.last_name}</td>
        <td>{customer.contact}</td>
        <td className='bg-dangr'>{customer.address}</td>
        <td className='action text-cente'>
        
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="gray" className="bi bi-pencil-square table-icons m-2" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleDelete(customer.id)} width="14" height="14" fill="#dc3545" className="bi bi-trash3 table-icons m-2" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
          </svg>

        </td>

      </tr>
  )})

  const Location = useLocation();
  props.location(Location)

  return (
    <div className='col-12 col-sm-11 col-md-11 text-light bg-dange'>
      <div className='p-2'>
        <h5 className='head-title'>Customers </h5>
        <hr className='line'/>
      </div>

      <div className='screen bg-dange d-flex p-0'>
        <span className='customer-screen d-flex p-2 m-2 gap-2 flex-wrap justify-content-center bg-warnin'>
          <table className="table table-striped table-hover p-0 m-o text-capitalize">
            <thead className='table-head text-uppercase'>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Location</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className='tabler'>
              {displayCustomers}
            </tbody>
          </table>
        </span>

        <aside className='bg-warnin p-1 side-panel'>
          <section className='ss'>
            <h5 className='form-title mb-3'>Add Customer</h5>
          </section>
          
          <form onSubmit={handleSubmit} className='customer-form d-flex flex-column text-center gap-3 '>
            <div className="form-floating">
              <input 
                type="text"
                className="form-control inputs capitalize" 
                id="first_name" 
                name="first_name"
                value={formData.first_name}
                onChange={handleFormChange}
                placeholder="FirstName"
                required

              />
              <label for="first_name" className='text-secondary labeler'>First Name</label>
            </div>

            <div className="form-floating">
              <input 
                type="text"
                className="form-control inputs capitalize" 
                id="last_name" 
                name="last_name"
                value={formData.last_name}
                onChange={handleFormChange}
                placeholder="LastName"
                required
              />
              <label for="last_name" className='text-secondary labeler'>Last Name</label>
            </div>

            <div className="form-floating">
              <input 
                type="text"
                className="form-control inputs capitalize" 
                id="contact" 
                name="contact"
                value={formData.contact}
                onChange={handleFormChange}
                placeholder="Contact"
                required

              />
              <label for="contact" className='text-secondary labeler'>Contact</label>
            </div>

            <div className="form-floating has-validation">
              <input 
                type="text"
                className="form-control inputs capitalize" 
                id="address" 
                name="address"
                value={formData.address}
                onChange={handleFormChange}
                placeholder="FirstName"
                required

              />
              <label for="address" className='text-secondary labeler'>Address</label>
            </div>

            <button className='btn bg-success text-light' type="submit">Save</button>
          </form>
        </aside>


      </div>
    </div>
  );
}

export default Customers;
