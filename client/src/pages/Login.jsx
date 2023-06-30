import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetData } from "../Api";
import { rotte1 } from "../assets/img";

const User = () => {
  const { users } = GetData("http://localhost:5000/user");
  console.log(users);
  return users;
};

const Login = ({ handleLogin, handleUser}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  // login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // check user
  const [isUser, setIsUser] = useState(false)
  const [user, setUser] = useState()
  const dataUser = User()

  useEffect(() => {
    setUser(dataUser?.data.filter((user) => user.email === email && user.password === password))
    if (user) setIsUser(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[email, password])
  
  // login handle
  const navigate = useNavigate()
  const handleSubmit = (target) => {
    target.preventDefault()
    setLoading(true)
    const data = { email, password }
    console.log({ data })
    try {
      if (isUser) {
        handleLogin()
        handleUser(user)
        navigate('/')
        console.log('login success')
      }
    }
    catch (error) {
      setError(true)
      setEmail('')
      setPassword('')
      console.warn('login failed',error)
    }
    finally {
      setLoading(false)
    }
  }
  
  return (
    <main className="main-customer grid place-items-center">
      <div className="card flex gap-12 min-w-[50%] min-h-[50%]">
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
            <button type="submit" className="btn btn-primary w-full uppercase">{!loading ? 'Login' : 'Try to Login...'}</button>
            {error ? <p className="text-red-500">Email atau password salah</p> : null}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
