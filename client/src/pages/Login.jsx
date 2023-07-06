import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetData } from "../Api";
import { rotte1 } from "../assets/img";

const User = () => {
  const { users } = GetData("http://localhost:5000/user");
  console.log(users);
  return users;
};

const Login = ({ handleLogin, handleUser }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // check user
  const dataUser = User();

  // login handle
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    if (
      dataUser?.data.some(
        (item) => item.email === data.email && item.password === data.password
      )
    ) {
      const user = dataUser.data.find(
        (item) => item.email === data.email && item.password === data.password
      );
      handleLogin(true);
      handleUser(user._id, user.name, user.role);
      console.log('login success')
      navigate("/");
    } else {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <main className="main-customer grid place-items-center">
      <div className="card flex gap-12 w-[70%] min-h-[50%] xl:w-[50%]">
        <img
          src={rotte1}
          alt="login-page"
          className="flex-auto h-[400px] rounded-md object-cover object-top"
        />
        <div className="flex-[0_1_2/5] flex flex-col justify-center gap-y-8">
          <div>
            <h1 className="text-primary">Login</h1>
            <p className="w-4/5">
              Masuk untuk melakukan pemesanan atau kelola data sebagai admin.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Masukkan email"
                className="form-input"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Masukkan password"
                className="form-input"
                autoComplete="off"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-full uppercase">
              {!loading ? "Login" : "Try to Login..."}
            </button>
            {error ? (
              <p className="text-red-500">Email atau Password salah</p>
            ) : null}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
