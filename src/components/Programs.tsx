import type { LucideIcon } from "lucide-react";
import {
  MonitorSmartphone,
  Briefcase,
  Calculator,
  Languages,
  PenTool,
  FlaskConical,
  Landmark,
  Building2,
} from "lucide-react";

interface Program {
  name: string;
  tag: string;
  detail: string;
  Icon: LucideIcon;
}

// One object per program card - edit this list to add/remove/rename programs.
const PROGRAMS: Program[] = [
  {
    name: "BICTE",
    tag: "Technology",
    detail: "ICT in Education",
    Icon: MonitorSmartphone,
  },
  {
    name: "BBA",
    tag: "Management",
    detail: "Business Administration",
    Icon: Briefcase,
  },
  {
    name: "B.Ed Math",
    tag: "Education",
    detail: "Mathematics Specialists",
    Icon: Calculator,
  },
  {
    name: "B.Ed English",
    tag: "Humanities",
    detail: "Linguistics & Pedagogy",
    Icon: Languages,
  },
  {
    name: "B.Ed Nepali",
    tag: "Literature",
    detail: "Culture & Heritage",
    Icon: PenTool,
  },
  {
    name: "B.Ed Science",
    tag: "STEM",
    detail: "General Sciences",
    Icon: FlaskConical,
  },
  {
    name: "BA",
    tag: "Liberal Arts",
    detail: "Humanities & Social Science",
    Icon: Landmark,
  },
  {
    name: "BBS",
    tag: "Commerce",
    detail: "Business Studies",
    Icon: Building2,
  },
];

export default function Programs() {
  return (
    <section id="faculty" className="scroll-mt-20 bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Programs &amp; Faculties
          </h2>
          <p className="mt-3 text-gray-600">
            Choose from our diverse range of undergraduate and graduate
            programs designed to prepare you for global career opportunities.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map(({ name, tag, detail, Icon }) => (
            <div
              key={name}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {name}
              </h3>
              <span className="mt-2 inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                {tag}
              </span>
              <p className="mt-2 text-sm text-gray-500">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
