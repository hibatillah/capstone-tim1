import * as React from "react";
import { rotte2 } from "../assets/img";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [status, setStatus] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      role: event.target.role.value,
    };

    axios
      .post("http://localhost:5000/user/add", data)
      .then((res) => {
        console.log(res);
        setStatus('success');
        setTimeout(() => navigate("/login"), 3000);
      })
      .catch((err) => {
        console.error(err);
        setStatus('error');
      })
      .finally(() => {
        event.target.reset();
      });
  };

  return (
    <main className="main-customer grid place-items-center">
      <div className="card grid grid-cols-2 gap-12 w-[70%] min-h-[50%] xl:w-[50%]">
        <div className="col-span-1 flex flex-col justify-center">
          <img
            src={rotte2}
            alt="login-page"
            className="w-full h-[450px] rounded-md object-cover object-top"
          />
          <p
            className={`mt-4 ${
              status === "" ? "hidden" : "block"
            }`}
          >
            {status === "success" ? (
              <span key={'success'} className="text-tertiary">Anda berhasil terdaftar!</span>
            ) : status === 'error'? (
              <span key={'error'} className="text-primary">Gagal terdaftar, silahkan coba lagi</span>
            ) : null}
          </p>
        </div>
        <div className="col-span-1 flex flex-col justify-center gap-y-5 xl:gap-y-3">
          <div>
            <h1 className="text-primary">Register</h1>
            <p className="w-4/5">
              Daftar untuk mendapatkan berbagai layanan dari <mark>Rotte</mark>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 xl:space-y-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Masukkan username"
                className="form-input"
                autoComplete="off"
                required
              />
            </div>
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
            <div className="flex flex-col gap-1">
              <label htmlFor="role">Pilih Role</label>
              <select
                name="role"
                id="role"
                className="form-input"
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
