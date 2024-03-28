"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CreateRoutineForm() {
  const [classroomname, setClassroomName] = useState("");
  const [routinefor, setRoutineFor] = useState("");
  const [subject, setSubject] = useState("");
  const [day, setDays] = useState("");
  const [timefrom, setTimeFrom] = useState("");
  const [timeto, setTimeTo] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !classroomname ||
      !routinefor ||
      !subject ||
      !day ||
      !timefrom ||
      !timeto ||
      !date
    ) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/routines`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            classroomname,
            routinefor,
            subject,
            day,
            timefrom,
            timeto,
            date,
          }),
        }
      );

      if (response.ok) {
        console.log("Routine created successfully");
        // Redirect to the dashboard or any other page
        alert("Routine created successfully");
        router.push("/dashboard");
      }
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
              onChange={(e) => setClassroomName(e.target.value)}
              type="text"
              className="rounded-md border-2 border-secondary"
              placeholder="Classroom Name"
            />

            <input
              onChange={(e) => setRoutineFor(e.target.value)}
              type="text"
              className="rounded-md border-2 border-secondary"
              placeholder="Routine For"
            />
            <input
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              className="rounded-md border-2 border-secondary"
              placeholder="Subject"
            />
            <select
              onChange={(e) => setDays(e.target.value)}
              className="rounded-md w-full h-10 border-2 bg-gray-200 border-secondary"
            >
              <option value="">Select Days</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            <p className="text-lg font-normal text-green-500  ">
              Starting Time
            </p>
            <input
              type="time"
              onChange={(e) => setTimeFrom(e.target.value)}
              className="rounded-md border-2 border-secondary"
              name="timefrom"
              id="timefrom"
            />
            <p className="text-lg font-normal text-red-500">Ending Time</p>
            <input
              type="time"
              onChange={(e) => setTimeTo(e.target.value)}
              className="rounded-md border-2 border-secondary"
              name="timeto"
              id="timeto"
            />
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
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
