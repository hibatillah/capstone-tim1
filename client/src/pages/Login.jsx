import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { rotte1 } from "../assets/img";

const Login = () => {
  // login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // login handle
  const navigate = useNavigate()
  const handleSubmit = (target) => {
    target.preventDefault()
    const data = { email, password }
    console.log({ data })
    navigate('/')
  }
  
  return (
    <main className="main-customer grid place-items-center">
      <div className="card flex gap-12 w-[50%] min-h-[50%]">
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-full uppercase">Login</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
