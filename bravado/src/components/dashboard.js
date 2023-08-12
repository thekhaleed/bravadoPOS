import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = (props) => {
  const Currency = "Ksh";

  const Location = useLocation();
  props.location(Location);

  const dashboardSales = [
    {
      id: 0,
      title: "total sales",
      amount: "15427.0",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-graph-up"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
          />
        </svg>
      ),
    },
    {
      id: 1,
      title: "total profit",
      amount: "9050.0",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-graph-up-arrow"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "total expenses",
      amount: "5000.0",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-clipboard-minus"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
          />
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
        </svg>
      ),
    },

    {
      id: 3,
      title: "total taxes",
      amount: "436.6",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-tags"
          viewBox="0 0 16 16"
        >
          <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
          <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
        </svg>
      ),
    },
  ];

  const sales = dashboardSales.map((category) => {
    return (
      <div
        className="sales-box d-flex m-1 p-2 px- gap-4 align-items-center"
        key={category.id}
      >
        <span className="icon-box bg-warnin d-flex justify-content-center align-items-center">
          {category.icon}
        </span>

        <span className="">
          <p className="category-amount">{Currency + " " + category.amount}</p>
          <p className="category-title m-0">{category.title}</p>
        </span>
      </div>
    );
  });

  return (
    <div className="dashboard bg-warnin col-12 col-sm-11 col-md-11 text-light p-1 ">
      <div className="p-2">
        <h5 className="head-title">Dashboard </h5>
        <hr className="line" />
      </div>
      <div className="screen bg-dange d-flex flex-column p-0">
        <div>
          <h6 className="welcome-text">
            Hello &#128075; , Welcome to Bravado POS
          </h6>
        </div>

        <div className="d-flex flex-column">
          <div className="dates-parent mb-3 mt-3 mt-md-2 d-flex">
            <span className="dates justify-content-evenly d-flex align-content-center p-1 ">
              <p>start date</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
              <p>end date</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-calendar4"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
              </svg>
            </span>
          </div>
          <div className="landing d-flex flex-wrap gap- justify-content-evenly mt-3">
            {sales}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
