"use client";

import { useState } from "react";
import Link from "next/link";

function CreateRoutineForm() {
  const [routineName, setRoutineName] = useState("");
  const [routineDetails, setRoutineDetails] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!routineName || !routineDetails) {
      setError("All fields are necessary.");
      return;
    }

    try {
      // Add your logic to create the routine here
      console.log(
        `Creating routine: ${routineName} with details: ${routineDetails}`
      );
    } catch (error) {
      console.log("Error during routine creation: ", error);
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
          <h1 className="text-xl font-bold my-4 text-center">
            Create a Routine
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 items-center"
          >
            <input
              onChange={(e) => setRoutineName(e.target.value)}
              type="text"
              className="rounded-md border-2 border-secondary"
              placeholder="Routine Name"
            />

            <input
              onChange={(e) => setRoutineDetails(e.target.value)}
              type="text"
              className="rounded-md border-2 border-secondary"
              placeholder="Routine For"
            />
            <p className="text-lg font-normal text-secondary  ">
              Starting Time
            </p>
            <input type="time" name="timefrom" id="timefrom" />
            <p className="text-lg font-normal text-secondary">Ending Time</p>
            <input type="time" name="timefrom" id="timefrom" />
            <input
              type="date"
              className="rounded-md border-2 border-secondary"
              name="date"
              id="date"
            />
            <button className="bg-primary hover:bg-secondary text-white font-bold cursor-pointer px-6 py-2 w-full">
              Create Routine
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

export default CreateRoutineForm;
