import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from './../spacex-logo.svg'

const Header = (): JSX.Element => (
  <div>
    <HeaderInner>
      <Link to="/" title="SpaceX Rocket Launches">
        <Logo src={logo} className="logo" alt="Logo" />
      </Link>
    </HeaderInner>
  </div>
)

export default Header

const HeaderInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
`
const Logo = styled.img`
  width: 250px;
`
