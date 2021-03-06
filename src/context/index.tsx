import React, { useState, useEffect, Context } from 'react'
import { ContextInterface } from '../components/interfaces'

interface ContextProps {
  children: JSX.Element;
}

const LaunchContext: Context<ContextInterface> = React.createContext<ContextInterface>({
  launches: [],
  loading: false
})

const LaunchProvider: React.FC<ContextProps> = ({ children }: ContextProps) => {
  const url = 'https://api.spacexdata.com/v3/launches/'
  const [launches, setLaunches] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchLaunches = async (): Promise<void> => {
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
      {children}
    </LaunchContext.Provider>
  )
}

const LaunchConsumer = LaunchContext.Consumer
export { LaunchProvider, LaunchConsumer, LaunchContext }
