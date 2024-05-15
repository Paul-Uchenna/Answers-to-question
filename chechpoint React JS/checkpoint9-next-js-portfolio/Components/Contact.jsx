import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  return (
    <>
      <section className="pt-[4rem] md:pt-[8rem] pb-[3rem] bg-[#09101a] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
              Contact <span className="text-[#f021b2]"> Me</span>
            </h2>
          </div>
          <h3 className="text-[1.5rem] font-bold text-center mb-4 text-[#f021b2]">
            Have You any Question?
          </h3>
          <h4 className="text-lg font-bold text-center mb-8">
            I&apos;M AT YOUR SERVICE
          </h4>

          <div className="flex flex-wrap -mx-4 mb-12">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">
                  <i className="fa fa-phone text-[#f021b2]"></i>
                </div>
                <h4 className="text-xl font-medium mb-2">Call Me On</h4>
                <p>+221 781610800</p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">
                  <i className="fa fa-map-marker-alt text-[#f021b2]"></i>
                </div>
                <h4 className="text-xl font-medium mb-2">Office</h4>
                <p>Dakar</p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">
                  <i className="fa fa-envelope text-[#f021b2]"></i>
                </div>
                <h4 className="text-xl font-medium mb-2">Email</h4>
                <p>pauluchenna20@gmail.com</p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">
                  <i className="fa fa-globe-europe text-[#f021b2]"></i>
                </div>
                <h4 className="text-xl font-medium mb-2">Website</h4>
                <p>www.pauluchennaent.com</p>
              </div>
            </div>
          </div>

          <h3 className="text-[1.7rem] font-bold text-center mb-4 text-[#f021b2]">
            SEND ME AN EMAIL
          </h3>
          <h4 className="text-lg font-bold text-center mb-8">
            I&apos;M VERY RESPONSIVE TO MESSAGES
          </h4>

          <div className="max-w-3xl mx-auto">
            <form>
              <div className="flex flex-wrap -mx-4 mb-4">
                <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                    placeholder="Name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-4">
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="text-start">
                <button
                  type="submit"
                  className="bg-[#55e6a5] text-black font-bold py-3 px-6 rounded-md "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
