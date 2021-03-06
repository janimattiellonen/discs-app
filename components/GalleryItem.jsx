import React from 'react'

import styled from '@emotion/styled'

import PropTypes from 'prop-types'
import { Image } from './Image'
import { FlightNumbers } from '../api/FlightNumbers'
import { Details } from './Details'
import { Status } from './Status'

const StyledGalleryItem = styled.div({
  padding: '10px',
  width: '100%',
  h2: {
    fontSize: '30px',
    fontWeight: 500,
  },
})

const CollectionItem = styled.div({
  float: 'right',
  fontWeight: 'bold',
  fontSize: '0.6em',
  marginTop: '8px',
})

const ImageWrapper = styled.div({
  position: 'relative',
  width: 'auto',
})

export const GalleryItem = ({ disc }) => {
  const { speed, glide, stability, fade } = disc

  return (
    <StyledGalleryItem>
      <ImageWrapper>
        {disc?.image && disc.image.length > 0 && <Image src={`https://testdb-8e20.restdb.io/media/${disc.image[0]}`} />}
        {(!disc?.image || disc.image.length === 0) && <Image src={'/not-found.svg'} />}
        <Status disc={disc} />
      </ImageWrapper>
      <h2>
        {disc.name}&nbsp;{disc.collection_item && <CollectionItem>Collection item</CollectionItem>}
      </h2>
      <Details disc={disc} />
      <FlightNumbers speed={speed} glide={glide} stability={stability} fade={fade} />
    </StyledGalleryItem>
  )
}

const discTypes = ['Distance driver', 'Fairway driver', 'Mid-range', 'Putter']

GalleryItem.propTypes = {
  disc: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    additional: PropTypes.string,
    collection_item: PropTypes.bool,
    color: PropTypes.string,
    fade: PropTypes.number,
    glide: PropTypes.number,
    image: PropTypes.arrayOf(PropTypes.string),
    manufacturer: PropTypes.string.isRequired,
    material: PropTypes.string,
    missing: PropTypes.bool,
    missing_description: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    sold: PropTypes.bool,
    speed: PropTypes.number,
    stability: PropTypes.number,
    type: PropTypes.oneOf(discTypes).isRequired,
    weight: PropTypes.number,
  }),
}
