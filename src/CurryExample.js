import React, { Component, Fragment } from 'react'

import curry from './curry'
import curry1 from './img/curry1.jpg'

const template = src => {
  return (
    <div>
      <p>This is the Curry template!</p>
      <img src={src} className='curry-img' />
    </div>
  ) 
}

const imgFactory = curry((src, flag, template) => {
  if (src) {
    if (flag) {
      return template(src)
    }
  }
})

const withLinkOnTop = imgWithTemplate => {
  return link => {
    return (
      <Fragment>
        {link}
        {imgWithTemplate}
      </Fragment>
    )
  }
}

const withLinkOnBottom = imgWithTemplate => {
  return link => {
    return (
      <Fragment>
        {imgWithTemplate}
        {link}
      </Fragment>
    )
  }
}

const CurryExample = () => {
  const curryImg = imgFactory(curry1)(true)
  const imgWithLink = withLinkOnTop(curryImg(template))('hi andy!')
  return (
    <div>
      <h1>Function currying examples!</h1>
      {imgWithLink}
    </div>
  )
}

export default CurryExample