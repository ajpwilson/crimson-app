import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import logo from './../spacex-logo.svg'

const LaunchPoster = ({ launch }) => {
  if (!launch.links.flickr_images) {
    return <span>Loading...</span>
  }
  return (
    <PosterWrapper>
      <Poster src={launch.links.flickr_images[0] ? launch.links.flickr_images[0] : launch.links.mission_patch_small ? launch.links.mission_patch_small : logo} />
    </PosterWrapper>
  )
}

export default LaunchPoster

LaunchPoster.propTypes = {
  launch: PropTypes.shape({
    links: PropTypes.any
  }).isRequired
}

const PosterWrapper = styled.div`
  max-width: 300px;
  width: 100%;
`
const Poster = styled.img`
  width: 100%;
`
