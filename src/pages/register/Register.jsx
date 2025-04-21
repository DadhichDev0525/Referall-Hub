import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { PiEyeClosedDuotone, PiEye } from "react-icons/pi";


const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div
      className="min-h-screen overflow-auto flex flex-col items-center justify-center bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] px-4 relative"  
    >
        <div className=" absolute min-h-screen w-[98%]  -top-10"
        style={{
            backgroundImage: `url("/assets/BG_line.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            rotate: "5deg",
          }}/>
        <h2 className="text-2xl font-semibold mb-2 text-center text-[#4D4D4D]">
          Register to ReferralHub
        </h2>
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl z-10 mt-5">

        {error && <div className="text-red-500 text-sm mb-4">*{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-7">  
          <div>
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Create Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Confirm Password</label>
            <div className="relative flex items-center">
            <div className="absolute right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <PiEye /> : <PiEyeClosedDuotone />}
            </div>  
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
            </div>
          </div>

          <Button className='py-2.5'>
            Register
          </Button>
        </form>
        <div className="flex items-center my-5">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div>
          <img src="/assets/Login_Options.png" alt="Login_Options" className="cursor-pointer mx-auto" />
        </div> 
        <div className="text-center text-sm text-gray-500 mt-4">
            <p>Already have an account?<Link to='/login' className="text-blue-500 hover:underline cursor-pointer"> Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
