import banar from '../../../assets/banar.jpg';

const Herosection = () => {
  return (
    <div className=" mt-5  overflow-hidden min-h-[70vh] relative">
      <img className="w-full min-h-[70vh] " src={banar} alt="" />
      <div className="absolute top-0 px-5 lg:px-12 flex justify-between items-center flex-col lg:flex-row w-full text-white left-0 h-full bg-black/50">
        <div className="lg:w-1/2 ">
          <h2 className="text-5xl leading-tight font-bold">
            Healthy Habits Are Your Hearts Desire
          </h2>
          <p className="text-white/80 my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            alias id placeat possimus voluptatibus accusantium numquam ipsum
            voluptate, aliquam tenetur earum ducimus totam dicta, labore
            dignissimos officiis provident adipisci. Nostrum?
          </p>
          <button className="btn-coustom">Make An Appoinment</button>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center gap-10">
          <div>
            <img
              className="w-32 h-32 rounded-full"
              src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
              alt=""
            />
            <h4 className="text-center">Dr. Mishra</h4>
          </div>
          <div>
            <img
              className="w-32 h-32 rounded-full"
              src="https://www.shutterstock.com/image-photo/medical-concept-indian-beautiful-female-600nw-1635029716.jpg"
              alt=""
            />
            <h4 className="text-center">Dr. Alisha</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
