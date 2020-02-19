import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import feature from './../spacex_feature_image.jpg'

const LaunchPoster = ({ launch }) => {
  if (!launch.links.flickr_images) {
    return <Loading><p>Starting Launch Countdown... 10 ... 9 ...</p></Loading>
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

const Loading = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  text-align:center;

  p {
    flex: initial;
    font-weight: 600;
  }
`
const PosterWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  max-height: 460px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2px;
`
const Poster = styled.img`
  width: 100%;
`
