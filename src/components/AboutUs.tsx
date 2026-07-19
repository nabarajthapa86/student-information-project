import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: copy */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            The Institution
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            About Us
          </h2>

          <p className="mt-5 leading-relaxed text-gray-600">
            Aadikavi Bhanubhakta Campus is a premier community-based campus
            affiliated with Tribhuvan University. We provide quality
            education to students from diverse backgrounds, fostering an
            environment of innovation and research.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Founded on the principles of accessibility and excellence, our
            institution has become a beacon of higher learning in Gandaki
            Province. Our modern campus architecture and lush green
            surroundings provide the perfect backdrop for scholarly pursuits.
          </p>

          <div className="mt-8 flex items-center gap-10">
            <div className="border-l-2 border-blue-700 pl-4">
              <p className="text-2xl font-bold text-gray-900">35+</p>
              <p className="text-sm text-gray-500">Academic Years</p>
            </div>
            <div className="border-l-2 border-blue-700 pl-4">
              <p className="text-2xl font-bold text-gray-900">2000+</p>
              <p className="text-sm text-gray-500">Active Students</p>
            </div>
          </div>

          <Link
            href="/#faculty"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            View our Heritage &amp; History
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Right: campus photo */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/about-campus.jpg"
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
