/** @jsx jsx */
import { jsx } from "theme-ui"
import { createRef, useState, useEffect } from "react"
import "../styles/styles.css"

import Layout from "../components/layout"
import AudioSlider from "../components/AudioSlider"
import Logo from "../images/logo2.svg"
import Audio1 from "../audio/audio-1.mp3"
import Audio2 from "../audio/audio-2.mp3"
import Audio3 from "../audio/audio-3.mp3"
import Audio4 from "../audio/audio-4.mp3"
import Audio5 from "../audio/audio-5.mp3"
import Audio6 from "../audio/audio-6.mp3"

const IndexPage = () => {
  const logoRef = createRef(null)
  const textRef = createRef(null)
  const mainRef = createRef(null)

  const audioRef1 = createRef(null)
  const audioRef2 = createRef(null)
  const audioRef3 = createRef(null)
  const audioRef4 = createRef(null)
  const audioRef5 = createRef(null)
  const audioRef6 = createRef(null)

  const [page, setPage] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [slide, setSlide] = useState(0)

  const audioRefs = [
    audioRef1,
    audioRef2,
    audioRef3,
    audioRef4,
    audioRef5,
    audioRef6,
  ]

  const changePage = (pageId) => {
    setPage(pageId)

    if (pageId === "listen" && isPlaying) {
      console.log("STOP PLAYING")
      setIsPlaying(false)

      audioRefs.forEach((ref) => ref.current.pause())

      logoRef.current.style.transition = "transform 1s ease-in-out 1s"
      logoRef.current.style.transform = "translate(-50%, 0)"

      textRef.current.style.transition = "opacity 1s ease-in-out"
      textRef.current.style.opacity = 0
    } else if (pageId === "listen") {
      console.log("LISTEN")
      setIsPlaying(true)
      audioRefs[0].current.play()
      audioRefs[0].current.onended = () => {
        console.log("ENDED?")
        setSlide(1)
      }
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

  const changeSong = (index) => {
    if (index > audioRefs.length) return

    audioRefs.forEach((ref) => {
      ref.current.pause()
      ref.current.currentTime = 0
    })

    audioRefs[index].current.play()
    audioRefs[index].current.onended = () => {
      if (index === 5) return
      setSlide(index + 1)
    }
  }

  const Slider = () => (
    <div
      sx={{
        width: "100%",
        transition: "opacity 1s ease-in-out",
      }}
    >
      <AudioSlider
        changeSong={changeSong}
        slide={slide}
        isPlaying={isPlaying}
      />
    </div>
  )

  const content = {
    about: (
      <div
        sx={{ maxWidth: "680px", margin: "0 auto" }}
        dangerouslySetInnerHTML={{
          __html:
            "Migrant Recordings<br />A migrating recording studio focusing on recording single take music, foley, and voiceovers at any location.",
        }}
      />
    ),
    contact: (
      <div
        dangerouslySetInnerHTML={{
          __html: "<br />mail@migrantrecordings.com",
        }}
      />
    ),
    listen: <Slider />,
  }

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

  useEffect(() => {
    mainRef.current.style.transition = "opacity 1s ease-in-out .5s"
    mainRef.current.style.opacity = 1
  }, [])

  return (
    <Layout>
      <audio ref={audioRef1}>
        <source src={Audio1} type="audio/mp3" />
      </audio>

      <audio ref={audioRef2}>
        <source src={Audio2} type="audio/mp3" />
      </audio>

      <audio ref={audioRef3}>
        <source src={Audio3} type="audio/mp3" />
      </audio>

      <audio ref={audioRef4}>
        <source src={Audio4} type="audio/mp3" />
      </audio>

      <audio ref={audioRef5}>
        <source src={Audio5} type="audio/mp3" />
      </audio>

      <audio ref={audioRef6}>
        <source src={Audio6} type="audio/mp3" />
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
            letterSpacing: ".025em",
            color: "black",
            textTransform: "uppercase",
            fontFamily:
              "Cantarell, Helvetica Neue, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
            cursor: "pointer",
            userSelect: "none",
            zIndex: 2,
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
          }}
        />
      </main>
    </Layout>
  )
}

export default IndexPage
