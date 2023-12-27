import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import toast from 'react-hot-toast';

const CheckoutPage = () => {
  const services = useLoaderData();
  const { user } = useContext(AuthContext);
  const { image, title, price } = services;
  const handlerformSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const clientName = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const service = form.service.value;

    const clientDetails = {
      name: clientName,
      email,
      date,
      service,
      image,
      price,
      status: false,
    };

    fetch('http://localhost:5000/booked-service', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(clientDetails),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          toast.success('Checkout Success');
        }
      })
      .catch(er => toast(er.message));
  };
  return (
    <div>
      <div className="h-[35vh] relative">
        <img
          className="w-full h-full"
          src="https://medistateinternational.com/wp-content/uploads/2023/09/check-up.jpg"
          alt=""
        />
        <div className="text-white flex justify-center items-center bg-black/40 absolute top-0 h-full w-full">
          <div className="text-center">
            <h3 className="text-2xl lg:text-5xl font-bold">
              Checkout Details{' '}
            </h3>
            <p>Our Cardiology Hospital Services Manufacture Found In 1996</p>
          </div>
        </div>
      </div>

      <div className="hero my-12  ">
        <div className="hero-content lg:w-2/3 mx-auto border flex-col ">
          <div className="card w-full   ">
            <form onSubmit={handlerformSubmit} className="card-body w-full">
              <div className="lg:flex w-full gap-5">
                <div className="form-control w-full">
                  <input
                    type="text"
                    defaultValue={user && user.displayName}
                    placeholder="Name"
                    name="name"
                    className="input w-full input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="email"
                    placeholder="email"
                    defaultValue={user && user.email}
                    name="email"
                    className="input w-full input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="lg:flex mt-5 w-full gap-5">
                <div className="form-control w-full">
                  <input
                    type="text"
                    defaultValue={services.title}
                    name="service"
                    className="input w-full input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="date"
                    placeholder="date"
                    name="date"
                    className="input w-full input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn-coustom">
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
