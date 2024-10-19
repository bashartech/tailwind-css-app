import Link from "next/link"

export default function Footer() {
    return (
      <footer className="bg-black text-white py-8" id="contact">
        <div className="container mx-auto px-4">
          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Navigation Links */}
            <nav className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <Link href="#" className="hover:underline">Home</Link>
              <Link href="#about" className="hover:underline">About</Link>
              <Link href="#services" className="hover:underline">Services</Link>
              <Link href="#contact" className="hover:underline">Contact</Link>
            </nav>
  
            {/* Address Info */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p>Scheme-33</p>
              <p>Karachi, 12345</p>
              <p>Phone: 03042985456</p>
              <p>Email: bashartc@gmail.com</p>
            </div>
  
            
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold">Getting More Updates </h3>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 w-full rounded-md bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full mt-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-2 md:mb-0">
              &copy; 2024 Bashar Tech. All rights reserved.
            </p>

            <Link
              href="#services"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </footer>
    );
  }