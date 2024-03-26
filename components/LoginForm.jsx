"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-primary">
        <h1 className="text-xl text-primary font-bold my-4 text-center">
          Classroom Management System
        </h1>
        <h2 className="text-base text-secondary font-bold my-4 text-center">
          Enter your login credentials :)
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 items-center"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="rounded-md border-2 border-secondary"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="rounded-md border-2 border-secondary"
            placeholder="Password"
          />
          <button className="bg-primary hover:bg-secondary w-full rounded-md text-white font-bold cursor-pointer px-6 py-2">
            Login
          </button>
          {error && (
            <div className="bg-red-500 w-full text-white text-center text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-center" href={"/register"}>
            Don`t have an account?{" "}
            <span className=" text-blue-600 hover:text-secondary hover:underline">
              Signup
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}
