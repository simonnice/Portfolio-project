import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import Layout from '../components/layout'

const IndexPage = props => {
  const [theme, setTheme] = useState('light')
  const [toggle, set] = useState(true)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <Layout>
      <Container>
        <h1>Hi people</h1>
        <p>I'm Simon, a budding Web Dev with big ideas.</p>
        <p>Time to build something great!</p>
      </Container>
    </Layout>
  )
}

export default IndexPage
