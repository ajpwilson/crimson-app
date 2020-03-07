import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const LaunchContext = React.createContext()

const LaunchProvider = (props) => {
  const url = 'https://api.spacexdata.com/v3/launches/'
  const [launches, setLaunches] = useState([])
  const [launch, setLaunch] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchLaunches = async () => {
    try {
      const launchesData = await fetch(url)
      const launches = await launchesData.json()
      setLaunches(launches)
      setLoading(false)
      console.log(launches)
    } catch (e) {
      if (e) {
        console.log(e.message, 'Houston we have a problem! Try reloading the browser!')
      }
    }
  }

  const fetchLaunch = async (flight_number) => {
    try {
      const launchData = await fetch(url`${flight_number}`)
      const launch = await launchData.json()
      setLaunch(launch)
      setLoading(false)
      console.log(launch)
    } catch (e) {
      if (e) {
        console.log(e.message, 'Houston we have a problem! Try reloading the browser!')
      }
    }
  }

  useEffect(() => {
    fetchLaunches()
    fetchLaunch()
  }, [])

  return (
    <LaunchContext.Provider value={{
      loading,
      launches,
      launch
    }}>
      {props.children}
    </LaunchContext.Provider>
  )
}

LaunchProvider.propTypes = {
  children: PropTypes.any
}

const LaunchConsumer = LaunchContext.Consumer
export { LaunchProvider, LaunchConsumer, LaunchContext }
