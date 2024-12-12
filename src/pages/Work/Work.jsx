import React from 'react';
import './work.css';
import WorkItem from './WorkItem';

// Importación de los archivos existentes y nuevos
import Work1 from '/Users/angelhernandezlencina/Downloads/CGMWTAPRIL2024 2/Source Code/soren/src/assets/work/work-1.jpg';
// ... Aquí van todas las importaciones de los trabajos ...

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
