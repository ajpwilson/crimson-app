import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const LaunchContext = React.createContext()

const LaunchProvider = (props) => {
  const url = 'https://api.spacexdata.com/v3/launches/'
  const [launches, setLaunches] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchLaunches = async () => {
    try {
      const launchData = await fetch(url)
      const launches = await launchData.json()
      setLaunches(launches)
      setLoading(false)
    } catch (e) {
      if (e) {
        console.log(e.message, 'Houston we have a problem! Try reloading the browser!')
      }
    }
  }

  useEffect(() => {
    fetchLaunches()
  }, [])

  return (
    <LaunchContext.Provider value={{
      loading,
      launches
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
