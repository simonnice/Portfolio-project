import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Button } from '../components/Button'
import Layout from '../components/layout'
import { useTrail, animated } from 'react-spring'
import { TrailsMain } from '../components/Spring-Trails'
import './styles.css'

const items = ['Lorem', 'ipsum', 'dolor', 'sit']
const config = { mass: 5, tension: 2000, friction: 200 }

const IndexPage = props => {
  const [theme, setTheme] = useState('light')
  const [toggle, set] = useState(true)

  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <Layout>
      <TrailsMain onClick={() => set(state => !state)}>
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={items[index]}
              className="trails-text"
              style={{
                ...rest,
                transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
              }}
            >
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))}
        </div>
      </TrailsMain>
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
