import React, { Component } from 'react'
import styled from 'styled-components'
import Launch from './launch'

class LaunchList extends Component {
  state = {
    launches: []
  }

  async componentDidMount () {
    try {
      const res = await fetch('https://api.spacexdata.com/v3/launches/')
      const data = await res.json()
      this.setState({
        launches: data
      })
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    const { launches } = this.state

    return (
      <LaunchGrid>
        {launches.map((launch) =>
          <Launch key={launch.flight_number}
            launch={launch} />)}
      </LaunchGrid>
    )
  }
}

export default LaunchList

const LaunchGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
`
