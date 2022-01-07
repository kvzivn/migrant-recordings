/** @jsx jsx */
import { jsx } from "theme-ui"
import { createRef, useState, useEffect } from "react"
import "../styles/styles.css"

import Layout from "../components/layout"
import Logo from "../images/logo2.svg"
import Listen from "../images/listen.jpg"
import Audio from "../audio/about.mp3"

const IndexPage = () => {
  const logoRef = createRef(null)
  const textRef = createRef(null)
  const mainRef = createRef(null)
  const imgRef = createRef(null)
  const audioRef = createRef(null)
  const [page, setPage] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const changePage = (pageId) => {
    setPage(pageId)

    if (pageId === "listen" && isPlaying) {
      setIsPlaying(false)
      audioRef.current.pause()
      logoRef.current.style.transition = "transform 1s ease-in-out 1s"
      logoRef.current.style.transform = "translate(-50%, 0)"

      textRef.current.style.transition = "opacity 1s ease-in-out"
      textRef.current.style.opacity = 0
    } else if (pageId === "listen") {
      setIsPlaying(true)
      audioRef.current.play()
      logoRef.current.style.transition = "transform 1s ease-in-out"
      logoRef.current.style.transform = "translate(-50%, 12rem)"

      textRef.current.style.transition = "opacity 1s ease-in-out 1s"
      textRef.current.style.opacity = 1
    } else {
      logoRef.current.style.transition = "transform 1s ease-in-out"
      logoRef.current.style.transform = "translate(-50%, 12rem)"

      textRef.current.style.transition = "opacity 1s ease-in-out 1s"
      textRef.current.style.opacity = 1
    }
  }

  const Image = () => (
    <img
      ref={imgRef}
      src={Listen}
      alt="listen"
      className="listen-img"
      sx={{
        position: "absolute",
        width: "100%",
        left: 0,
        transition: "opacity 1s ease-in-out",
      }}
    />
  )

  const content = {
    about: (
      <div
        dangerouslySetInnerHTML={{
          __html: "Migrant Recordings<br />A migrating recording studio focusing on recording single take music at any location.",
        }}
      />
    ),
    contact: "mail@migrantrecordings.com",
    listen: <Image />,
  }

  useEffect(() => {
    mainRef.current.style.transition = "opacity 1s ease-in-out .5s"
    mainRef.current.style.opacity = 1
  }, [])

  const NavBtn = ({ page }) => (
    <div
      className="nav-btn"
      sx={{
        color: "black",
        textDecoration: "none",
        textAlign: "center",
      }}
      onClick={() => changePage(page)}
    >
      {page === "listen" ? (isPlaying ? "pause" : "listen") : page}
    </div>
  )

  return (
    <Layout>
      <audio id="myAudio" ref={audioRef}>
        <source src={Audio} type="audio/flac" />
        Your browser does not support the audio element.
      </audio>

      <main
        ref={mainRef}
        sx={{
          marginTop: "12rem",
          position: "relative",
          opacity: 0,
        }}
      >
        <nav
          className="nav"
          sx={{
            maxWidth: "100%",
            width: "770px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
          className="content"
          sx={{
            position: "absolute",
            width: "100%",
            maxWidth: content[page] === "about" ? "350px" : "none",
            margin: "0 auto",
            left: "50%",
            transform: "translateX(-50%)",
            display: "block",
            textAlign: "center",
            fontWeight: "500",
            letterSpacing: ".035em",
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
          alt="logo"
          className="logo"
          sx={{
            position: "absolute",
            top: "200%",
            left: "50%",
            transform: "translateX(-50%)",
            transition: "transform 1s ease-in-out",
            zIndex: -1,
            color: "tomato",
          }}
        />
      </main>
    </Layout>
  )
}

export default IndexPage
