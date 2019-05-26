import styled from 'styled-components'

export const Button = styled.button`
  ${props =>
    props.theme === 'light' &&
    tw`bg-blue-light hover:bg-blue-darker text-white font-bold py-2 px-4 rounded`}

  ${props =>
    props.theme === 'dark' &&
    tw`bg-blue-dark hover:bg-blue-darker text-white font-bold py-2 px-4 rounded`}
`

// Working way to use props without tw:
// color: ${props => (props.theme === 'light' ? 'lightblue' : 'darkblue')}

// Working way to use props with tw:
/* const Text = styled.div`
  ${props => props.type === 'heading' && tw`font-bold text-xl mb-2`}
  ${props =>
    (props.type === 'paragraph' || !props.type) &&
    tw`text-grey-darker text-base`}
` */
