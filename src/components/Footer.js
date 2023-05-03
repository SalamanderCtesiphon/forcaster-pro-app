import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div>Weather App &#169; {currentYear}</div>
  )
}

export default Footer