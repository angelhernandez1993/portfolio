import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./dock.css";
import {
  FaHome,
  FaGlobe,
  FaFolderOpen,
  FaPalette,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

const DockItem = ({
  IconComponent,
  path,
  isHovered,
  isNeighbor,
  onMouseEnter,
  external,
}) => {
  const scale = isHovered ? 2.5 : isNeighbor ? 2 : 1;
  const margin = isHovered || isNeighbor ? "28px" : "4px";
  const linkStyle = { transform: `scale(${scale})`, margin: `0 ${margin}` };

  return (
    <div className="dock-item" style={linkStyle} onMouseEnter={onMouseEnter}>
      {external ? (
        <a href={path} target="_blank" rel="noopener noreferrer">
          <div className="dock-item-link-wrap">
            <IconComponent size="14px" style={{ color: "hsl(0, 0%, 50%)" }} />
          </div>
        </a>
      ) : (
        <Link to={path}>
          <div className="dock-item-link-wrap">
            <IconComponent size="14px" style={{ color: "hsl(0, 0%, 50%)" }} />
          </div>
        </Link>
      )}
    </div>
  );
};

const Dock = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [hoverEffectsEnabled, setHoverEffectsEnabled] = useState(
    window.innerWidth >= 900
  );

  const labels = [
    "Home",
    "Diseños",
    "Background & CV",
    "Webs",
    "LinkedIn",
    "Portfolio PDF",
    "Email",
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      const isEnabled = window.innerWidth >= 900;
      setHoverEffectsEnabled(isEnabled);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleMouseEnter = (index) => {
    if (hoverEffectsEnabled) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (hoverEffectsEnabled) {
      setTimeout(() => {
        setHoveredIndex(-100);
      }, 50);
    }
  };

  const icons = [
    { icon: FaHome, path: "/" },
    { icon: FaPalette, path: "/work" },
    { icon: FaFolderOpen, path: "/projects" },
    { icon: FaGlobe, path: "/photos" },
    {
      icon: FaLinkedin,
      path: "https://www.linkedin.com/in/angelluishern%C3%A1ndezlencina/",
      external: true,
    },
    {
      icon: FaDownload,
      path: "https://drive.google.com/file/d/1FqTYskYIv_vbfIojO7EWic7HBjjUUJMH/view",
      external: true,
    },
    {
      icon: FaEnvelope,
      path: "mailto:angelhernandezlencina1993@gmail.com",
      external: true,
    },
  ];

  return (
    <div className="dock-container" onMouseLeave={handleMouseLeave}>
      <div className="dock">
        {icons.map((item, index) => (
          <DockItem
            key={index}
            IconComponent={item.icon}
            path={item.path}
            isHovered={index === hoveredIndex}
            isNeighbor={Math.abs(index - hoveredIndex) === 1}
            onMouseEnter={() => handleMouseEnter(index)}
            external={item.external}
          />
        ))}
      </div>
      {hoveredIndex !== -1 && (
        <button className="dock-text">{labels[hoveredIndex]}</button>
      )}
    </div>
  );
};

export default Dock;
