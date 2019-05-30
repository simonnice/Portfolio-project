import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  ${tw`bg-grey-lightest px-32 py-8`};
`
const Title = styled.h1`
  ${tw`text-orange-dark m-0`};
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-inherit`};
`

const StyledNav = styled.nav`
  ${tw`flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-3 px-6`}
`

const StyledNavItems = styled.span`
  ${tw`font-sans text-lg no-underline text-orange hover:text-orange-lighter ml-6`}
`

const Header = ({ siteTitle }) => (
  <Container>
    <StyledNav>
      <div>
        <StyledLink to="/">
          <Title>{siteTitle}</Title>
        </StyledLink>
      </div>
      <div>
        <StyledLink to="/about">
          <StyledNavItems>About</StyledNavItems>
        </StyledLink>
        <StyledLink to="/contact">
          <StyledNavItems>Contact</StyledNavItems>
        </StyledLink>
      </div>
    </StyledNav>
  </Container>
)

export default Header
