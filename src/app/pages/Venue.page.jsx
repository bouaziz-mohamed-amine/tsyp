import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";

export default function VenuePage() {
  const carouselRef = useRef(null); // Référence pour accéder au conteneur du carrousel
  const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre l'image actuelle
  const totalImages = 2; // Nombre total d'images (modifiez selon vos besoins)

  const updateCarousel = (index) => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % totalImages;
    setCurrentIndex(newIndex);
    updateCarousel(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + totalImages) % totalImages;
    setCurrentIndex(newIndex);
    updateCarousel(newIndex);
  };

  return (
    <>
      <Fade triggerOnce>
        <section className="mt-10">
          <div className="xflex mb-8 items-center justify-center gap-2 text-center lg:mb-7">
            <h1 className="text-3xl font-bold tracking-tight lg:text-5xl lg:font-extrabold lg:leading-none">
              Medina Congress Center, Yasmine Hammamet.
            </h1>
          </div>
          

          
          <div className="flex items-center justify-center lg:mt-8">
            <div className="relative w-full max-w-6xl overflow-hidden rounded-lg shadow-lg">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-500"
              >
                <img
                  src="https://i.imgur.com/36ywwu3.png"
                  alt="Image 1"
                  className="w-full flex-shrink-0"
                />
                <img
                  src="https://i.imgur.com/fURRM4q.png"
                  alt="Image 2"
                  className="w-full flex-shrink-0"
                />
                
              </div>

              
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-gray-800 px-4 py-2 text-white shadow-md hover:bg-gray-700 focus:outline-none"
              >
               &larr;
              </button>

              
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-gray-800 px-4 py-2 text-white shadow-md hover:bg-gray-700 focus:outline-none"
              >
               &rarr;
              </button>
            </div>
          </div>
		  <section className="py-8 md:py-16">
            <div className="mx-auto">
              <iframe
                title="tsyp location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12851.062625886407!2d10.5328555!3d36.3664548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13029e020677bc0d%3A0x82fe8c3faf57e873!2sDiar%20Lemdina!5e0!3m2!1sen!2stn!4v1682280141809!5m2!1sen!2stn"
                className="w-full rounded-2xl shadow-lg"
                height="500"
                style={{
                  border: 0,
                }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                loading="lazy"
              ></iframe>
            </div>
          </section>
        </section>
      </Fade>
    </>
  );
}
