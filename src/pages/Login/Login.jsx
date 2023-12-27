import { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import toast from 'react-hot-toast';

const Login = () => {
  const { googleLogin, loginEmailPass } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const form = location?.state?.pathname;

  const handlerGoogleLogin = () => {
    googleLogin()
      .then(result => {
        console.log(result.user);
        navigate(form, { replace: true });
        toast.success('Login Success!');
      })
      .catch(er => console.log(er.message));
  };

  const handlerFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginEmailPass(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(form, { replace: true });
        toast.success('Login Success!');
      })
      .catch(er => console.log(er.message));
  };

  return (
    <div className="hero min-h-[calc(100vh-80px)] ">
      <div className="hero-content w-1/2 mx-auto flex-col ">
        <div className="card shrink-0 w-full border   bg-base-100">
          <form onSubmit={handlerFormSubmit} className="card-body pb-0  w-full">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn-coustom ">Login</button>
            </div>
          </form>
          <label className="text-center mt-5 label-text" htmlFor="">
            Do not have an account?{' '}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </label>
          <label className="label-text mt-5 text-center" htmlFor="">
            Or Sign In With
          </label>
          <div className="w-10/12 px-8 mx-auto flex justify-between items-center py-5">
            <button
              onClick={handlerGoogleLogin}
              className="btn flex gap-3 btn-outline btn-secondary"
            >
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

export default Login;
