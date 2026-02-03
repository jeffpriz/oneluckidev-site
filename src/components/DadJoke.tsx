import { useState, useEffect } from 'react'
import './DadJoke.css'

interface Joke {
  id: number
  setup: string
  punchline: string
}

const DadJoke = () => {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('/dad_jokes.json')
        const jokes: Joke[] = await response.json()
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
        setJoke(randomJoke)
        setLoading(false)
      } catch (error) {
        console.error('Error loading joke:', error)
        setLoading(false)
      }
    }

    fetchJoke()
  }, [])

  if (loading) {
    return null
  }

  if (!joke) {
    return null
  }

  return (
    <section className="dad-joke-section">
      <div className="container">
        <div className="dad-joke-content">
          <h2 className="dad-joke-title">Dad Joke of the Day</h2>
          <div className="joke-card">
            <p className="joke-setup">{joke.setup}</p>
            <p className="joke-punchline">{joke.punchline}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DadJoke
