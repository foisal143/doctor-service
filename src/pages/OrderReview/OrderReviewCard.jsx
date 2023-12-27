import { FaTrash } from 'react-icons/fa6';
const OrderReviewCard = ({ ordered, handlerDelete, handlerApprove }) => {
  const { _id, image, date, service, status, email } = ordered;
  return (
    <div className="p-2 space-y-2 border text-center lg:flex justify-between items-center">
      <img
        className="w-20 mx-auto lg:mx-0 lg:me-auto h-20"
        src={image}
        alt=""
      />
      <h3 className="font-semibold mx-auto">{service}</h3>
      <p>{email}</p>
      <div className="flex w-fit mx-auto lg:mx-0 lg:ms-auto gap-3">
        {status ? (
          <span className="py-2 px-6 border border-green-500 text-green-500 rounded-md">
            Approved
          </span>
        ) : (
          <div className="flex gap-3">
            <span className="py-2 px-6 border border-red-500 text-red-500 rounded-md">
              Pending
            </span>
            <button
              onClick={() => handlerApprove(_id)}
              className="p-2 border border-green-500 rounded-md hover:bg-green-500 "
            >
              Please Approved
            </button>
          </div>
        )}
        <button
          onClick={() => handlerDelete(_id)}
          className="p-3 rounded-full bg-red-200 text-red-500"
        >
          <FaTrash></FaTrash>
        </button>
      </div>
    </div>
  );
};

export default OrderReviewCard;
