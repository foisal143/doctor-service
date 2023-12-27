import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCart from '../ServiceCart/ServiceCart';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div className="my-20">
      <h3 className="text-green-500 text-3xl font-bold text-center">
        Our Services
      </h3>
      <h4 className="text-center font-bold text-2xl lg:text-5xl">
        Take The Road To A Healthy <br /> Heart Beat
      </h4>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map(service => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
