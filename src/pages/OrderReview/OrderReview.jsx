import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import OrderReviewCard from './OrderReviewCard';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
const OrderReview = () => {
  const { user } = useContext(AuthContext);
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/booked-service?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setBooked(data));
  }, [booked]);

  const handlerApprove = id => {
    fetch(`http://localhost:5000/booked-service/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: true }),
    })
      .then(data => {
        console.log(data);
        const remaing = booked.filter(b => b._id !== id);
        const exit = booked.find(b => b._id === id);
        const newService = [exit, ...remaing];
        setBooked(newService);
      })
      .catch(er => console.log(er.message));
  };

  const handlerDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booked-service/${id}`, {
          method: 'DELETE',
        })
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              const remaing = booked.filter(b => b._id !== id);
              setBooked(remaing);
            }
          })
          .catch(er => console.log(er.message));
      }
    });
  };
  return (
    <div className="mt-5">
      <div className="h-[35vh] relative">
        <img
          className="w-full h-full"
          src="https://medistateinternational.com/wp-content/uploads/2023/09/check-up.jpg"
          alt=""
        />
        <div className="text-white flex justify-center items-center bg-black/40 absolute top-0 h-full w-full">
          <div className="text-center">
            <h3 className="text-2xl lg:text-5xl font-bold">Booked Services </h3>
            <p>Our Cardiology Hospital Services Manufacture Found In 1996</p>
          </div>
        </div>
      </div>

      {booked.length > 0 ? (
        <div className="my-12">
          <div className="space-y-5 lg:w-10/12 mx-auto">
            {booked &&
              booked.map(ordered => (
                <OrderReviewCard
                  key={ordered._id}
                  ordered={ordered}
                  handlerDelete={handlerDelete}
                  handlerApprove={handlerApprove}
                ></OrderReviewCard>
              ))}
          </div>
        </div>
      ) : (
        <p className="mt-12 text-3xl font-semibold text-center">
          No Service Added here
        </p>
      )}
    </div>
  );
};

export default OrderReview;
