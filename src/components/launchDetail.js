import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './../spacex-logo.svg'

import LaunchPoster from './launchPoster'

class LaunchDetail extends Component {
  state = {
    launch: {
      rocket: [],
      launch_site: [],
      links: {
        flicker_images: []
      }
    }
  }

  async componentDidMount () {
    try {
      const res = await fetch(`https://api.spacexdata.com/v3/launches/${this.props.match.params.flight_number}`)
      const data = await res.json()
      this.setState({
        launch: data
      })
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    const { launch } = this.state

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
              {(launch.launch_success === true) ? <Success>Mission Success</Success> : <Failure> Mission Failed</Failure>}
            </Status>
          </Title>
          <div>
            {/* <div>{launch.flight_number}</div> */}
            <div></div>
          </div>
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

      </DetailsWrapper>
    )
  }
}

export default LaunchDetail

const DetailsWrapper = styled.div`
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
  border-right: 2px solid var(--black);

  img {
    width: 100%;
  }
`
const Text = styled.div`
  padding: 15px;
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin: 0;
    font-size: 2.4rem;
  }
`
const Status = styled.div`
  flex: 1;
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
`
const Failure = styled.div`
  padding: 15px 20px;
  font-weight: 600;
  color: var(--red);
  background-color: var(--apple);
  border: 2px solid var(--red);
`
const Stats = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Stat = styled.span`
  flex: 1;
  text-align: center;
`
