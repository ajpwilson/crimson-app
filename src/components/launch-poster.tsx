import React from 'react'
import styled from 'styled-components'
import feature from './../spacex_feature_image.jpg'
import { LaunchInterface } from './interfaces'

interface LaunchPosterProps {
  launch: LaunchInterface;
}

const LaunchPoster: React.FC<LaunchPosterProps> = ({ launch }: LaunchPosterProps) => {
  if (!launch.links.flickr_images) {
    return <Loading><p>Loading Countdown Sequence...</p></Loading>
  }
  return (
    <PosterWrapper>
      <Poster src={launch.links.flickr_images[0] ? launch.links.flickr_images[0] : feature} alt="feature image"/>
    </PosterWrapper>
  )
}

export default LaunchPoster

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
