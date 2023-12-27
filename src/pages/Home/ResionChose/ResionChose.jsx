const ResionChose = () => {
  return (
    <div className="my-20 gap-20 flex flex-col justify-between lg:flex-row">
      <div className="  lg:w-1/2">
        <img
          className="w-full rounded-md"
          src="https://themetechmount.com/html/dezily/images/single-img-01.jpg"
          alt=""
        />
      </div>
      <div className="lg:w-1/2 space-y-5">
        <h4 className="text-green-500 font-semibold">WHY CHOOSE US</h4>
        <h2 className=" text-2xl lg:text-5xl font-bold">
          Heart Surgery Specialist Expert Doctors
        </h2>
        <p>
          Chest pain is the most common warning sign of a heart attack. But
          there can be other symptoms, too, like lightheadedness. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Dolor doloremque, velit
          dolores repellendus, quos architecto sequi fugit officia illum, odio
          aliquid fugiat corporis. Neque tenetur magni dolorem ad saepe
          voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quidem nam fugit corrupti ratione autem corporis aperiam. Ab quae,
          facere alias eos ipsum consequatur, corporis iste aspernatur quidem,
          modi et sequi. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsam itaque iusto dicta quis delectus accusantium autem
          quibusdam repellendus similique illo.
        </p>
        <div className="flex justify-between items-center gap-5">
          <img
            className="w-1/3"
            src="https://themetechmount.com/html/dezily/images/single-img-24.jpg"
            alt=""
          />
          <h3 className="text-2xl font-semibold">
            Our Cardiology Hospital Services Manufacture Found In 1996
          </h3>
        </div>
        <button className="btn-coustom">Make An Appoinment</button>
      </div>
    </div>
  );
};

export default ResionChose;
