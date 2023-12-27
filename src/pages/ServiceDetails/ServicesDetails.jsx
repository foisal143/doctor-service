import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
  const loddedService = useLoaderData();
  const { title, image, facilities, description, price, _id } = loddedService;
  return (
    <div className="my-5">
      <div className="h-[35vh] relative">
        <img
          className="w-full h-full"
          src="https://medistateinternational.com/wp-content/uploads/2023/09/check-up.jpg"
          alt=""
        />
        <div className="text-white flex justify-center items-center bg-black/40 absolute top-0 h-full w-full">
          <div className="text-center">
            <h3 className="text-2xl lg:text-5xl font-bold">Service Details </h3>
            <p>Our Cardiology Hospital Services Manufacture Found In 1996</p>
          </div>
        </div>
      </div>
      <div className="flex pb-8 my-12 flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <img className="w-full h-full" src={image} alt="" />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h4 className="text-green-500 font-bold">Details</h4>
          <h2 className="text-2xl lg:text-4xl font-semibold">{title}</h2>
          <p>{description}</p>
          <div>
            <h4 className="font-semibold text-xl ">Facilities</h4>
            <ul className="list-disc">
              {facilities.map(fac => (
                <li className="ms-5" key={fac}>
                  {fac}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-3xl font-bold">Price: {price}</p>
          <Link to={`/checkout/${_id}`}>
            <button className="btn-coustom mt-5">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
