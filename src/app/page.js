import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="grow relative bg-linear-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        {/* Background Illustration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50%" cy="50%" r="300" fill="url(#grad1)" />
            <defs>
              <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#ffffff" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="relative flex flex-col items-center justify-center text-center py-24 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            Welcome to ProjectPulse
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl">
            Track project progress, receive client feedback, manage risks, and monitor project health scores—all in one platform for IT & Software Companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/auth/login"
              className="bg-linear-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition"
            >
              Login
            </Link>
            <Link
              href="/dashboard/admin"
              className="bg-linear-to-r from-gray-300 to-gray-400 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:from-gray-400 hover:to-gray-500 transition"
            >
              Explore Dashboard
            </Link>
          </div>

          {/* Features Section */}
          <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Weekly Check-ins</h3>
              <p className="text-gray-600">Employees submit weekly updates including progress, blockers, and confidence level.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Client Feedback</h3>
              <p className="text-gray-600">Clients provide structured feedback weekly, with satisfaction and communication ratings.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Risk & Health Score</h3>
              <p className="text-gray-600">System calculates project health score automatically and highlights risks for early intervention.</p>
            </div>
          </section>

          {/* Quick Role Access */}
          <section className="w-full max-w-5xl text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Quick Role Access</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <Link
                href="/dashboard/admin"
                className="bg-linear-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-800 transition"
              >
                Admin Dashboard
              </Link>
              <Link
                href="/dashboard/employee"
                className="bg-linear-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition"
              >
                Employee Dashboard
              </Link>
              <Link
                href="/dashboard/client"
                className="bg-linear-to-r from-yellow-400 to-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-600 transition"
              >
                Client Dashboard
              </Link>
            </div>

            {/* Dashboard Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Admin Card */}
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition text-left">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Admin</h3>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Create & manage projects</li>
                  <li>Assign employees & clients</li>
                  <li>Monitor project health & risks</li>
                  <li>View dashboards & reports</li>
                </ul>
              </div>

              {/* Employee Card */}
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition text-left">
                <h3 className="text-xl font-bold text-green-600 mb-2">Employee</h3>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Submit weekly check-ins</li>
                  <li>Report blockers & risks</li>
                  <li>View assigned projects</li>
                  <li>Monitor progress & confidence</li>
                </ul>
              </div>

              {/* Client Card */}
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition text-left">
                <h3 className="text-xl font-bold text-yellow-600 mb-2">Client</h3>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Submit weekly feedback</li>
                  <li>Rate satisfaction & communication</li>
                  <li>Flag issues if needed</li>
                  <li>View assigned projects & health status</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
