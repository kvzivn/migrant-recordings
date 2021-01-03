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
  const listenImgRef = createRef(null)

  const [page, setPage] = useState(null)
  const [playing, setPlaying] = useState(false)

  const changePage = (pageId) => {
    setPage(pageId)

    if (pageId === 'listen') {
      setPlaying(!playing)

      listenImgRef.current.style.transition = 'opacity 1.25s ease-in-out'
      listenImgRef.current.style.opacity = 0
    }

    logoRef.current.style.transform = !playing ? 'translateY(10rem)' : 'translateY(0)'
    logoRef.current.style.transition = 'transform 1s ease-in-out'

    textRef.current.style.transition = 'opacity 1.25s ease-in-out 1s'
    textRef.current.style.opacity = 1
  }

  const isPlaying = () => {
    console.log('IS PLAYING FFS')
  }

  const content = {
    about: 'Migrant Recordings field recording studio.',
    contact: 'mail@migrant.audio',
    listen: null
  }

  useEffect(() => {
    mainRef.current.style.transition = 'opacity 1s ease-in-out 1s'
    mainRef.current.style.opacity = 1
  }, [])

  return (
    <Layout>
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
          <div style={{
              color: 'black',
              textDecoration: 'none',
              minWidth: '200px',
              textAlign: 'center'
            }}
            onClick={() => changePage('about')
          }>
            about
          </div>
          <div style={{
              color: 'black',
              textDecoration: 'none',
              minWidth: '200px',
              textAlign: 'center'
            }}
            onClick={() => changePage('contact')
          }>
            contact
          </div>
          <div style={{
              color: 'black',
              textDecoration: 'none',
              minWidth: '200px',
              textAlign: 'center'
            }}
            onClick={() => {
              changePage('listen'); isPlaying()}
            }>
            {playing ? 'pause' : 'listen'}
          </div>
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
          opacity: 0,
          lineHeight: 1.5
        }}>
          {content[page]}

          <img ref={listenImgRef} src={Listen} alt="listen" style={{
            position: 'absolute',
            top: '-6.25rem',
            transform: 'scale(.75) translateX(-5px)',
            left: 0,
            transition: 'opacity 1s ease-in-out',
            opacity: playing ? 1 : 0
          }} />
          {/* {page === 'listen' ? null : content[page]} */}
        </h2>

        <img ref={logoRef} src={Logo} alt="" style={{
          position: 'relative',
          marginLeft: 'auto',
          marginRight: 'auto',
          zIndex: -1
        }} />
      </main>
      {/* <h1 style={{marginTop: '2rem', textAlign: 'center' }}>Migrant Recordings</h1> */}
    </Layout>
  )
}


export default IndexPage
