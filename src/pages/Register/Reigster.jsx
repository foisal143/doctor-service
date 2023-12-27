import { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';

const Reigster = () => {
  const { createUser } = useContext(AuthContext);
  const handlerFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUser(name, image, loggedUser);
        toast.success('Registation success!');
      })
      .catch(er => console.log(er.message));
  };

  const updateUser = (name, image, loggedUser) => {
    updateProfile(loggedUser, {
      displayName: name,
      photoURL: image,
    });
  };
  return (
    <div className="hero min-h-[calc(100vh-80px)] ">
      <div className="hero-content w-1/2 mx-auto flex-col ">
        <div className="card shrink-0 w-full border   bg-base-100">
          <form onSubmit={handlerFormSubmit} className="card-body pb-0  w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo URL"
                name="image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn-coustom ">Register</button>
            </div>
          </form>
          <label className="text-center mt-5 label-text" htmlFor="">
            Already have an account?{' '}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </label>
          <label className="label-text mt-5 text-center" htmlFor="">
            Or Sign Up With
          </label>
          <div className="w-10/12 px-8 mx-auto flex justify-between items-center py-5">
            <button className="btn flex gap-3 btn-outline btn-secondary">
              <FaGoogle></FaGoogle> Sign In With Google
            </button>
            <button className="btn flex gap-3 btn-outline btn-primary">
              <FaFacebook></FaFacebook> Sign In With facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reigster;
