"use client";

import { useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

interface Student {
  id: string;
  name: string;
  program: string;
  year: string;
}

// Mock data - swap this array for data from your database or API later.
const STUDENTS: Student[] = [
 { id: "ABC-2083-001", name: "Anish Gurung", program: "BICTE", year: "1st sem" },
{ id: "ABC-2081-002", name: "Sunita Thapa", program: "BBA", year: "3rd sem" },
{ id: "ABC-2081-003", name: "Rajan Poudel", program: "B.Ed Math", year: "2nd Year" },
{ id: "ABC-2081-004", name: "Kamala Adhikari", program: "B.Ed English", year: "4th Year" },
{ id: "ABC-2081-005", name: "Bishal Shrestha", program: "B.Ed Nepali", year: "1st Year" },
{ id: "ABC-2081-006", name: "Nisha Rana", program: "B.Ed Science", year: "2nd Year" },
{ id: "ABC-2081-007", name: "Prakash Bhandari", program: "BA", year: "3rd Year" },
{ id: "ABC-2081-008", name: "Sarita Karki", program: "BBS", year: "1st Year" },
{ id: "ABC-2081-009", name: "Bikal Shrestha", program: "BICTE", year: "4th sem" },
{ id: "ABC-2081-010", name: "Manisha Pandey", program: "BBA", year: "4th sem" },
{ id: "ABC-2081-011", name: "Suresh Gautam", program: "B.Ed Math", year: "1st Year" },
{ id: "ABC-2081-012", name: "Puja Regmi", program: "BA", year: "2nd Year" },

{ id: "ABC-2080-005", name: "Bidika Shrestha", program: "BICTE", year: "6th sem" },
{ id: "ABC-2080-006", name: "Binita Shrestha", program: "BICTE", year: "6th sem" },
{ id: "ABC-2080-002", name: "Anita Adhikari", program: "BICTE", year: "6th sem" },
{ id: "ABC-2080-014", name: "Mandira Kunwar", program: "BICTE", year: "6th sem" },
{ id: "ABC-2080-018", name: "Nisha Giri", program: "BICTE", year: "6th sem" },
{ id: "ABC-2080-019", name: "Prerana Thapa", program: "BICTE", year: "6th sem" },
{ id: "ABC-2080-017", name: "Nabaraj Thapa", program: "BICTE", year: "6th sem" },

{ id: "ABC-2083-BBS080", name: "Aayush Khatri",   program: "BICTE", year: "6th sem" },
{ id: "ABC-2083-BBS071", name: "Manju Shrestha",  program: "BBS", year: "1st year" },
{ id: "ABC-2079-BBS072", name: "Sabin Thapa",     program: "BBS", year: "4rth year" },
{ id: "ABC-2081-BBS088", name: "Rabin Mahat",     program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS018", name: "Abin Shrestha",   program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS008", name: "Sonisha Giri",    program: "BBS", year: "3rd year" },
{ id: "ABC-2083-BBS081", name: "Ranjita Ale",     program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS058", name: "Kalpana Shrestha",program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS089", name: "Anjila Gurung",   program: "BBS", year: "1st year" },
{ id: "ABC-2082-BBS098", name: "Neha Shah",       program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS012", name: "Ranjan Malla",    program: "BBS", year: "2nd year" },
{ id: "ABC-2079-BBS036", name: "Sabin Karmacharya", program: "BBS",year:"4rth year" },

{ id: "ABC-2081-BBS069", name: "Sanjeet Basnet", program: "BBS", year: "3rd year" },
{ id: "ABC-2083-BBS070", name: "Rabin Aryal",    program: "BBS", year: "1st year" },
{ id: "ABC-2082-BBS071", name: "Haei Adhikari",  program: "BBS", year: "2nd year" },
{ id: "ABC-2083-BBS082", name: "Reshab Koirala", program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS083", name: "Sanjana Sharma", program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS084", name: "Aakash BK",      program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS085", name: "Sushmita KC",    program: "BBS", year: "1st year" },
{ id: "ABC-2082-BBS086", name: "Kiran Magar",    program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS087", name: "Asmita Rai",     program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS090", name: "Dipesh Shrestha",program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS091", name: "Suman Lama",     program: "BBS", year: "2nd year" },
{ id: "ABC-2081-BBS092", name: "Roshani Khatri", program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS093", name: "Bibek Gautam",   program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS094", name: "Prabina Poudel", program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS095", name: "Anil Bohara",    program: "BBS", year: "3rd year" },
{ id: "ABC-2079-BBS096", name: "Ramesh Oli",     program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS097", name: "Sita Karki",     program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS099", name: "Anjeet Gurung",   program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS0100", name: "Kabin Bista",   program: "BBS", year: "4th year" },
{ id: "ABC-2083-BBS101", name: "kanju Gautam",   program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS102", name: "Ritika Khadka",  program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS103", name: "Sujan Karki",    program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS104", name: "Alisha Thapa",   program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS105", name: "Prabin Sharma",  program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS106", name: "Sneha Poudel",   program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS107", name: "Ritesh Bhandari",program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS108", name: "Anusha Koirala", program: "BBS", year: "1st year" },

{ id: "ABC-2082-BBS109", name: "Nabin Adhikari", program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS110", name: "Sushil Dahal",   program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS111", name: "Bipana Oli",     program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS112", name: "Roshan Magar",   program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS113", name: "Anita KC",       program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS114", name: "Kamal Ghimire",  program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS115", name: "Pabitra Rijal",  program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS116", name: "Nirajan Bhattarai", program: "BBS", year: "2nd year" },

{ id: "ABC-2081-BBS117", name: "Bikash Kandel",   program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS118", name: "Asmita Adhikari", program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS119", name: "Pratiksha Neupane",program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS120", name: "Rupesh Kharel",   program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS121", name: "Manisha Kafle",   program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS122", name: "Suman Adhikari",  program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS123", name: "Kushal Acharya",  program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS124", name: "Roshni Bista",    program: "BBS", year: "3rd year" },

{ id: "ABC-2079-BBS125", name: "Dipendra Joshi",  program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS126", name: "Bhawana Tamang",  program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS127", name: "Rajan Basnet",    program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS128", name: "Rajni Shahi",     program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS129", name: "Birkha Maharjan", program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS130", name: "Rupak Pariyar",   program: "BBS", year: "4th year" },

// B.Ed.M - 1st Year
{ id: "ABC-2083-BEDM101", name: "Anjana Karki",       program: "B.Ed.M", year: "1st year" },
{ id: "ABC-2083-BEDM102", name: "Bibek Thapa",        program: "B.Ed.M", year: "1st year" },
{ id: "ABC-2083-BEDM103", name: "Kabita Poudel",      program: "B.Ed.M", year: "1st year" },
{ id: "ABC-2083-BEDM104", name: "Manoj Gurung",       program: "B.Ed.M", year: "1st year" },
{ id: "ABC-2083-BEDM105", name: "Pramila Rai",        program: "B.Ed.M", year: "1st year" },
{ id: "ABC-2083-BEDM106", name: "Suman Acharya",      program: "B.Ed.M", year: "1st year" },
{ id: "ABC-2083-BEDM107", name: "Rojina Shrestha",    program: "B.Ed.M", year: "1st year" },
{ id: "ABC-2083-BEDM108", name: "Dipesh Khatri",      program: "B.Ed.M", year: "1st year" },
{ id: "ABC-2083-BEDM109", name: "Asmita Lama",        program: "B.Ed.M", year: "1st year" },
{ id: "ABC-2083-BEDM110", name: "Ramesh Bhandari",    program: "B.Ed.M", year: "1st year" },
{ id: "ABC-2083-BEDM111", name: "Saraswati Oli",      program: "B.Ed.M", year: "1st year" },
{ id: "ABC-2083-BEDM112", name: "Kiran KC",           program: "B.Ed.M", year: "1st year" },
{ id: "ABC-2083-BEDM113", name: "Nabin Ghimire",      program: "B.Ed.M", year: "1st year" },
{ id: "ABC-2083-BEDM114", name: "Mina BK",            program: "B.Ed.M", year: "1st year" },
{ id: "ABC-2083-BEDM115", name: "Roshan Adhikari",    program: "B.Ed.M", year: "1st year" },

// B.Ed.M - 2nd Year
{ id: "ABC-2082-BEDM116", name: "Sunita Koirala",     program: "B.Ed.M", year: "2nd year" },
{ id: "ABC-2082-BEDM117", name: "Prakash Gautam",     program: "B.Ed.M", year: "2nd year" },
{ id: "ABC-2082-BEDM118", name: "Rabin Rijal",        program: "B.Ed.M", year: "2nd year" },
{ id: "ABC-2082-BEDM119", name: "Anita Gurung",       program: "B.Ed.M", year: "2nd year" },
{ id: "ABC-2082-BEDM120", name: "Santosh Dahal",      program: "B.Ed.M", year: "2nd year" },
{ id: "ABC-2082-BEDM121", name: "Menuka Karki",       program: "B.Ed.M", year: "2nd year" },
{ id: "ABC-2082-BEDM122", name: "Bikash Neupane",     program: "B.Ed.M", year: "2nd year" },
{ id: "ABC-2082-BEDM123", name: "Sujan Shrestha",     program: "B.Ed.M", year: "2nd year" },
{ id: "ABC-2082-BEDM124", name: "Pabitra Bista",      program: "B.Ed.M", year: "2nd year" },
{ id: "ABC-2082-BEDM125", name: "Sushma KC",          program: "B.Ed.M", year: "2nd year" },
{ id: "ABC-2082-BEDM126", name: "Dipa Basnet",        program: "B.Ed.M", year: "2nd year" },
{ id: "ABC-2082-BEDM127", name: "Kamal Thapa",        program: "B.Ed.M", year: "2nd year" },
{ id: "ABC-2082-BEDM128", name: "Nirmala Rana",       program: "B.Ed.M", year: "2nd year" },
{ id: "ABC-2082-BEDM129", name: "Arjun Poudel",       program: "B.Ed.M", year: "2nd year" },
{ id: "ABC-2082-BEDM130", name: "Rita Pariyar",       program: "B.Ed.M", year: "2nd year" },

// B.Ed.M - 3rd Year
{ id: "ABC-2081-BEDM131", name: "Sabin Karki",        program: "B.Ed.M", year: "3rd year" },
{ id: "ABC-2081-BEDM132", name: "Nisha Thapa",        program: "B.Ed.M", year: "3rd year" },
{ id: "ABC-2081-BEDM133", name: "Prabin Oli",         program: "B.Ed.M", year: "3rd year" },
{ id: "ABC-2081-BEDM134", name: "Sabina Magar",       program: "B.Ed.M", year: "3rd year" },
{ id: "ABC-2081-BEDM135", name: "Bishal Shahi",       program: "B.Ed.M", year: "3rd year" },
{ id: "ABC-2081-BEDM136", name: "Rupesh Neupane",     program: "B.Ed.M", year: "3rd year" },
{ id: "ABC-2081-BEDM137", name: "Srijana Koirala",    program: "B.Ed.M", year: "3rd year" },
{ id: "ABC-2081-BEDM138", name: "Ramesh Lama",        program: "B.Ed.M", year: "3rd year" },
{ id: "ABC-2081-BEDM139", name: "Kusum Adhikari",     program: "B.Ed.M", year: "3rd year" },
{ id: "ABC-2081-BEDM140", name: "Dipendra Sharma",    program: "B.Ed.M", year: "3rd year" },
{ id: "ABC-2081-BEDM141", name: "Manisha Bista",      program: "B.Ed.M", year: "3rd year" },
{ id: "ABC-2081-BEDM142", name: "Hari Khadka",        program: "B.Ed.M", year: "3rd year" },
{ id: "ABC-2081-BEDM143", name: "Laxmi Tamang",       program: "B.Ed.M", year: "3rd year" },
{ id: "ABC-2081-BEDM144", name: "Rojan KC",           program: "B.Ed.M", year: "3rd year" },
{ id: "ABC-2081-BEDM145", name: "Sarita Ghimire",     program: "B.Ed.M", year: "3rd year" },

// B.Ed.M - 4th Year
{ id: "ABC-2079-BEDM146", name: "Deepak Basnet",      program: "B.Ed.M", year: "4th year" },
{ id: "ABC-2079-BEDM147", name: "Puja Karki",         program: "B.Ed.M", year: "4th year" },
{ id: "ABC-2079-BEDM148", name: "Anil Shrestha",      program: "B.Ed.M", year: "4th year" },
{ id: "ABC-2079-BEDM149", name: "Sita Rai",           program: "B.Ed.M", year: "4th year" },
{ id: "ABC-2079-BEDM150", name: "Kiran Maharjan",     program: "B.Ed.M", year: "4th year" },
{ id: "ABC-2079-BEDM151", name: "Bimala Gurung",      program: "B.Ed.M", year: "4th year" },
{ id: "ABC-2079-BEDM152", name: "Rakesh Khadka",      program: "B.Ed.M", year: "4th year" },
{ id: "ABC-2079-BEDM153", name: "Nabina Thapa",       program: "B.Ed.M", year: "4th year" },
{ id: "ABC-2079-BEDM154", name: "Suresh Koirala",     program: "B.Ed.M", year: "4th year" },
{ id: "ABC-2079-BEDM155", name: "Mamata Oli",         program: "B.Ed.M", year: "4th year" },
{ id: "ABC-2079-BEDM156", name: "Prakash Rana",       program: "B.Ed.M", year: "4th year" },
{ id: "ABC-2079-BEDM157", name: "Rekha Adhikari",     program: "B.Ed.M", year: "4th year" },
{ id: "ABC-2079-BEDM158", name: "Binod Poudel",       program: "B.Ed.M", year: "4th year" },
{ id: "ABC-2079-BEDM159", name: "Sangita BK",         program: "B.Ed.M", year: "4th year" },
{ id: "ABC-2079-BEDM160", name: "Mahesh Giri",        program: "B.Ed.M", year: "4th year" },

];

const PROGRAMS = ["All Programs", ...new Set(STUDENTS.map((s) => s.program))];

// Max rows shown per page. Change this single number to show more/fewer.
const PAGE_SIZE = 10;

export default function StudentTable() {
  const [query, setQuery] = useState<string>("");
  const [program, setProgram] = useState<string>("All Programs");
  const [page, setPage] = useState<number>(1);

  // Whenever the search text or program filter changes, jump back to
  // page 1. This is done during render (React's documented pattern for
  // "adjusting state when an input changes") instead of in a useEffect,
  // which avoids an extra render pass.
  const filterKey = `${query}|${program}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);
  if (filterKey !== prevFilterKey) {
    setPrevFilterKey(filterKey);
    setPage(1);
  }

  const filtered = useMemo(() => {
    return STUDENTS.filter((s) => {
      const matchesProgram = program === "All Programs" || s.program === program;
      const matchesQuery =
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.id.toLowerCase().includes(query.toLowerCase());
      return matchesProgram && matchesQuery;
    });
  }, [query, program]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  // Derived instead of stored in state: if filtering shrinks the results
  // below the page you were on, this naturally "snaps back" to the last
  // valid page without needing an extra effect.
  const currentPage = Math.min(page, totalPages);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const rangeStart = filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const rangeEnd = (currentPage - 1) * PAGE_SIZE + paginated.length;

  return (
    <div>
      {/* Search + filter controls */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or student ID"
            className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>

        <select
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 sm:w-56"
        >
          {PROGRAMS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="min-w-full divide-y divide-gray-100 text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-600">Student ID</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Name</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Program</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Year/Semester</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {paginated.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-3 text-gray-500">{s.id}</td>
                <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">{s.name}</td>
                <td className="whitespace-nowrap px-4 py-3 text-gray-600">{s.program}</td>
                <td className="whitespace-nowrap px-4 py-3 text-gray-600">{s.year}</td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-gray-400">
                  No students match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      {filtered.length > 0 && (
        <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm text-gray-500">
            Showing {rangeStart}–{rangeEnd} of {filtered.length} students
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:bg-gray-50"
            >
              <ChevronLeft size={16} />
              Prev
            </button>

            <span className="px-2 text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>

            <button
              type="button"
              onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:bg-gray-50"
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
