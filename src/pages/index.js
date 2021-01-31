import React, { createRef, useState, useEffect } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Logo from "../images/logo2.svg";
import Listen from "../images/listen.jpg";
import Audio from "../audio/audio.flac";

const IndexPage = () => {
  const logoRef = createRef(null);
  const textRef = createRef(null);
  const mainRef = createRef(null);
  const imgRef = createRef(null);
  const audioRef = createRef(null);

  const [page, setPage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  let isMobile = typeof window !== `undefined` && window.innerWidth < 600;

  const changePage = (pageId) => {
    setPage(pageId);

    if (pageId === "listen" && isPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();
      logoRef.current.style.transition = "transform 1s ease-in-out 1s";
      logoRef.current.style.transform = "translate(-50%, 0)";

      textRef.current.style.transition = "opacity 1s ease-in-out";
      textRef.current.style.opacity = 0;
    } else if (pageId === "listen") {
      setIsPlaying(true);
      audioRef.current.play();
      logoRef.current.style.transition = "transform 1s ease-in-out";
      logoRef.current.style.transform = "translate(-50%, 12rem)";

      textRef.current.style.transition = "opacity 1s ease-in-out 1s";
      textRef.current.style.opacity = 1;
    } else {
      logoRef.current.style.transition = "transform 1s ease-in-out";
      logoRef.current.style.transform = "translate(-50%, 12rem)";

      textRef.current.style.transition = "opacity 1s ease-in-out 1s";
      textRef.current.style.opacity = 1;
    }
  };

  const Image = () => (
    <img
      ref={imgRef}
      src={Listen}
      alt="listen"
      style={{
        position: "absolute",
        top: isMobile ? "-0.5rem" : "-6.85rem",
        width: "100%",
        transform: isMobile
          ? "scale(1) translateX(-5px)"
          : "scale(.71) translateX(-5px)",
        left: 0,
        transition: "opacity 1s ease-in-out",
      }}
    />
  );

  const content = {
    about: "Migrant Recordings field recording studio.",
    contact: "mail@migrantrecordings.com",
    listen: <Image />,
  };

  useEffect(() => {
    mainRef.current.style.transition = "opacity 1s ease-in-out .5s";
    mainRef.current.style.opacity = 1;
  }, []);

  const NavBtn = ({ page }) => (
    <div
      style={{
        color: "black",
        textDecoration: "none",
        minWidth: isMobile ? "0" : "200px",
        textAlign: "center",
      }}
      onClick={() => changePage(page)}
    >
      {page === "listen" ? (isPlaying ? "pause" : "listen") : page}
    </div>
  );

  return (
    <Layout>
      <audio id="myAudio" ref={audioRef}>
        <source src={Audio} type="audio/flac" />
        Your browser does not support the audio element.
      </audio>

      <main
        ref={mainRef}
        style={{
          marginTop: "12rem",
          position: "relative",
          opacity: 0,
        }}
      >
        <nav
          style={{
            maxWidth: "100%",
            width: "770px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: isMobile ? "4.5vw" : "2rem",
            fontWeight: "600",
            fontFamily: "Lato",
            letterSpacing: ".025em",
            color: "black",
            textTransform: "uppercase",
            fontFamily:
              "Cantarell, Helvetica Neue, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <NavBtn page="about" />
          <NavBtn page="contact" />
          <NavBtn page="listen" />
        </nav>

        <h2
          ref={textRef}
          style={{
            position: "absolute",
            top: isMobile ? "5.75rem" : "8rem",
            width: "100%",
            margin: "0 auto",
            display: "block",
            textAlign: "center",
            fontWeight: "500",
            letterSpacing: ".035em",
            fontSize: isMobile ? "1.25rem" : "1.5rem",
            color: "black",
            fontFamily:
              "Cantarell, Helvetica Neue, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
            lineHeight: 1.5,
            opacity: 0,
            transition: "opacity 1s ease-in-out 1s",
          }}
        >
          {content[page]}
        </h2>

        <img
          ref={logoRef}
          src={Logo}
          alt=""
          style={{
            position: "absolute",
            top: "200%",
            left: "50%",
            width: isMobile ? "100%" : "690px",
            transform: "translateX(-50%)",
            transition: "transform 1s ease-in-out",
            zIndex: -1,
            color: "tomato",
          }}
        />
      </main>
    </Layout>
  );
};

export default IndexPage;
