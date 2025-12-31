import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>

      <p className="text-gray-700 text-lg mb-8">
        Have questions or need support? Feel free to reach out to us.
      </p>

      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <p className="text-gray-700">
          📧 <strong>Email:</strong> support@projectpulse.com
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong> +880 1609656133
        </p>
        <p className="text-gray-700">
          <strong>Location:</strong>Savar, Dhaka, Bangladesh
        </p>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}
