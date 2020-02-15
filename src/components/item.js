import React, { Component } from 'react'

const API_URL = 'https://swapi.co/api/people/'

class Item extends Component {
  state = {
    characters: []
  }

  async componentDidMount () {
    try {
      const res = await fetch(API_URL)
      const data = await res.json()
      // console.log(data)
      this.setState({
        characters: data.results
      })
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    const { characters } = this.state

    console.log(characters)

    return (
      <div>
        {characters.map((character) => <div key={character.name}>{character.name}</div>)}
      </div>
    )
  }
}

export default Item
