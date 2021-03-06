import React from 'react'

import styled from '@emotion/styled'

import numbro from 'numbro'
import PropTypes from 'prop-types'

const Flex = styled.div({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 0 10px 0',
})

const DiscInfo = styled.div({
  float: 'left',
  p: {
    margin: '0 0 10px',
  },
})

const Price = styled.div({
  float: 'right',
  fontSize: '1em',
  fontWeight: 'bold',
  '@media screen and (min-width: 768px)': {
    fontSize: '2em',
    fontWeight: 'normal',
  },
})

const renderWeight = (disc) => (disc.weight > 0 ? `, ${disc.weight}g` : '')
const renderPrice = (disc) => {
  if (disc.price_status === 'gift') {
    return 'Gift'
  } else if (disc.price_status === 'price_unknown') {
    return 'n/a'
  } else if (disc.price > 0) {
    return `${numbro(disc.price).format('0.00')} €`
  }
}

export const Details = ({ disc }) => {
  return (
    <Flex>
      {' '}
      <DiscInfo>
        <p style={{ marginBottom: '5px', marginTop: 0 }}>
          {disc.manufacturer} {disc.material}
          {renderWeight(disc)}
        </p>
        <p style={{ marginBottom: 0, marginTop: 0 }}> {disc.type}</p>
      </DiscInfo>
      <Price>{renderPrice(disc)}</Price>
    </Flex>
  )
}

Details.propTypes = {
  disc: PropTypes.shape({
    manufacturer: PropTypes.string.isRequired,
    material: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    price_status: PropTypes.oneOf(['gift', 'price_unknown', '']),
    type: PropTypes.oneOf(['Distance driver', 'Fairway driver', 'Mid-range', 'Putter']),
    weight: PropTypes.number.isRequired,
  }),
}
