import React, { createRef, useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Logo from '../images/logo.jpg'
import Listen from '../images/listen.jpg'

const IndexPage = () => {
  const logoRef = createRef(null)
  const textRef = createRef(null)
  const mainRef = createRef(null)
  const imgRef = createRef(null)
  const audioRef = createRef(null)

  const [page, setPage] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const changePage = pageId => {
    setPage(pageId)

    if (pageId === 'listen' && isPlaying) {
      setIsPlaying(false)
      audioRef.current.pause()
      logoRef.current.style.transition = 'transform 1s ease-in-out 1s'
      logoRef.current.style.transform = 'translateY(0)'

      textRef.current.style.transition = 'opacity 1s ease-in-out'
      textRef.current.style.opacity = 0
    } else if (pageId === 'listen') {
      setIsPlaying(true)
      audioRef.current.play()
      logoRef.current.style.transition = 'transform 1s ease-in-out'
      logoRef.current.style.transform = 'translateY(10rem)'

      textRef.current.style.transition = 'opacity 1s ease-in-out 1s'
      textRef.current.style.opacity = 1
    } else {
      logoRef.current.style.transition = 'transform 1s ease-in-out'
      logoRef.current.style.transform = 'translateY(10rem)'

      textRef.current.style.transition = 'opacity 1s ease-in-out 1s'
      textRef.current.style.opacity = 1
    }
  }

  const Image = () => (
    <img ref={imgRef} src={Listen} alt="listen" style={{
      position: 'absolute',
      top: '-6.25rem',
      transform: 'scale(.75) translateX(-5px)',
      left: 0,
      transition: 'opacity 1s ease-in-out',
    }} />
  )

  const content = {
    about: 'Migrant Recordings field recording studio.',
    contact: 'mail@migrant.audio',
    listen: <Image />
  }

  useEffect(() => {
    mainRef.current.style.transition = 'opacity 1s ease-in-out .5s'
    mainRef.current.style.opacity = 1
  }, [])

  const NavBtn = ({ page }) => (
    <div style={{
        color: 'black',
        textDecoration: 'none',
        minWidth: '200px',
        textAlign: 'center'
      }}
      onClick={() => changePage(page)}
    >
      {page === 'listen' ? (isPlaying ? 'pause' : 'listen') : page}
    </div>
  )

  return (
    <Layout>
      <audio id="myAudio" ref={audioRef}>
        <source src="recording.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <main ref={mainRef} style={{ marginTop: '12rem', position: 'relative', opacity: 0 }}>
        <nav style={{
          maxWidth: '100%',
          width: '770px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '2rem',
          fontWeight: '600',
          fontFamily: 'Lato',
          letterSpacing: '.025em',
          color: 'black',
          textTransform: 'uppercase',
          fontFamily: 'Kefa',
          cursor: 'pointer',
          userSelect: 'none',
        }}>
          <NavBtn page="about" />
          <NavBtn page="contact" />
          <NavBtn page="listen" />
        </nav>

        <h2 ref={textRef} style={{
          position: 'absolute',
          top: '7.5rem',
          width: '100%',
          margin: '0 auto',
          display: 'block',
          textAlign: 'center',
          fontWeight: '500',
          letterSpacing: '.035em',
          fontSize: '1.5rem',
          color: 'black',
          fontFamily: 'Kefa',
          lineHeight: 1.5,
          opacity: 0,
          transition: 'opacity 1s ease-in-out 1s'
        }}>
          {content[page]}
        </h2>

        <img ref={logoRef} src={Logo} alt="" style={{
          position: 'relative',
          marginLeft: 'auto',
          marginRight: 'auto',
          transition: 'transform 1s ease-in-out',
          zIndex: -1
        }} />
      </main>
    </Layout>
  )
}

export default IndexPage
