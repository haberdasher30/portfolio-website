const logos = [
  {
    src: "/tools/kali.svg",
    alt: "Kali",
  },
  {
    src: "/tools/parrot.svg",
    alt: "Parrot",
  },
  {
    src: "/tools/nmap.svg",
    alt: "Nmap",
  },
  {
    src: "/tools/metasploit.svg",
    alt: "Metasploit",
  },
  {
    src: "/tools/hydra.svg",
    alt: "Hydra",
  },
  {
    src: "/tools/wireshark.svg",
    alt: "Wireshark",
  },
  {
    src: "/tools/elastic.svg",
    alt: "Elastic",
  },
  {
    src: "/tools/splunk.svg",
    alt: "Splunk",
  },
];

const LogoCloud = ({ aria_hidden = "false" }) => {
  return (
    <ul
      className="flex items-center justify-center [&_img]:max-w-none animate-infinite-scroll"
      aria-hidden={aria_hidden}
    >
      {logos.map((logo) => (
        <li key={logo.alt}>
          <img
            src={logo.src}
            alt={logo.alt}
            className={`${
              logo.alt === "Splunk" ? "h-8 md:h-12" : "h-16 md:h-24"
            } w-auto mx-5 md:mx-10 transition-all duration-1000 ease-in-out hover:scale-110`}
          />
        </li>
      ))}
    </ul>
  );
};

const Tools = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-5 w-full">
      <h1 className="text-2xl md:text-4xl text-greenColor font-bold">
        MY ARSENAL
      </h1>

      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_500px,_black_calc(100%-500px),transparent_100%)] py-2">
        <LogoCloud />
        <LogoCloud aria_hidden="true" />
      </div>
    </div>
  );
};

export default Tools;
