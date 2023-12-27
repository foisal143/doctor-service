import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceCart = ({ service }) => {
  const { _id, title, image, price, description } = service;
  return (
    <div className="card  bg-base-100 shadow-md">
      <figure className="h-1/2">
        <img className="w-full h-full" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Price: {price}</p>
          <Link to={`/${_id}`}>
            {' '}
            <button className="text-green-500">
              <FaArrowRight></FaArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
