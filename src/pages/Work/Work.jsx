import React from 'react';
import './work.css';
import WorkItem from './WorkItem';

import Work1 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-1.jpg';
import Work2 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-2.jpg';
import Work3 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-3.jpg';
import Work4Video from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-4.mp4';
import Work5 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-5.jpg';
import Work6 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-6.jpg';
import Work7 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-7.jpg';
import Work8 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-8.jpg';
import Work9 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-9.jpg';
import Work10 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-10.jpg';
import Work11 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-11.jpg';
import Work12 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-12.jpg';
import Work13 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-13.jpg';
import Work14 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-14.jpg';
import Work15 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-15.jpg';
import Work16 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-16.jpg';
import Work17 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-17.jpg';
import Work18Video from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-18.mp4';
import Work19Video from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-19.mp4';
import Work20 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-20.jpg';
import Work21Image from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-21.jpg';
import Work22Video from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-22.mp4';
import Work23Video from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-23.mp4';
import Work24Video from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-24.mp4';
import Work25Video from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-25.mp4';
import Work26Video from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-26.mp4';
import Work27Video from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-27.mp4';
import Work28Video from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-28.mp4';
import Work29Video from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-29.mp4';

const Works = [
  Work1, Work2, Work3, Work4Video, Work5, Work6, Work7, Work8, Work9, Work10,
  Work11, Work12, Work13, Work14, Work15, Work16, Work17, Work18Video, Work19Video, Work20,
  Work21Image, Work22Video, Work23Video, Work24Video, Work25Video, Work26Video, Work27Video, Work28Video, Work29Video
];

const Work = () => {
  const col1 = Works.slice(0, 9); // Elementos 1 al 9 en la columna izquierda
  const col2 = Works.slice(9, 18); // Elementos 10 al 17 en la columna central
  const col3 = Works.slice(18);   // Elementos 18 al 29 en la columna derecha

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
      <div className="col">
        {col2.map((work, index) => renderWorkItem(work, index))}
      </div>
      <div className="col taller">
        {col3.map((work, index) => renderWorkItem(work, index))}
      </div>
    </div>
  );
};

export default Work;
