import React, { useContext } from 'react'
import styled from 'styled-components'
import Launch from './launch'
import { LaunchContext } from '../context/index'
import { ContextInterface } from './interfaces'

export default function LaunchList (): JSX.Element {
  const appContext = useContext<ContextInterface>(LaunchContext)

  const { launches, loading } = appContext

  if (loading) {
    return (
      <LoadText>
        <p>Accessing mission dossier, stand by...</p>
        <span role="img" aria-label="Rocket Emoji">🚀</span>
      </LoadText>
    )
  } else {
    return (
      <LaunchGrid>
        {launches.map((item, i) =>
          <Launch key={i} launch={item} />)}
      </LaunchGrid>
    )
  }
}

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
