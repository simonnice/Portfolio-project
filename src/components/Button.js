import styled from 'styled-components'

export const Button = styled.button`
  ${tw`${props =>
    props.theme === 'light'
      ? 'bg-blue-darker'
      : 'bg-blue-lighter'} hover:bg-blue-lighter text-white font-bold py-2 px-4 rounded`};
`
