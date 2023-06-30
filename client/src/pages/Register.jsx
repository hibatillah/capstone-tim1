import React, { useState } from "react";
import { rotte2 } from "../assets/img";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // register state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  
  // handle register
  const navigate = useNavigate()
  const handleSubmit = (target) => {
    target.preventDefault();
    const data = { email, password, role };
    console.log({ data })
    navigate('/login')
  };

  return (
    <main className="main-customer grid place-items-center">
      <div className="card flex items-center gap-12 w-[50%] min-h-[50%]">
        <img
          src={rotte2}
          alt="login-page"
          className="flex-auto h-[420px] rounded-md object-cover object-top"
        />
        <div className="flex-[0_1_2/5] flex flex-col justify-center gap-y-8">
          <div>
            <h1 className="text-primary">Register</h1>
            <p className="w-4/5">
              Daftar untuk mendapatkan berbagai layanan dari <mark>Rotte</mark>
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
            <div className="flex flex-col gap-1">
              <label htmlFor="role">Pilih Role</label>
              <select
                name="password"
                id="password"
                className="form-input"
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
                <option value="supplier">Supplier</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-full uppercase">
              Register
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
