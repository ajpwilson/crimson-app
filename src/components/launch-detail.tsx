import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import logo from './../spacex-logo.svg'

import LaunchPoster from './launch-poster'
import ImageGallery from './image-gallery'

const LaunchDetail = (): JSX.Element => {
  const [launch, setLaunch] = useState<LaunchInterface>()
  const { flight_number } = useParams()
  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const data = await (await fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`)).json()
        setLaunch(data)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [flight_number])

  if (!launch) {
    return (
      <LoadText>
        <p>Nothing here... maybe just like before the big bang!</p>
        <p>Try refreshing the browser if content doesn&apos;t load soon.</p>
      </LoadText>
    )
  } else {
    return (
      <DetailsWrapper>
        <LaunchPoster launch={launch} />
        <Heading>
          <Title>
            <Badge>
              <img src={launch.links.mission_patch_small ? launch.links.mission_patch_small : logo} alt={launch.mission_name}/>
            </Badge>
            <Text>
              <h1>{launch.mission_name}</h1>
              <p>{launch.launch_year}</p>
            </Text>
            <Status>
              {(launch.launch_success === null) ? <Success>Future Mission</Success>
                : (launch.launch_success === true) ? <Success>Mission Success</Success> : <Failure> Mission Failed</Failure>}
            </Status>
          </Title>
        </Heading>

        <Stats>
          <Stat>
            <h2>{launch.flight_number}</h2>
            <p>SpaceX Flight Number</p>
          </Stat>
          <Stat>
            <h2>{launch.rocket.rocket_name}</h2>
            <p>Rocket</p>
          </Stat>
          <Stat>
            <h2>{launch.rocket.rocket_type}</h2>
            <p>Rocket Type</p>
          </Stat>
          <Stat><h2>{launch.launch_site.site_name}</h2>
            <p>Launch Location</p>
          </Stat>
        </Stats>

        {launch.details
          ? <Details>
            <h2>Mission Brief</h2>
            <p>{launch.details}</p>
          </Details>
          : null}

        {launch.links.reddit_campaign
          ? <ExternalLinks>
            <h2>External Links</h2>
            {launch.links.reddit_campaign ? <a href={launch.links.reddit_campaign}>Reddit Campaign Post</a> : null}
            {launch.links.reddit_launch ? <a href={launch.links.reddit_launch}>Reddit Launch Post</a> : null}
            {launch.links.reddit_recovery ? <a href={launch.links.reddit_recovery}>Reddit Recovery Post</a> : null}
            {launch.links.reddit_media ? <a href={launch.links.reddit_media}>Reddit Media Post</a> : null}
            {launch.links.presskit ? <a href={launch.links.presskit}>PressKit</a> : null}
            {launch.links.article_link ? <a href={launch.links.article_link}>Article</a> : null}
            {launch.links.wikipedia ? <a href={launch.links.wikipedia}>Wikipedia Link</a> : null}
          </ExternalLinks>
          : null}

        {launch.links.youtube_id
          ? <VideoContainer>
            <h2>Mission Footage</h2>
            <div>
              <Iframe src={'https://www.youtube.com/embed/' + launch.links.youtube_id} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
            </div>
          </VideoContainer>
          : null}

        {launch.links.flickr_images[0]
          ? <GalleryContainer>
            <h2>Mission Optics</h2><p>Click an image to see a larger version.</p>
            <ImageGallery launch={launch}/>
          </GalleryContainer>
          : null}

      </DetailsWrapper>
    )
  }
}

export default LaunchDetail

const LoadText = styled.div`
  text-align: center;
  margin-top: 40px;
  font-weight: 600;
`
const DetailsWrapper = styled.div`
  background-color: var(--white);
`
const Heading = styled.div`

`
const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
`
const Badge = styled.div`
  flex: 0 1 110px;
  padding-right: 10px;

  img {
    width: 100%;
    margin-top: 35px;
  }
`
const Text = styled.div`
  padding: 15px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin: 0;
    font-size: 2.6rem;
  }

  p {
    margin: 0;
  }
`
const Status = styled.div`
  flex: 0 1 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Success = styled.span`
  padding: 15px 20px;
  font-weight: 600;
  color: var(--green);
  background-color: var(--leaf);
  border: 2px solid var(--green);
  text-align: center;
  margin: 10px 0;
`
const Failure = styled.div`
  padding: 15px 20px;
  font-weight: 600;
  color: var(--red);
  background-color: var(--apple);
  border: 2px solid var(--red);
  text-align: center;
  margin: 10px 0;
`
const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: var(--black);
  color: var(--white);
  margin: 20px 0;
`
const Stat = styled.span`
  flex: 1;
  text-align: center;
  padding: 15px;

  @media (max-width: 600px) {
    flex: 0 1 auto;
  }

  h2 {
    font-size: 1.8rem;
    margin: 0;
  }

  p {
    margin: 0;
  }
`
const Details = styled.div`
  padding: 20px;
`
const VideoContainer = styled.div`
  margin: 20px;

  div {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
  }
`
const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`
const GalleryContainer = styled.div`
  padding: 20px;
`
const ExternalLinks = styled.div`
  padding: 20px;

  a {
    display: block;
  }
`
