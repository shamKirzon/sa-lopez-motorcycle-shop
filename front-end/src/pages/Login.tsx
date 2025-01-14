import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      `this is your username: ${username}, this is your password: ${password}`
    );

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login Failed.");
      }

      const data = await response.json();
      console.log("Login Successfully", data);
      
    } catch (err) {
      console.error("failed to connect to the backend ");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="h-[30rem] w-[30rem] bg-[#D9D9D9] rounded-[1rem] flex items-center justify-center">
        <form onSubmit={handleLogin} className="w-full space-y-[1rem] p-10">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              className="h-[2.5rem] w-full bg-white border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              className="h-[2.5rem] w-full bg-white border border-gray-300 rounded-md p-2"
            />
          </div>

          <Button
            type="submit"
            className="shadow-lg bg-[#BFBFBF] mt-[1.5rem] w-full rounded-[1rem] py-2"
          >
            LOGIN
          </Button>

          <div className="text-center">
            <Link
              to="/forgot-password "
              className="text-blue-500 hover:underline"
            >
              Forgot Password
            </Link>
            <p>
              Don't have an account?{""}
              <Link to="/signup" className="text-blue-500 hover:underline ml-2">
                Sign up here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
