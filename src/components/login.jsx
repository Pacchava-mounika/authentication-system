'use client';
import React,{useState} from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin = (e) => {
    e.preventDefault();
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
   if (!emailRegex.test(email)) {
    alert("Please enter a valid email format.");
    return;
  }
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 6 characters at least one capital letter and one number.");
      return;
    }
    {
    alert("Login successfully");
    router.push('/success');
    }
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-teal-700 p-14">
        <div className="max-w-md w-full bg-teal-500 p-8 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Login Form</h1>
          <form onSubmit={handleLogin}>
          <label className="text-sm font-medium text-white mt-4 block">Name</label>
          <input
            type="text"
            className="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter name"
          />

          <label className="text-sm font-medium text-white mt-4 block">Email</label>
          <input
            type="text"
            className="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="xyz@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <label className="text-sm font-medium text-white mt-4 block">Password</label>
          <input
            type="text"
            className="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button className="w-full mt-6 px-10 py-2 border rounded-lg shadow-sm text-white hover:bg-teal-800 bg-teal-950">
            Sign In
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

