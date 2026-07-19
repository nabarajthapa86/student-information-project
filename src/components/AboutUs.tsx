import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: copy */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0E76BD]">
            The Institution
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            About Us
          </h2>

          <p className="mt-5 leading-relaxed text-gray-600">
           Aadikavi Bhanubhakta Campus is the largest and most reputable institution 
           for higher education in the Tanahun district, providing students with a diverse 
           range of academic programs and fostering a strong foundation for personal and professional growth.
            Located in Vyas Municipality, Ward No. 1, Bigyan Chaur, Damauli, the district headquarters,
             the campus sits at a key geographic point—150 km west of Kathmandu 
           and 50 km east of Pokhara, making it accessible to students from surrounding regions.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
           Established in 1987, Aadikavi Bhanubhakta Campus is the oldest educational
            institution in the area, set up with the primary goal of delivering quality,
             accessible education to students from diverse backgrounds. Over the years,
              it has played a pivotal role in empowering students from downtrodden, indigenous,
               marginalized, and educationally disadvantaged communities, 
           ensuring they receive the opportunity to pursue higher education.
          </p>

          <div className="mt-8 flex items-center gap-10">
            <div className="border-l-2 border-[#0E76BD] pl-4">
              <p className="text-2xl font-bold text-gray-900">37+</p>
              <p className="text-sm text-gray-500">Years Of Services</p>
            </div>
            <div className="border-l-2 border-[#0E76BD] pl-4">
              <p className="text-2xl font-bold text-gray-900">2000+</p>
              <p className="text-sm text-gray-500">Active Students</p>
            </div>
             <div className="border-l-2 border-[#0E76BD] pl-4">
              <p className="text-2xl font-bold text-gray-900">QAA Accredited Institution</p>
              <p className="text-sm text-gray-500">Quality Assurance & Accreditation</p>
            </div>
          </div>

          <Link
            href="/#faculty"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E76BD] hover:text-blue-900"
          >
            View our Heritage &amp; History
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Right: campus photo */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/aboutus.jpg"
              alt="Aadikavi Bhanubhakta Campus building"
              width={900}
              height={650}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
