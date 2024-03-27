"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-primary">
        <h1 className="text-xl text-primary font-bold my-4 text-center">
          CLASSROOM MANAGEMENT SYSTEM
        </h1>
        <h2 className="text-base text-secondary font-bold my-4 text-center">
          ADMIN - REGISTER :)
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 items-center"
        >
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="rounded-md border-2 border-secondary"
            placeholder="Full Name"
          />
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
          <button className="bg-primary hover:bg-secondary rounded-md text-white font-bold cursor-pointer px-6 py-2 w-full">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 ">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-center" href={"/"}>
            Already have an account?{" "}
            <span className="underline text-blue-600 hover:text-secondary">
              Login
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}
