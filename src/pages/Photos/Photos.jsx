import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./photos.css";
import Photo1 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-1.jpg";
import Photo2 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-2.jpg";
import Photo3 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-3.jpg";
import Photo4 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-4.jpg";
import Photo5 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-5.jpg";
import Photo6 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-6.jpg";
import Photo7 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-7.jpg";
import Photo8 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-8.jpg";
import Photo9 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-9.jpg";
import Photo10 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-10.jpg";
import Photo11 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-11.jpg";
import Photo12 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-12.jpg";
import Photo13 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-13.jpg";
import Photo14 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-14.jpg";
import Photo15 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-15.jpg";
import Photo16 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-16.jpg";
import Photo17 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-17.jpg";
import Photo18 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-18.jpg";
import Photo19 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-19.jpg";
import Photo20 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-20.jpg";
import Photo21 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-21.jpg";
import Photo22 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-22.jpg";
import Photo23 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-23.jpg";
import Photo24 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-24.jpg";
import Photo25 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-25.jpg";
import Photo26 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-26.jpg";
import Photo27 from "/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/photos/photos-27.jpg";

gsap.registerPlugin(useGSAP);

const Photos = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".page-photos img", { y: 300, stagger: 0.025, opacity: 0 });
    },
    { scope: container }
  );

  return (
    <div className="container page-photos" ref={container}>
      <a href="https://viaoffice.es/" target="_blank" rel="noopener noreferrer">
        <img src={Photo1} alt="Photo 1" />
      </a>
      <a href="https://coworkingplayaflamenca.es/" target="_blank" rel="noopener noreferrer">
        <img src={Photo2} alt="Photo 2" />
      </a>
      <a href="https://exadi.es/" target="_blank" rel="noopener noreferrer">
        <img src={Photo3} alt="Photo 3" />
      </a>
      <a href="https://cerroal.com/" target="_blank" rel="noopener noreferrer">
        <img src={Photo4} alt="Photo 4" />
      </a>
      <a href="https://albacetefitness.com/" target="_blank" rel="noopener noreferrer">
        <img src={Photo5} alt="Photo 5" />
      </a>
      <a href="https://feriadelquesoalbacete.com/" target="_blank" rel="noopener noreferrer">
        <img src={Photo6} alt="Photo 6" />
      </a>
      <a href="https://celebraliaalbacete.com/" target="_blank" rel="noopener noreferrer">
        <img src={Photo7} alt="Photo 7" />
      </a>
      <a href="https://bcfestival.es/" target="_blank" rel="noopener noreferrer">
        <img src={Photo8} alt="Photo 8" />
      </a>
      <a href="https://lawoffice.com.es/non-resident-tax-offer/" target="_blank" rel="noopener noreferrer">
        <img src={Photo9} alt="Photo 9" />
      </a>
      <a href="https://nochetelecoclm.es/" target="_blank" rel="noopener noreferrer">
        <img src={Photo10} alt="Photo 10" />
      </a>
      <a href="https://www.figma.com/design/rvWyWcx5tEYgBpsjlntEkn/Untitled?node-id=1-2&t=OaQ4Vpql8xn8oI4f-0" target="_blank" rel="noopener noreferrer">
        <img src={Photo11} alt="Photo 11" />
      </a>
      <a href="https://fotovolta.es/" target="_blank" rel="noopener noreferrer">
        <img src={Photo12} alt="Photo 12" />
      </a>
      <a href="https://www.google.es" target="_blank" rel="noopener noreferrer">
        <img src={Photo13} alt="Photo 13" />
      </a>
      <a href="https://angelhernandez1993.github.io/" target="_blank" rel="noopener noreferrer">
        <img src={Photo14} alt="Photo 14" />
      </a>
      <a href="https://thebestdesign.es/" target="_blank" rel="noopener noreferrer">
        <img src={Photo15} alt="Photo 15" />
      </a>
      <a href="https://portfoliodewebs.github.io/" target="_blank" rel="noopener noreferrer">
        <img src={Photo16} alt="Photo 16" />
      </a>
      <a href="https://sieteinox.es/" target="_blank" rel="noopener noreferrer">
        <img src={Photo17} alt="Photo 17" />
      </a>
      <a href="https://trebolcampero.com/" target="_blank" rel="noopener noreferrer">
        <img src={Photo18} alt="Photo 18" />
      </a>
      <a href="https://https://alminaresidences.com/" target="_blank" rel="noopener noreferrer">
        <img src={Photo19} alt="Photo 19" />
      </a>
      <a href="https://vepus.dk/" target="_blank" rel="noopener noreferrer">
        <img src={Photo20} alt="Photo 20" />
      </a>
      <a href="https://ponusmgmt.com/" target="_blank" rel="noopener noreferrer">
        <img src={Photo21} alt="Photo 21" />
      </a>
      <a href="https://www.pernetvillas.com/" target="_blank" rel="noopener noreferrer">
        <img src={Photo22} alt="Photo 22" />
      </a>
      <a href="https://www.oslo4.com/" target="_blank" rel="noopener noreferrer">
        <img src={Photo23} alt="Photo 23" />
      </a>
      <a href="https://agentes.ponusmgmt.com/" target="_blank" rel="noopener noreferrer">
        <img src={Photo24} alt="Photo 24" />
      </a>
      <a href="https://www.oslo3.com/" target="_blank" rel="noopener noreferrer">
        <img src={Photo25} alt="Photo 25" />
      </a>
      <a href="https://alcantaradelmar.com/" target="_blank" rel="noopener noreferrer">
        <img src={Photo26} alt="Photo 26" />
      </a>
      <a href="https://www.jardinesdealcantara.com" target="_blank" rel="noopener noreferrer">
        <img src={Photo27} alt="Photo 27" />
      </a>
    </div>
  );
};

export default Photos;
