import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Button } from '../components/Button'
import Layout from '../components/layout'

const IndexPage = props => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby + Tailwind CSS + Styled Components site</p>
      <p>Now go build something great.</p>
      <Button onClick={toggleTheme} theme={theme}>
        {theme}
      </Button>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
