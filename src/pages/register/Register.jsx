import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import { PiEyeClosedDuotone, PiEye } from "react-icons/pi";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    phone: "",
  });
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
      toast.error("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post("/api/register", {
        full_name: form.firstname + " " + form.lastname,
        email: form.email,
        password: form.password,
        role: form.role,
        phone: form.phone,
      });
      if (res.status === 201) {
        toast.success("Registration successful!");
        localStorage.removeItem("setup_complete")
        navigate("/login");
      }
    } catch (err) {
      if (err.response?.status === 400) {
        setError("Email already exists");
        toast.error("Email already exists");
      } else if (err.response?.status === 500) {
        setError("Something went wrong");
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="min-h-screen overflow-auto flex flex-col items-center justify-center bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] px-4 relative">
      <div
        className=" absolute min-h-screen w-[98%]  -top-10"
        style={{
          backgroundImage: `url("/assets/BG_line.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          rotate: "5deg",
        }}
      />
      <h2 className="text-2xl font-semibold mb-2 text-center text-[#4D4D4D]">
        Register to ReferralHub
      </h2>
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl z-10 mt-5">
        {error && <div className="text-red-500 text-sm mb-4">*{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-between gap-2">
            <div className="w-1/2">
            <label className="block text-gray-600 text-sm mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
              placeholder="Enter your firstname"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none "
              required
            />
            </div>
            <div className="w-1/2">
            <label className="block text-gray-600 text-sm mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              placeholder="Enter your lastname"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none "
              required
            />
            </div>
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none "
              required
            />
          </div>
          <div className="flex justify-between">
            <div className="w-1/2">
              <label className="block text-gray-600 text-sm mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none "
              />
            </div>
            <div className="flex-1 ml-2">
              <label className="block text-gray-600 text-sm mb-1">Role</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                required
              >
                <option value="" disabled hidden>
                  Select your role
                </option>
                <option value="BusinessOwner">Business Owner</option>
                <option value="Promoter">Referral Partner</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">
              Create Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none "
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">
              Confirm Password
            </label>
            <div className="relative flex items-center">
              <div
                className="absolute right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
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

          <Button className="py-2.5">Register</Button>
        </form>
        <div className="flex items-center my-5">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div>
          <img
            src="/assets/Login_Options.png"
            alt="Login_Options"
            className="cursor-pointer mx-auto"
          />
        </div>
        <div className="text-center text-sm text-gray-500 mt-4">
          <p>
            Already have an account?
            <Link
              to="/login"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
