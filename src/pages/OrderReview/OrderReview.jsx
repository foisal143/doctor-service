import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import OrderReviewCard from './OrderReviewCard';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { useNavigate } from 'react-router-dom';

const OrderReview = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [booked, setBooked] = useState([]);
  const [control, setControl] = useState(false);
  const accessToken = localStorage.getItem('jwt-access-token');
  useEffect(() => {
    fetch(`http://localhost:5000/booked-service?email=${user?.email}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setBooked(data);
        } else {
          logout().then().catch();
          navigate('/login');
        }
      });
  }, [accessToken, user, navigate, logout, control]);

  // aprove oparation
  const handlerApprove = id => {
    fetch(`http://localhost:5000/booked-service/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: true }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          console.log(data);
          const remaing = booked.filter(b => b._id !== id);
          const exit = booked.find(b => b._id === id);
          const newService = [exit, ...remaing];
          setBooked(newService);
          setControl(!control);
        }
      })
      .catch(er => console.log(er.message));
  };

  // delete oparation
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
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              const remaing = booked.filter(b => b._id !== id);
              setBooked(remaing);
              setControl(!control);
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

      {booked ? (
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
