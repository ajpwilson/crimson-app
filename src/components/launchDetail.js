import React, { Component } from 'react'
import styled from 'styled-components'

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
      console.log(data)
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
        <div>
          <h1>{launch.mission_name}</h1>
          <p>SpaceX Flight Number: {launch.flight_number}</p>
          <p>Launched: {launch.launch_year}</p>
          <p>Rocket: {launch.rocket.rocket_name}, {launch.rocket.rocket_type}</p>
          <p>Launch Location: {launch.launch_site.site_name_long}</p>
        </div>
      </DetailsWrapper>
    )
  }
}

export default LaunchDetail

const DetailsWrapper = styled.div`

`
