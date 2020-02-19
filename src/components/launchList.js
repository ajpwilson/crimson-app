import React, { Component } from 'react'
import styled from 'styled-components'
import Launch from './launch'

class LaunchList extends Component {
  state = {
    launches: [],
    isLoaded: false
  }

  async componentDidMount () {
    try {
      const res = await fetch('https://api.spacexdata.com/v3/launches/')
      const data = await res.json()
      this.setState({
        launches: data,
        isLoaded: true
      })
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    const { launches, isLoaded } = this.state

    if (!isLoaded) {
      return (
        <LoadText>
          <p>Accessing mission dossier, stand by...</p>
          <span role="img" aria-label="Rocket Emoji">🚀</span>
        </LoadText>
      )
    } else {
      return (
        <LaunchGrid>
          {launches.map((launch) =>
            <Launch key={launch.flight_number}
              launch={launch} />)}
        </LaunchGrid>
      )
    }
  }
}

export default LaunchList

const LoadText = styled.div`
  text-align: center;
  margin-top: 40px;
  font-weight: 600;
`
const LaunchGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
`
