import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from './../spacex-logo.svg'

interface Props {
  launch: LaunchInterface;
}

const Launch = ({ launch }: Props): JSX.Element => (
  <Mission>
    <FeatureContainer>
      <Link to={`/${launch.flight_number}`}>
        <Feature src={launch.links.flickr_images[0] ? launch.links.flickr_images[0]
          : launch.links.mission_patch_small ? launch.links.mission_patch_small : logo} loading="lazy" alt="launch logo"/>
        <Text>
          {launch.mission_name}
        </Text>
      </Link>
    </FeatureContainer>
  </Mission>
)

export default Launch

const Mission = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 10px;
  transition: all 0.4s;
`
const FeatureContainer = styled.div`
  flex: 0 1 135px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--black);
  overflow: hidden;
  position: relative;
`
const Feature = styled.img`
  overflow: hidden;
  max-height: 120px;
  width: auto;
  max-width: 120px;
  margin: 0 auto;
  display: block;
  transform: scale(2,2);
`
const Text = styled.div`
  color: var(--white);
  font-size: 1.4rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex: inital;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transition: all 0.4s;
  opacity: 0;

  &:hover {
    background-color: rgba(24,28,31,0.8);
    opacity: 1;
  }
`
