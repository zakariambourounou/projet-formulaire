import React from 'react';

export const Formulaire = (props) => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {props.etat ? (
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              {props.message && <p className="py-6">{props.message}</p>}
            </div>
          ) : null}
          {!props.etat ? (
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
              <form className="card-body" onSubmit={props.validation}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="name"
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
                    name="password"
                    placeholder="password"
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
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Formulaire;
