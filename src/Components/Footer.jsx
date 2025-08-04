import React from "react";

const Footer = () => {
  return (
    <div className="bg-[url('https://i.postimg.cc/XN1f1zQY/24.jpg')] bg-cover bg-center bg-no-repeat ">
      <div className=" bg-[url('https://i.postimg.cc/KvKn6DHr/13.jpg')] bg-cover bg-center ">
        <div className=" max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-20 pb-20 text-center md:text-left text-[#331A15]">
          {/* Left Side */}
          <div className=" space-y-6 xl:p-0 p-2">
            <img
              src="https://i.postimg.cc/MZgDKLRr/logo1.png"
              alt=""
              className="w-19 h-22"
            />
            <h2
              className="text-5xl text-left font-extrabold rancho"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
            >
              Espresso Emporium
            </h2>
            <p className="max-w-xl text-left">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 fill-current rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.408.593 24 1.325 24h11.483V14.709h-3.13v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.408 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 0-4.924 2.206-4.924 4.923 0 .39.045.765.127 1.124-4.09-.205-7.72-2.164-10.148-5.144-.424.729-.666 1.575-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.418-1.68 1.318-3.809 2.103-6.102 2.103-.39 0-.779-.023-1.17-.067 2.179 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.637.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2C4.127 2 2 4.127 2 7.75v8.5C2 19.873 4.127 22 7.75 22h8.5C19.873 22 22 19.873 22 16.25v-8.5C22 4.127 19.873 2 16.25 2h-8.5zM4 7.75C4 5.683 5.683 4 7.75 4h8.5C18.317 4 20 5.683 20 7.75v8.5c0 2.067-1.683 3.75-3.75 3.75h-8.5C5.683 20 4 18.317 4 16.25v-8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.849 0-2.132 1.445-2.132 2.937v5.669h-3.554v-11.5h3.414v1.571h.049c.477-.9 1.637-1.849 3.369-1.849 3.605 0 4.27 2.373 4.27 5.458v6.32zM5.337 8.433c-1.144 0-2.072-.928-2.072-2.072 0-1.143.928-2.072 2.072-2.072s2.072.929 2.072 2.072c0 1.144-.928 2.072-2.072 2.072zm1.777 12.019H3.56v-11.5h3.554v11.5zM22.225 0H1.771C.792 0 0 .792 0 1.771v20.452C0 23.208.792 24 1.771 24h20.452C23.208 24 24 23.208 24 22.225V1.771C24 .792 23.208 0 22.225 0z" />
              </svg>
            </div>
            <div className="space-y-6">
              <h1
                className="font-extrabold text-5xl rancho text-left"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
              >
                Get in Touch
              </h1>
              <p className="flex font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#FFFFFF"
                  fill="#331A15"
                  className="size-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                +88 01533 333 333
              </p>
              <p className="flex font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#FFFFFF"
                  fill="#331A15" 
                  className="size-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                info@gmail.com
              </p>
              <p className="flex font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#FFFFFF"
                  fill="#331A15" 
                  className="size-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                72, Wall street, King Road, Dhaka
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className=" space-y-6 xl:mt-0 mt-10 xl:p-0 p-2">
            <h2
              className="text-5xl font-bold rancho text-left"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
            >
              Connect with Us
            </h2>
            <form className="space-y-4 max-w-md mx-auto md:mx-0">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-brown-300 rounded hover:border-4 hover:border-[#331A15]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-brown-300 rounded hover:border-4 hover:border-[#331A15]"
              />
              <textarea
                placeholder="Message"
                className="w-full p-2 border border-brown-300 rounded hover:border-4 hover:border-[#331A15]"
              ></textarea>
              <button className="rounded-3xl font-bold rancho  text-[#331A15]  px-4 py-2  border-3 border-[#331A15] hover:bg-[#331A15] hover:text-white transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className=" text-white text-center py-4">
        Copyright Espresso Emporium | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
