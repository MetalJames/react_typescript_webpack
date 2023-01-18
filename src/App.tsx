import React from 'react'
import './styles.css'
import IMAGE from './react.png'
import LOGO from './react-2.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  const name = 'VOVA'
  return (
    <>
      <h1>
        WOW React Typescript Webpack Starter Template - {process.env.NODE_ENV}
      </h1>
      {/* here we bring our variables */}
      <h2>{process.env.name}</h2>
      <img src={IMAGE} alt="react logo" width="300" height="200" />
      <img src={LOGO} alt="react logo" width="300" />
      <ClickCounter />
    </>
  )
}
