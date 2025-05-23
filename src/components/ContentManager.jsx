import React, { useEffect, useState } from 'react'
import Works from './Works'
import Labo from './Labo'
import { useLocation } from 'react-router-dom'
import Hobby from './Hobby'
import Philosophy from './Philosophy'
import SNS from './SNS'
import Header from './Header'
import Intro from './Intro'
import Now from './Now'

const ContentManager = () => {
  const [content, setContent] = useState(useLocation().hash.slice(1))

  useEffect(() => {
    window.addEventListener('hashchange', (event) => {
      setContent(event.srcElement.location.hash.slice(1))
    })
  }, [ ])

  useEffect(() => {
    if(content != "") {
      const parent = document.querySelector(`#twoD-content`)
      const backButton = document.querySelector('.back-button')
      if(parent) {
        const rect = parent.getBoundingClientRect()
        if(parent.classList.contains("right")) {
          backButton.style.top = `${rect.top + window.innerHeight * 0.03}px`
          backButton.style.right = `${ rect.width * 0.03 }px`
        } else if(parent.classList.contains("down")) {
          backButton.style.position = "absolute"
        } else {
          backButton.style.top = `${rect.top + window.innerHeight * 0.03}px`
          backButton.style.left = `${ rect.width * 0.8}px`
        }
      }

  
    }
  }, [ content ])


  return (
    <>
     <Header />
     <Now />
    {
      content == "works" ? (
        <Works />
      ) : content == "labo" ? (
        <Labo />
      ) : content =="hobby" ? (
        <Hobby />
      ) : content == "vision" ? (
        <Philosophy />
      ) : content == "sns" ? (
        <SNS />
      ) : content == "intro" ? (
        <Intro />
      ) : (
        <></>
      )
    }
    </>
  )
}

export default ContentManager