import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import the marker icon and shadow images
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix the default icon paths
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Contact = () => {
  const position = [40.712776, -74.005974]; 
  return (
    <div>
      <Hero />
      <div>
        <div class="sm:px-24 md:px-[175px] my-20  bg-white">
          <div className="bg-gray-100 py-16 flex flex-col items-center justify-center">
            <div className="max-w-6xl w-full px-4">
              <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden">
                {/* Contact Form */}
                <div className="w-full lg:w-2/3 p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Have a Project?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                  <form className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full sm:w-1/2 p-3 mt-4 sm:mt-0 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <textarea
                      placeholder="Message"
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button
                      type="submit"
                      className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="w-full lg:w-1/3 bg-red-500 text-white p-8 flex flex-col justify-center items-start">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold">Address:</h4>
                    <p>198 West 21th Street, Suite 721</p>
                    <p>New York NY 10016</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-bold">Phone:</h4>
                    <p>+ 1235 2355 98</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-bold">Email:</h4>
                    <p>info@yoursite.com</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Website:</h4>
                    <p>yoursite.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MapContainer
      center={position}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          You are here! <br /> NYC.
        </Popup>
      </Marker>
    </MapContainer>
        </div>
      </div>
         
      <Footer />
    </div>
  );
};

export default Contact;
