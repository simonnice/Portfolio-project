import styled from 'styled-components'

export const Button = styled.button`
  ${props =>
    props.theme === 'light' &&
    tw`bg-blue-light hover:bg-blue-darker text-white font-bold py-2 px-4 rounded`}

  ${props =>
    props.theme === 'dark' &&
    tw`bg-blue-dark hover:bg-blue-darker text-white font-bold py-2 px-4 rounded`}
`
