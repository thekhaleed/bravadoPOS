import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import axios from 'axios';
import './app.css'
import Dashboard from './components/dashboard'
import Products from './components/Products'
import POS from './components/POS';
import Customers from './components/customers';
import Staff from './components/staff';
import Inventory from './components/Inventory';
import Settings from './components/settings';


export default function App() {
    const [meals, setMeals]         = useState([]);
    const [customers, setCustomers] = useState([]);
    const [staff, setStaff]         = useState([]);
    const [order, setOrder]         = useState([]);
    const [loc, setLoc]             = useState('')

// meals
    useEffect(() => {
        fetchMeals();
      }, []);
    
      const fetchMeals = async () => {
        try {
          const response = await axios.get('http://localhost:8000/meals/');
          setMeals(response.data);
        } catch (error) {
          console.error(error);
        }
    };
// customers
    useEffect(() => {
        fetchCustomers();
      }, []);
    
      const fetchCustomers = async () => {
        try {
          const response = await axios.get('http://localhost:8000/customers/');
          setCustomers(response.data);
        } catch (error) {
          console.error(error);
        }
    };

// staff

    useEffect(() => {
        fetchStaff();
    }, []);

    const fetchStaff = async () => {
        try {
        const response = await axios.get('http://localhost:8000/staff/');
        setStaff(response.data);
        } catch (error) {
        console.error(error);
        }
    };
// Orders

    useEffect(() => {
        fetchOrder();
    }, []);

    const fetchOrder = async () => {
        try {
        const response = await axios.get('http://localhost:8000/order/');
        setOrder(response.data);
        } catch (error) {
        console.error(error);
        }
    };
//Knowing which link is selected -> Long method
    var Dashstyle, Customerstyle, Reportsstyle, Posstyle, Productsstyle, Settingsstyle, Staffstyle

    loc.pathname === '/'? Dashstyle={ backgroundColor: 'rgba(255, 255, 255, 0.363)'} : Dashstyle={backgroundColor: 'transparent'}
    loc.pathname === '/pos'? Posstyle={ backgroundColor: 'rgba(255, 255, 255, 0.363)'} : Posstyle={backgroundColor: 'transparent'}
    loc.pathname === '/customers'? Customerstyle={ backgroundColor: 'rgba(255, 255, 255, 0.363)'} : Customerstyle={backgroundColor: 'transparent'}
    loc.pathname === '/reports'? Reportsstyle={ backgroundColor: 'rgba(255, 255, 255, 0.363)'} : Reportsstyle={backgroundColor: 'transparent'}
    loc.pathname === '/staff'? Staffstyle={ backgroundColor: 'rgba(255, 255, 255, 0.363)'} : Staffstyle={backgroundColor: 'transparent'}
    loc.pathname === '/settings'? Settingsstyle={ backgroundColor: 'rgba(255, 255, 255, 0.363)'} : Settingsstyle={backgroundColor: 'transparent'}
    loc.pathname === '/products'? Productsstyle={ backgroundColor: 'rgba(255, 255, 255, 0.363)'} : Productsstyle={backgroundColor: 'transparent'}
    

    return (
    <div className='app container-fluid p-0 m-0 d-flex'>
     <Router >
        
        <div className='flex-nowrap m-0'>
        <svg focusable="false" className="burger-menu position-absolute m-3 d-sm-none " data-icon="menu" width="1em" height="1em" fill="gray" aria-hidden="true" viewBox="64 64 896 896">
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
        </svg>
        <div className='head fixed-left bg-warnin d-none d-sm-flex flex-column align-content-center justify-content-between min-vh-100 m-0 pt-3 pt-md-0'>
            <span className='header-area mb-2 d-flex justify-content-center align-content-center align-items-center flex-column'>
                <img className='rounded-circle d-none d-md-flex m-2' width={50} height={50} src='/images/admin.png' />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-person-circle m-2 justify-self-center d-md-none" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <p className='d-none d-md-flex m-0'>Admin</p>
            
            </span>
            <span className='nav-area align-content-center justify-self-center d-flex  p-0'>
                <ul className='nav-list d-grid justify-content-center flex-column m-0 p-0 container-fluid '>
                    <li className=''>
                        <Link to="/" style={Dashstyle} className='d-flex text-decoration-none align-items-center navigation px-sm-3 px-md-2 px-lg-3 py-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-house" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                            </svg>
                            <p className='d-none d-md-flex p-2 mx-2 m-0'>
                              Dashboard
                            </p>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to="/pos" style={Posstyle} className='d-flex text-decoration-none align-items-center navigation px-sm-3 px-md-2 px-lg-3 py-1' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <p className='d-none mx-2 d-md-flex p-2 m-0'>
                                POS
                            </p>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to="/products" style={Productsstyle} className='d-flex text-decoration-none align-items-center navigation px-sm-3 px-md-2 px-lg-3 py-1'>
                            <svg focusable="false" className="" data-icon="appstore" width="1em" height="1em" fill="black" aria-hidden="true" viewBox="64 64 896 896">
                                <path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"></path>
                            </svg>
                            <p className='d-none mx-2 d-md-flex p-2 m-0'>
                                Products
                            </p>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to="/customers" style={Customerstyle} className='d-flex text-decoration-none align-items-center navigation px-sm-3 px-md-2 px-lg-3 py-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-people" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                            </svg>
                            <p className='d-none mx-2 d-md-flex p-2 m-0'>
                                Customers
                            </p>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to="/staff" style={Staffstyle} className='d-flex text-decoration-none align-items-center navigation px-sm-3 px-md-2 px-lg-3 py-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-person-gear" viewBox="0 0 16 16">
                                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
                            </svg>
                            <p className='d-none mx-2 d-md-flex p-2  m-0'>
                                Staff
                            </p>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to="/reports" style={Reportsstyle} className='d-flex text-decoration-none align-items-center navigation px-sm-3 px-md-2 px-lg-3 py-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
                            </svg>
                            <p className='d-none mx-2 d-md-flex p-2  m-0'>
                                Reports
                            </p>
                        </Link>
                    </li>
                    <li className=' '>
                        <Link to="/settings" style={Settingsstyle} className='d-flex text-decoration-none align-items-center navigation px-sm-3 px-md-2 px-lg-3 py-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                            </svg>
                            <p className='d-none mx-2 d-md-flex p-2 m-0'>
                                Settings
                            </p>
                        </Link>
                    </li>
                </ul>
            </span>
            <span className='log-out bg-dar d-flex px-sm-3 px-md-2 px-lg-3 py-1 text-decoration-none align-items-center mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(163, 24, 24)" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
                <p className='d-none d-md-flex p-2 mx-2 m-0'>Log Out</p>
            </span>
        </div>
        </div>
        
        <Routes>
            <Route path="/" exact element={<Dashboard location ={setLoc} />}/>
            <Route path="/products" element={<Products AllMeals ={meals} handleFetch={fetchMeals} location ={setLoc} />} />
            <Route path="/pos" element={<POS AllMeals={meals} Order={order} handleOrderFetch={fetchOrder} location ={setLoc}/>}/>
            <Route path="/customers" element={<Customers AllCustomers ={customers} handleFetch={fetchCustomers} location ={setLoc}/>}/>
            <Route path="/staff" element={<Staff AllStaff ={staff} handleFetch={fetchStaff} location ={setLoc}/>} />
            <Route path="/reports" element={<Inventory location ={setLoc}/>} />
            <Route path="/settings" element={<Settings location ={setLoc}/>} />
        </Routes>
      
      </Router>
    </div>
    
    )
}
