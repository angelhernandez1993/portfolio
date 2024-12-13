import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";
import { useScramble } from "use-scramble";

const useMultipleScrambles = (projects) => {
  return projects.map((project) => {
    const { ref: titleRef } = useScramble({
      text: project.title,
      speed: 1000,
    });
    const { ref: copyRef } = useScramble({
      text: project.copy,
      speed: 1000,
    });
    return { ...project, titleRef, copyRef };
  });
};

const Projects = () => {
  const projectData = [
    {
      title: "CEO - The Best Design",
      copy: "Profesional freelance (Autónomo)",
      year: "2024 - Presente",
      para1Title: "Gestión Integral de Marketing para Clientes y Empresas",
      para1: "Responsable de liderar el desarrollo y ejecución de estrategias integrales de marketing digital para empresas y clientes. Especialización en marketing de crecimiento, SEO/SEM, email marketing, automatizaciones, analítica web y generación de leads. Desarrollo de campañas de publicidad digital y gestión de redes sociales para mejorar la visibilidad y promover las marcas.",
      para2Title: "Diseño Gráfico y Web, Desarrollo de Contenidos",
      para2: "Encargado de la creación y diseño de elementos gráficos, como ebooks, creatividades, carteles y materiales para redes sociales. Diseño y gestión de sitios web y plataformas digitales, con un enfoque en la creación de landing pages efectivas. Redacción de contenidos adaptados para blogs, redes sociales, ebooks y otros canales de comunicación digital, optimizando la presencia online y el engagement con la audiencia.",
    },
    {
      title: "RESPONSABLE DE MARKETING",
      copy: "Lawoffice/ Kontratos",
      year: "2024 ENE - 2023 SEP",
      para1Title: "Marketing Digital & Social Media",
      para1: "Liderazgo en iniciativas de marketing, estrategias de growth, SEO/SEM, así como estrategias de email marketing, automatizaciones, analítica web y adquisición y gestión de leads a través de diversas técnicas. Responsable de la gestión y creación de contenidos en redes sociales, así como del diseño de campañas de publicidad digital para mejorar la visibilidad y promover las marcas.",
      para2Title: "Diseño gráfico y web, desarrollo web y Content Writing",
      para2: "Diseño gráfico integral, incluidos ebooks, creatividades, carteles y materiales para las redes sociales. Gestión de las plataformas web de ambas empresas, incluido el diseño y desarrollo de nuevas landing pages. Redacción y creación de contenidos para blogs, redes sociales, ebooks, etc.",
    },
    {
      title: "CONTENT WEB MANAGER",
      copy: "Coconú Publicidad",
      year: "2021 - 2022",
      para1Title: "Desarrollo y diseño web",
      para1: "Diseño, desarrollo y gestión de páginas web para clientes y proyectos internos de la agencia.",
      para2Title: "Diseño gráfico y Community Manager / Growth Hacking, SEO, SEM y Marketing Digital",
      para2: "Responsable de producir una amplia variedad de elementos de diseño, como carteles, contenido para redes sociales, materiales impresos y elementos web. Además, gestioné plataformas de redes sociales para clientes, LinkedIn, Instagram, Facebook, TikTok, etc. Encargado de implementar técnicas de growth hacking, SEO, SEM, analítica web, email marketing, redacción de contenidos, blogging y estrategias de automatización, a la vez proporcioné consultoría y formación para clientes.",
    },
    {
      title: "TÉCNICO DE MARKETING",
      copy: "Lizzo",
      year: "2019 - 2020",
      para1Title: "Ecommerce Growth, Estrategias SEO-SEM",
      para1: "Gestioné Decorazure, la plataforma de Ecommerce especializada de la empresa para la venta de papel pintado. Además, lideré la implementación de estrategias de crecimiento, SEO y SEM, lo que resultó en un aumento del tráfico del sitio web y mayores tasas de conversión, impulsando directamente el crecimiento de las ventas.",
      para2Title: "Social Media, Marketing, Diseño, etc",
      para2: "Realicé labores de Community manager. Colaboré en la gestión de ferias, eventos y nuevas colecciones. Además, creé material publicitario y piezas artísticas, como newsletters, fichas de productos etc.",
    },
    {
      title: "MASTER MBA + DIGITAL MARKETING & E- COMMERCE",
      copy: "(ENEB) Escuela de negocios Europea de Barcelona ",
      year: "2017 - 2018",
    },
    {
      title: "GRADO (BACHELOR) EN INTERNATIONAL BUSINESS",
      copy: "GBS (Galway Bussiness School) Galway (Irlanda)",
      year: "2022 - 2023",
    },
    {
      title: "CICLO SUPERIOR DE MARKETING & PUBLICIDAD",
      copy: "IES Figueras Pacheco (Alicante) Practicas en Activum Servicios Inmobiliarios",
      year: "2015 - 2017",
    },
    {
      title: "Especialización en coaching y PNL, (Psicología)",
      copy: "(ENEB) Escuela de negocios Europea de Barcelona",
      year: "2017 - 2018",
    },
    {
      title: "Desarrollo de temas de WordPress",
      copy: "Domestika",
    },
    {
      title: "Growth Hacking",
      copy: "Fundación Telefónica",
    },
    {
      title: "Crear prototipos y diseños de alta fidelidad en Figma",
      copy: "Coursera",
    },
    {
      title: "Llevar a cabo investigaciones en UX",
      copy: "Coursera",
    },
    {
      title: "Aspectos básicos del diseño de la experiencia del usuario",
      copy: "Coursera",
    },
    {
      title: "Crear esquemas de página y prototipos de baja fidelidad",
      copy: "Coursera",
    },
    {
      title: "Primeros pasos en el proceso de diseño de UX: Empatizar, definir e idear",
      copy: "Coursera",
    },
    {
      title: "Confección Y Publicación De Páginas Web",
      copy: "Promedia Formación",
    },
    {
      title: "Curso de Introducción al Desarrollo Web Acreditado por la UA",
      copy: "Universidad de Alicante",
    },
    {
      title: "Curso de desarrollo de Apps Acreditado por UCM",
      copy: "Universidad Complutense Madrid",
    },
    {
      title: "Curso de productividad personal Acreditado por la fundación Santa María La Real",
      copy: "Área de Empleo e Inclusión Social | Fundación Santa María la Real",
    },
    {
      title: "Curso en Analítica Web Acreditado por EOI",
      copy: "Escuela de Organización Industrial",
    },
    {
      title: "Curso en Cloud Computing Acreditado por EOI",
      copy: "Escuela de Organización Industrial",
    },
    {
      title: "Curso en E-Commerce Acreditado por EOI",
      copy: "Escuela de Organización Industrial",
    },
    {
      title: "Curso en Marketing Digital Acreditado por IAB",
      copy: "Interactive Advertising Bureau",
    },
    {
      title: "Curso en Personal de Admisión (PDA)",
      copy: "CENTRO DE FORMACIÓN AVANZA",
    },
    {
      title: "Google Ads y Facebook Ads desde cero",
      copy: "Domestika",
    },
    {
      title: "Lanzamiento de tu primer negocio online",
      copy: "Domestika",
    },
    {
      title: "Marketing de contenidos para redes sociales",
      copy: "Domestika",
    },
  ];

  const scrambledProjects = useMultipleScrambles(projectData);

  return (
    <div className="container page-projects">
      {scrambledProjects.map((project, index) => (
        <a href="https://drive.google.com/file/d/1Ikpn1pJ3sGYgQSo2ZAVazd7xdZ8OChNf/view" key={index} target="_blank" rel="noopener noreferrer">
          <div className="project-item">
            <div className="project-title">
              <p ref={project.titleRef}>{project.title}</p>
            </div>
            <div className="project-copy">
              <p ref={project.copyRef}>{project.copy}</p>
            </div>
            <div className="project-divider"></div>
            <div className="project-year">
              <p>{project.year}</p>
            </div>
            <div className="project-paragraphs">
              <div className="project-paragraph">
                <h4>{project.para1Title}</h4>
                <p>{project.para1}</p>
              </div>
              <div className="project-paragraph">
                <h4>{project.para2Title}</h4>
                <p>{project.para2}</p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
