import React, { createRef } from 'react'
import { useScreenshot } from 'use-react-screenshot'
import styled from 'styled-components' 




const Screenshot =() => {
  const ref = createRef(null)
  const [image, takeScreenshot] = useScreenshot()
  const getImage = () => takeScreenshot(ref.current)

const Wrapper = styled.div`
    height:100vh;
    width:100vw;
    display:grid;
    grid-template:1fr/1fr 1fr;


    @media only screen and (max-width: 810px) {
        grid-template: .5fr .5fr/1fr
      }
    `

  return (
    <Wrapper>
      <div ref={ref}>
        <h1>use-react-screenshot</h1>
        <p>
          <strong>hook by @vre2h which allows to create screenshots</strong>
        </p>
        <div>
        <button style={{ marginBottom: '10px' }} onClick={getImage}>
          Take screenshot
        </button>
      </div>
      
        <img src={image} alt={'Screenshot'} />
      </div>
    </Wrapper>
  )
}

export default Screenshot