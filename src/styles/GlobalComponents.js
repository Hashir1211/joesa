import styled, { createGlobalStyle } from 'styled-components'

// Sanity
// Layout
export const Container = styled.div`
  width: 100%;
  max-width: var(--page-width);
  padding: 0 var(--page-padding);
  margin: auto;
`
export const Grid = styled.div`
  grid-column-gap: var(--grid-column-gap);
  grid-row-gap: var(--grid-column-gap);
`
export const Section = styled.section``
