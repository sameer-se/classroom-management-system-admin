"use client";

import { useState } from "react";
import Link from "next/link";

function AddClassroomForm() {
  const [classroomName, setClassroomName] = useState("");
  const [studentCapacity, setStudentCapacity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!classroomName || !studentCapacity) {
      setError("All fields are necessary.");
      return;
    }

    try {
      // Add your logic to add the classroom here
      console.log(
        `Adding classroom: ${classroomName} with capacity: ${studentCapacity}`
      );
    } catch (error) {
      console.log("Error during classroom addition: ", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-between h-screen bg-gray-200">
        {/* NavBar */}
        <div className="flex w-full justify-between items-center p-6 bg-primary shadow-md">
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
        {/* Main Page */}

        <div className="shadow-lg p-5 rounded-lg border-t-4 w-min ml-[35%] border-primary">
          <h1 className="text-xl font-bold my-4 text-center">
            Add a Classroom
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 items-center"
          >
            <input
              onChange={(e) => setClassroomName(e.target.value)}
              type="text"
              className="rounded-md border-2 border-secondary"
              placeholder="Classroom Name"
            />
            <input
              onChange={(e) => setStudentCapacity(e.target.value)}
              type="number"
              className="rounded-md border-2 border-secondary"
              placeholder="Student Capacity"
            />
            <button className="bg-primary hover:bg-secondary text-white font-bold cursor-pointer px-6 py-2 w-full">
              Add Classroom
            </button>

            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 ">
                {error}
              </div>
            )}
          </form>
        </div>
        {/* Footer */}
        <footer className="w-full bg-primary h-fit">
          <p className="text-white text-center pt-4 pb-4">
            Created By: Sameer Khadka
          </p>
        </footer>
      </div>
    </div>
  );
}

export default AddClassroomForm;
