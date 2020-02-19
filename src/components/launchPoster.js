import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import feature from './../spacex_feature_image.jpg'

const LaunchPoster = ({ launch }) => {
  if (!launch.links.flickr_images) {
    return <span>Loading...</span>
  }
  return (
    <PosterWrapper>
      <Poster src={launch.links.flickr_images[0] ? launch.links.flickr_images[0] : feature} />
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
  max-width: 100%;
  width: 100%;
  height: 460px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 40px;
`
const Poster = styled.img`
  width: 100%;
`
