import React from 'react'

import PropTypes from 'prop-types'

import styled from '@emotion/styled'

const StyledDiv = styled.div({ position: 'relative', width: 'auto' })

const Img = styled.img({
  width: '100%',
})

export const Image = ({ src, alt }) => {
  const addFallbackImage = (ev) => {
    console.log('Image not found :/')
    ev.target.src = '/not-found.svg'
  }

  return (
    <StyledDiv>
      <Img src={src} alt={alt ? alt : ''} onError={addFallbackImage} />
    </StyledDiv>
  )
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
}
