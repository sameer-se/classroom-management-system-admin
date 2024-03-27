"use client";

import { useState } from "react";
import Link from "next/link";

function AddStudentForm() {
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentGender, setStudentGender] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!studentName || !studentEmail || !studentGender) {
      setError("All fields are necessary.");
      return;
    }

    try {
      // Add your logic to add the student here
      console.log(
        `Adding student: ${studentName} with email: ${studentEmail} and gender: ${studentGender}`
      );
    } catch (error) {
      console.log("Error during student addition: ", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-between h-screen bg-gray-200">
        {/* NavBar */}
        <div>
          <div className="flex justify-between w-full items-center p-6 bg-primary shadow-md">
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <nav className="flex space-x-4">
              <Link
                href="/dashboard"
                className="hover:text-secondary text-white pt-2"
              >
                Home
              </Link>
              <Link
                href="/msystem/addclassroom"
                className="hover:text-secondary text-white pt-2"
              >
                Add Classroom
              </Link>
              <Link
                href="/msystem/addstudent"
                className="hover:text-secondary text-white pt-2"
              >
                Add Student
              </Link>
              <Link
                href="/msystem/createroutine"
                className="hover:text-secondary text-white pt-2"
              >
                Create Routine
              </Link>
            </nav>
          </div>
        </div>
        {/* Main */}
        <div className="shadow-lg p-5 rounded-lg border-t-4 w-min ml-[35%] border-primary">
          <h1 className="text-xl font-bold my-4 text-center">Add a Student</h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 items-center"
          >
            <input
              onChange={(e) => setStudentName(e.target.value)}
              type="text"
              className="rounded-md border-2 border-secondary"
              placeholder="Student Name"
            />
            <input
              onChange={(e) => setStudentEmail(e.target.value)}
              type="email"
              className="rounded-md border-2 border-secondary"
              placeholder="Student Email"
            />
            <select
              onChange={(e) => setStudentGender(e.target.value)}
              className="rounded-md border-2 border-secondary w-full p-2"
              placeholder="Role"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <button className="bg-primary hover:bg-secondary text-white font-bold cursor-pointer px-6 py-2 w-full">
              Add Student
            </button>

            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 ">
                {error}
              </div>
            )}
          </form>
        </div>
        <footer className="w-full bg-primary h-fit">
          <p className="text-white text-center pt-4 pb-4">
            Created By: Sameer Khadka
          </p>
        </footer>
      </div>
    </div>
  );
}

export default AddStudentForm;
