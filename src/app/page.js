
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <main className="grow relative bg-linear-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        {/* Background Illustration */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50%" cy="50%" r="300" fill="url(#grad1)" />
            <defs>
              <radialGradient id="grad1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#ffffff" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
              Welcome to ProjectPulse
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-xl">
              Track project progress, receive client feedback, manage risks,
              and monitor project health scores — all in one platform for IT
              & Software teams.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/images/hero-img.jpg"
              alt="Project management illustration"
              width={480}
              height={380}
              className="object-contain rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Features Section */}
        <section className="relative max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-blue-600">
              Weekly Check-ins
            </h3>
            <p className="text-gray-600">
              Employees submit weekly updates including progress, blockers,
              and confidence level.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-blue-600">
              Client Feedback
            </h3>
            <p className="text-gray-600">
              Clients provide structured feedback with satisfaction and
              communication ratings.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-blue-600">
              Risk & Health Score
            </h3>
            <p className="text-gray-600">
              Automatic health scoring highlights risks early for better
              decision-making.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
