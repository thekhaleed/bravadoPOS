import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function POS(props) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    availability: false,
    image: "",
  });

  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({

    "order_number": '',
    "order_sub_total": '',
    "delivery": false,
    "order_grand_total": '',
    "customer_name": "",
    "staff_name": "",

  })

  function pos_product_add(meal){
      let find_product_in_cart = cart.find(meal_to_add =>{
        return meal_to_add.id === meal.id
      })

      if(find_product_in_cart){
        let newCart =[]
        let newMeal;
        
        cart.forEach(cartItem =>{
          if(cartItem.id === meal.id){
            newMeal = {
              ...cartItem,
              quantity: cartItem.quantity +1,
              product_sub_total: cartItem.price  * (cartItem.quantity +1)

            }
            newCart.push(newMeal)
          }else{
            newCart.push(cartItem)
          }
        })
        setCart(newCart)
        
      }else{
        let addingMeal ={
          ...meal,
          'quantity': 1,
          'product_sub_total': Number(meal.price)
        }
        setCart([...cart, addingMeal])
      }

  }

  var order_sub_total = 0

  cart.forEach(element => {
    order_sub_total = order_sub_total + element.product_sub_total 
  });

  var order_grand_total = order.delivery ? order_sub_total +50 : order_sub_total

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("price", formData.price);
    formDataObj.append("availability", formData.availability);
    formDataObj.append("image", formData.image);

    try {
      await axios.post("http://localhost:8000/meals/create/", formDataObj, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      props.handleFetch(); // Call fetchMeals after adding a new meal
      setFormData({
        name: "",
        price: "",
        availability: false,
        image: "",
      });
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const handleEdit = async (id) => {
    // Handle edit functionality
    console.log("Edit meal with ID:", id);
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

  const displayMeals = props.AllMeals.map((meal) => {

    if (meal.availability) {
      return (
        <div
          key={meal.id}
          className="pos-prod-card card d-flex flex-column p-1 mb-2"
          onClick={()=> pos_product_add(meal)}
        >
          {meal.image && (
            <img
              src={`http://localhost:8000${meal.image}`}
              alt={meal.name}
              className="pos-image mb-2"
            />
          )}
          <h6 className="product-title">{meal.name}</h6>
          <p className="pos-prod-price">KSh.{meal.price}</p>
        </div>
      );
    }
  });

  const displaycartItems = cart.map( cartItemAdded =>{
    return (

      <tr key={cartItemAdded.id}>
        <th scope="row">{cart.indexOf(cartItemAdded) +1}</th>
        <td>{cartItemAdded.name}</td>
        <td>
          {cartItemAdded.quantity}
        </td>
        <td>{cartItemAdded.product_sub_total}</td>
        <td>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="gray"
            className="bi bi-pencil-square table-icons m-2"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="gray"
            onClick={() => handleOrderDelete()}
            className="bi bi-trash3 table-icons m-2"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
          </svg>
        </td>
    </tr>
    )
  })

  const handleOrderDelete = async (id) => {
    try {
      // await axios.delete(`http://localhost:8000/order/delete/${id}/`);
      props.handleOrderFetch();
      // Call fetchMeals after deleting a meal
    } catch (error) {
      console.error(error);
    }
  };

  function handleCancel(){
    setCart([])
  }

  const Location = useLocation();
  props.location(Location);

  return (
    <div className="col-12 col-sm-11 col-md-11 text-light bg-dangr">
      <div className="p-2">
        <h5 className="head-title">Point of sale </h5>
        <hr className="line" />
      </div>

      <div className="screen bg-ligh m-0 d-flex flex-row-reverse justify-content-between p-">
        <aside className="bg-warnin p- m- col-4 order-panel d-flex flex-column gap-3">
          <span className="customer-selection d-flex col-11 flex-column text-center p-2">
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm "
            >
              <option selected>Select Customer</option>
              <option value="1">Walk in Customer</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </span>

          <span className="order-table d-flex col-11 flex-column  p-2">
            <table class="table orders table-striped table-hover">
              <thead>
                <tr className="order-lables">
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Total</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {displaycartItems}
              </tbody>
            </table>
          </span>

          <span className="checkout-panel bg-dangr align-items-center justify-content-around d-flex flex-column col-11 ">
            <span className="bg-warnin d-flex col-11 flex-column py-0 gap-0">
              <span className="box-1 d-flex justify-content-between p-">
                <section className="pay-label">Sub Total</section>
                KSh.{order_sub_total}
              </span>

              <span className="box-1 d-flex justify-content-between mt-1 ">
                <section>
                  <label
                    className="form-check-label labeler pay-label"
                    for="availability"
                  >
                    Delivery
                  </label>
                </section>

                <section className="form-check text-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="availability"
                    name="availability"
                    width={30}
                    
                  />
                </section>
              </span>

              <hr />

              <span className="box-1 d-flex justify-content-between p-">
                <section className="pay-label grand-label">Grand Total</section>
                KSh.{order.delivery ? order_sub_total +50 : order_sub_total}
              </span>

              <span className="bg-primar d-flex justify-content-center gap-3 mt-3">
                <input
                  type="button"
                  value="Cash"
                  className="payment-btn border-none p-1 px-3"
                />
                <input
                  type="button"
                  value="Mpesa"
                  className="payment-btn border-none p-1 px-3"
                />
                <input
                  type="button"
                  value="Tokens"
                  className="payment-btn border-none p-1 px-3"
                />
              </span>
            </span>

            <span className=" payment bg-warnin gap-2 d-flex flex-column align-items-center">
              <button className="payment-bt payment-bt-checkout btn " >
                Check Out
              </button>
              <button className="payment-bt payment-bt-cancel btn" onClick={() => handleCancel()}>
                Cancel
              </button>
            </span>
          </span>
        </aside>

        <span className="pos-panel bg-warnin col- d-flex m-3 mt-0 p-2 align-content-start  gap-3 flex-wrap text-capitalize ">
          {displayMeals}
        </span>
      </div>
    </div>
  );
}
export default POS;


// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }