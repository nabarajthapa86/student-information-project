import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudentTable from "@/components/StudentTable";

export const metadata: Metadata = {
  title: "Student List | Aadikavi Bhanubhakta Campus",
};

export default function StudentsPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-900"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900">Student List</h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Search or filter enrolled students by name, student ID, or program.
        </p>

        <div className="mt-8">
          <StudentTable />
        </div>
      </main>

      <Footer />
    </>
  );
}
