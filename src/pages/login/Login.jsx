import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import { PiEyeClosedDuotone, PiEye } from "react-icons/pi";


const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        toast.success("Login successful!");
        navigate("/");
      } else {
        const errorMessage = `${data.error}, try eve.holt@reqres.in//cityslicka` || "Login failed, try eve.holt@reqres.in//cityslicka";
        setError(errorMessage);
        toast.error(data.error || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong, try eve.holt@reqres.in//cityslicka");
      toast.error("Something went wrong");
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
          Login to ReferralHub
        </h2>
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl z-10 mt-5">
        
        <div className="text-center mb-6 border border-[#305AFF] text-[#305AFF] hover:bg-[#305AFF]/10 cursor-pointer rounded-lg py-2 px-4 font-semibold text-sm">
            Continue with Google/Microsoft
        </div>

        <div>
            <label className="block text-gray-600 text-sm mb-1">Magic Link Login</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
              required
            />
            <Button className="my-4">
                Send Magic Link
            </Button>
            </div>

        {/* OR Separator */}
        <div className="flex items-center mb-2">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Email + Password Form */}
        <form onSubmit={handleSubmit} className="space-y-3">  
          {error && <div className="text-red-500 text-sm mb-4">*{error}</div>}
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
          <label className="block text-gray-600 text-sm mb-1">Password</label>
          <div className="relative flex items-center">
            <div className="absolute right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <PiEye /> : <PiEyeClosedDuotone />}
            </div>
           
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2 mt-0.5 cursor-pointer" />
                <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
            </div>
            <div className="text-sm text-blue-500 hover:underline cursor-pointer">
                <a href="#">Forgot Password?</a>
            </div>    
          </div>

          <Button className='py-2.5'>
            Login
          </Button>
        </form>
        <div className="flex items-center mt-2">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div >
          <img src="/assets/Login_Options.png" alt="Login_Options" className="cursor-pointer mx-auto" />
        </div> 
        <div className="text-center text-sm text-gray-500">

            <p>Don't have an account?<Link to='/register' className="text-blue-500 hover:underline cursor-pointer"> Register Now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
