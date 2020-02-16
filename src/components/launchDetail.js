import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './../spacex-logo.svg'

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

    if (!launch.links.flickr_images) {
      return <span>Loading...</span>
    }
    return <img src={launch.links.flickr_images[0] ? launch.links.flickr_images[0] : launch.links.mission_patch_small ? launch.links.mission_patch_small : logo} />
  }

  //   return (
  //     <DetailsWrapper backdrop={launch.links.flickr_images[0] ? launch.links.flickr_images[0]
  //       : launch.links.mission_patch_small ? launch.links.mission_patch_small : logo}>
  //       <div>
  //         <h1>{launch.mission_name}</h1>
  //         <p>SpaceX Flight Number: {launch.flight_number}</p>
  //         <p>Launched: {launch.launch_year}</p>
  //         <p>Rocket: {launch.rocket.rocket_name}, {launch.rocket.rocket_type}</p>
  //         <p>Launch Location: {launch.launch_site.site_name_long}</p>
  //       </div>
  //     </DetailsWrapper>
  //   )
  // }
}

export default LaunchDetail

const DetailsWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${(props) => props.backdrop}) no-repeat;
  background-size: cover;
`
