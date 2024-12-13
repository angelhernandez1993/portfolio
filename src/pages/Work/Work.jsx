import React from 'react';
import './work.css';
import WorkItem from './WorkItem';

// Importación de los archivos existentes y nuevos con las rutas actualizadas
import Work1 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-1.jpg';
import Work2 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-2.jpg';
import Work3 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-3.jpg';
import Work4Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-4.mp4';
import Work5 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-5.jpg';
import Work6 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-6.jpg';
import Work7 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-7.jpg';
import Work8 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-8.jpg';
import Work9 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-9.jpg';
import Work10 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-10.jpg';
import Work11 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-11.jpg';
import Work12 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-12.jpg';
import Work13 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-13.jpg';
import Work14 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-14.jpg';
import Work15 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-15.jpg';
import Work16 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-16.jpg';
import Work17 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-17.jpg';
import Work18Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-18.mp4';
import Work19Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-19.mp4';
import Work20 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-20.jpg';
import Work21Image from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-21.jpg';
import Work22Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-22.mp4';
import Work23Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-23.mp4';
import Work24Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-24.mp4';
import Work25Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-25.mp4';
import Work26Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-26.mp4';
import Work27Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-27.mp4';
import Work28Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-28.mp4';
import Work29Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-29.mp4';
import Work30 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-30.jpg';
import Work31Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-31.mp4';
import Work32 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-32.jpg';
import Work33 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-33.jpg';
import Work34 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-34.jpg';
import Work35Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-35.mp4';
import Work36Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-36.mp4';
import Work37Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-37.mp4';
import Work38 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-38.jpg';
import Work39 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-39.jpg';
import Work40Video from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-40.mp4';
import Work41 from '/Users/angelhernandezlencina/Desktop/THEBESTDESIGN/TBD/PORTFOLIO/soren/src/assets/work/work-41.jpg';

const Works = [
  Work1, Work2, Work3, Work4Video, Work5, Work6, Work7, Work8, Work9, Work10,
  Work11, Work12, Work13, Work14, Work15, Work16, Work17, Work18Video, Work19Video, Work20,
  Work21Image, Work22Video, Work23Video, Work24Video, Work25Video, Work26Video, Work27Video, Work28Video, Work29Video,
  Work30, Work31Video, Work32, Work33, Work34, Work35Video, Work36Video, Work37Video, Work38, Work39,
  Work40Video, Work41
];

const Work = () => {
  // Distribución de los elementos de manera más dinámica en 3 columnas
  const col1 = Works.slice(0, Math.ceil(Works.length / 3));
  const col2 = Works.slice(Math.ceil(Works.length / 3), Math.ceil(Works.length * 2 / 3));
  const col3 = Works.slice(Math.ceil(Works.length * 2 / 3));

  const renderWorkItem = (work, index) => {
    if (typeof work === 'string') {
      if (work.endsWith('.mp4')) {
        return (
          <div className="work-item type-video" key={index}>
            <video src={work} autoPlay loop muted onError={(e) => console.error(`Error loading video: ${work}`, e)}></video>
          </div>
        );
      } else if (work.endsWith('.jpg') || work.endsWith('.jpeg') || work.endsWith('.png')) {
        return (
          <WorkItem key={index} imgSrc={work} />
        );
      }
    }
    return null;
  };

  return (
    <div className="page-work">
      <div className="col">
        {col1.map((work, index) => renderWorkItem(work, index))}
      </div>
      <div className="col taller">
        {col2.map((work, index) => renderWorkItem(work, index))}
      </div>
      <div className="col">
        {col3.map((work, index) => renderWorkItem(work, index))}
      </div>
    </div>
  );
};

export default Work;
