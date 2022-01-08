/** @jsx jsx */
import React from "react"
import Slider from "react-slick"
import { jsx } from "theme-ui"

import "../styles/slick.css"
import "../styles/slick-theme.css"

const Next = ({ onClick }) => (
  <button
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translateY(-50%)",
      zIndex: 1,
      cursor: "pointer",
      border: "none",
      background: "none",
    }}
  >
    <svg
      width="60"
      height="218"
      viewBox="0 0 60 218"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ width: "25%" }}
    >
      <path
        d="M59.1224 107.226C59.6757 108.344 59.6757 109.656 59.1224 110.774L7.58539 214.916C5.70933 218.707 0.000359058 217.372 0.000359058 213.142L0.000359058 4.85782C0.000359058 0.628002 5.70933 -0.707319 7.58539 3.08369L59.1224 107.226Z"
        fill="black"
      />
      <path
        d="M59.1224 107.226C59.6757 108.344 59.6757 109.656 59.1224 110.774L7.58539 214.916C5.70933 218.707 0.000359058 217.372 0.000359058 213.142L0.000359058 4.85782C0.000359058 0.628002 5.70933 -0.707319 7.58539 3.08369L59.1224 107.226Z"
        fill="black"
      />
    </svg>
  </button>
)

const Prev = ({ onClick }) => (
  <button
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: 0,
      transform: "translateY(-50%)",
      zIndex: 1,
      cursor: "pointer",
      border: "none",
      background: "none",
    }}
  >
    <svg
      width="60"
      height="218"
      viewBox="0 0 60 218"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ width: "25%" }}
    >
      <path
        d="M0.877969 110.774C0.324679 109.656 0.324677 108.344 0.877967 107.226L52.415 3.08371C54.291 -0.707297 60 0.628023 60 4.85784L60 213.142C60 217.372 54.291 218.707 52.415 214.916L0.877969 110.774Z"
        fill="black"
      />
      <path
        d="M0.877969 110.774C0.324679 109.656 0.324677 108.344 0.877967 107.226L52.415 3.08371C54.291 -0.707297 60 0.628023 60 4.85784L60 213.142C60 217.372 54.291 218.707 52.415 214.916L0.877969 110.774Z"
        fill="black"
      />
    </svg>
  </button>
)

const AudioSlider = ({ changeSong }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    afterChange: (index) => {
      changeSong(index)
    },
  }

  return (
    <Slider {...settings}>
      <div>
        <h3>Intro</h3>
      </div>
      <div>
        <h3>Man Gōr Lin - Farmors Brudpolska</h3>
      </div>
      <div>
        <h3>Trinity - The Blood Of Cu Chulainn</h3>
      </div>
      <div>
        <h3>Man making a negroni</h3>
      </div>
      <div>
        <h3>Svante Berg - Melting</h3>
      </div>
      <div>
        <h3>
          <a
            sx={{
              color: "black",
              textDecoration: "none",
            }}
            target="_blank"
            rel="noreferrer noopener"
            href="https://soundcloud.com/user-766418397-199306070?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          >
            SoundCloud
          </a>
          &nbsp;|&nbsp;
          <a
            sx={{
              color: "black",
              textDecoration: "none",
            }}
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/MigrantRecordings"
          >
            Facebook
          </a>
          &nbsp;|&nbsp;
          <a
            sx={{
              color: "black",
              textDecoration: "none",
            }}
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/migrantrecordings/"
          >
            Instagram
          </a>
        </h3>
      </div>
    </Slider>
  )
}

export default AudioSlider
