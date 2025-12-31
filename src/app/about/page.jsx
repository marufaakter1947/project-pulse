import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    
   <div>
    <Navbar></Navbar>
     <div className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>

      <p className="text-gray-700 text-lg mb-4">
        <strong>ProjectPulse</strong> is a project monitoring platform designed
        for IT and software teams to track progress, manage risks, and collect
        structured feedback from clients.
      </p>

      <p className="text-gray-700 text-lg mb-4">
        Our goal is to improve transparency, communication, and overall project
        health by providing real-time insights and weekly check-ins.
      </p>

      <p className="text-gray-700 text-lg">
        Whether you are an admin, employee, or client — ProjectPulse helps
        everyone stay aligned and productive.
      </p>
    </div>
    <Footer></Footer>
   </div>
  );
}
