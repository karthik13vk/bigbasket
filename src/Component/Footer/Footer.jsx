
import logo from  './../../assets/images/logo.png'

const Footer = () => (
  <footer className="w-full border-t border-gray-200 bg-white">
    <div className="container  mx-auto px-6 py-8">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
     
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="bigbasket"
            className=""
          />
        </div>

        <div className="flex flex-wrap gap-6 text-md text-semibold text-black">
          <a href="#" className="hover:text-lime-600">Help centre</a>
          <a href="#" className="hover:text-lime-600">FAQ</a>
          <a href="#" className="hover:text-lime-600">About</a>
          <a href="#" className="hover:text-lime-600">Contact us</a>
        </div>
      </div>

      <div className="my-6 border-t border-gray-200" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-md text-semibold text-black">
        <p>© 2026 Bigbasket Inc. Copyright and rights reserved</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-lime-600">Terms and Conditions</a>
          <span>•</span>
          <a href="#" className="hover:text-lime-600">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
