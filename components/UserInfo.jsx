"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AdminDashboard() {
  const { data: session } = useSession();

  return (
    <div>
      <div className="flex flex-col h-screen bg-gray-200">
        {/* NavBar */}
        <div className="flex justify-between items-center p-6 bg-primary shadow-md">
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
            <button
              onClick={() => signOut()}
              className="bg-secondary hover:bg-red-700 text-white rounded px-6 py-2"
            >
              Log Out
            </button>
          </nav>
        </div>
        {/* Main */}
        <div className="flex flex-1 justify-center items-center text-3xl font-bold">
          Welcome, {session?.user?.name} :)
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
