"use client";

import React, { useState, useEffect, useRef } from "react";

const logos = [
  { src: "/tools/kali.svg", alt: "kali" },
  { src: "/tools/parrot.svg", alt: "parrot" },
  { src: "/tools/hydra.svg", alt: "hydra" },
  { src: "/tools/metasploit.svg", alt: "metasploit" },
  { src: "/tools/splunk.svg", alt: "splunk" },
  { src: "/tools/wireshark.svg", alt: "wireshark" },
  { src: "/tools/elastic.svg", alt: "elastic" },
  { src: "/tools/burpsuite.svg", alt: "burpsuite" },
  { src: "/tools/nmap.svg", alt: "nmap" },
];

const LogoCloud = () => {
  const [items, setItems] = useState(logos.concat(logos)); // Duplicate logos for seamless loop
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container.scrollLeft === container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    };

    const intervalId = setInterval(handleScroll, 10); // Adjust scroll interval as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className="container flex space-x-10 overflow-x-hidden"
    >
      {items.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="h-24 object-contain rounded-lg shadow-md"
        />
      ))}
    </div>
  );
};

export default LogoCloud;
