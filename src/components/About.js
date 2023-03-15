import React, { useState } from 'react'

export default function About() {

  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  })
  const [myBtn, setMyBtn] = useState('Enable dark Mode');

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setMyBtn("Enable Light Mode");
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setMyBtn("Enable Dark Mode");
    }
  }



  // let myStyle = {
  //   color: 'white',
  //   backgroundColor: 'black'
  // }

  return (
    <div className='container' style={myStyle}>
      <h1>About Us</h1>
      <div className="d-flex position-relative">
        <img src="..." className="flex-shrink-0 me-3" alt="..." />
        <div>
          <h5 className="mt-0">Custom component with stretched link</h5>
          <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
        </div>
      </div>
      <div className="container">
        <button type="button" onClick={toggleStyle} class="btn btn-primary my-3">{myBtn}</button>
      </div>
    </div>
  )
}
