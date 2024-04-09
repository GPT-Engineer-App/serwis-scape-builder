import { FaHome, FaWrench, FaImages, FaUsers, FaEnvelope, FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <header className="bg-green-500 text-white">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <FaWrench className="text-3xl mr-2" />
            <span className="font-bold text-xl">Kal-Serwis</span>
          </div>
          <div className="flex space-x-4">
            <a href="#home" className="hover:underline">
              <FaHome /> Home
            </a>
            <a href="#services" className="hover:underline">
              <FaWrench /> Services
            </a>
            <a href="#portfolio" className="hover:underline">
              <FaImages /> Portfolio
            </a>
            <a href="#about" className="hover:underline">
              <FaUsers /> About Us
            </a>
            <a href="#contact" className="hover:underline">
              <FaEnvelope /> Contact
            </a>
          </div>
          <button className="btn btn-primary">Get a Quote</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <img src="playground.jpg" alt="Playground" className="mx-auto mb-8" />
        <h1 className="text-5xl font-bold">Transforming Spaces, One Playground at a Time</h1>
        <p className="mt-4">Explore our wide range of services designed to bring joy and creativity to your community.</p>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex justify-between">
          <div>
            <h5 className="font-bold">Contact Us</h5>
            <p>
              <FaPhone /> +48 123 456 789
            </p>
            <p>
              <FaEnvelope /> contact@kal-serwis.com
            </p>
            <p>123 Playground St., Fun City</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="text-center mt-4">&copy; 2023 Kal-Serwis. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
