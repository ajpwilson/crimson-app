import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import logo from './../spacex-logo.svg'

const Launch = ({ launch }) => (
  <Mission>

    <FeatureContainer>
      <Feature src={launch.links.flickr_images[0] ? launch.links.flickr_images[0]
        : launch.links.mission_patch_small ? launch.links.mission_patch_small : logo}/>
    </FeatureContainer>
    <Text>
      <Link to={`/${launch.flight_number}`}>
        {launch.mission_name}
      </Link>
    </Text>
  </Mission>
)

export default Launch

Launch.propTypes = {
  launch: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    flight_number: PropTypes.number.isRequired,
    links: PropTypes.any,
    flickr_images: PropTypes.string
  }).isRequired
}

const Mission = styled.div`
  background-color: var(--white);
  border-bottom: 4px solid var(--white);
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.35);
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  padding: 5px 10px;
  transition: all 0.4s;

  &:hover {
    border-bottom: 4px solid var(--blue);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.45);
  }
`
const FeatureContainer = styled.div`
  flex: 0 1 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--black);
  overflow: hidden;
`
const Feature = styled.img`
  overflow: hidden;
  max-height: 120px;
  width: auto;
  max-width: 120px;
  margin: 0 auto;
  display: block;
`
const Text = styled.div`
  flex: inital;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`
