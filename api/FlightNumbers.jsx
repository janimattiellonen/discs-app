import React from 'react'
import styled from '@emotion/styled'

import numbro from 'numbro'
import PropTypes from 'prop-types'

const formatValue = (value) => (value != null ? numbro(value).format({ trimMantissa: true, mantissa: 1 }) : '')

const Specs = styled.div({
  float: 'left',
  width: '100%',
})

const Attribute = styled.div({
  float: 'left',
  height: '35%',
  width: '50%',
  h3: {
    fontSize: '1em',
    fontWeight: 500,
    padding: '10px 10px 5px 10px',
    textAlign: 'center',
  },
  p: {
    fontSize: '2em',
    padding: '10px',
    textAlign: 'center',
  },
})

const Speed = styled(Attribute)({
  background: '#46af5c',
})

const Glide = styled(Attribute)({
  background: '#cd9327',
})

const Stability = styled(Attribute)({
  background: '#24a2dc',
})

const Fade = styled(Attribute)({
  background: '#e6de47',
})

export const FlightNumbers = ({ speed, glide, stability, fade }) => {
  return (
    <div>
      <Specs>
        <Speed>
          <h3>Speed</h3>
          <p>{formatValue(speed)}</p>
        </Speed>
        <Glide>
          <h3>Glide</h3>
          <p>{formatValue(glide)}</p>
        </Glide>

        <Stability>
          <h3>Stability</h3>
          <p>{formatValue(stability)}</p>
        </Stability>

        <Fade>
          <h3>Fade</h3>
          <p>{formatValue(fade)}</p>
        </Fade>
      </Specs>
    </div>
  )
}

FlightNumbers.propTypes = {
  fade: PropTypes.number,
  glide: PropTypes.number,
  speed: PropTypes.number,
  stability: PropTypes.number,
}
