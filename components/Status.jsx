import React, { useState } from 'react'
import styled from '@emotion/styled'
import InfoIcon from '@material-ui/icons/Info'
import format from 'date-fns/format'
//import numbro from 'numbro'

const StyledDiv = styled.div(
  {
    position: 'absolute',
    background: 'red',
    width: '100%',
    height: '50px',
    bottom: 0,
    left: 0,
    transition: 'opacity .5s',
    opacity: 0.7,
  },
  (props) => ({
    height: props.height,
  }),
)

const StatusText = styled.span({
  display: 'block',
  textAlign: 'center',
  fontSize: '2em',
})

const AdditionalText = styled.p({
  marginTop: 0,
  paddingLeft: '15px',
  paddingRight: '15px',
})

const HoleInOne = styled(StyledDiv)({
  background: 'gold',
  top: 0,
})

const StyledInfoIcon = styled(InfoIcon)({
  cursor: 'hand',
  marginLeft: '10px',
})

export const Status = ({ disc }) => {
  const isHoleInOne = () => !!disc['Hole in one']

  const getStatuses = () => {
    const statuses = []

    if (isHoleInOne()) {
      let hioDate = !!disc['HIO date'] ? format(new Date(disc['HIO date']), 'MMMM io, y') : ''
      const hioDescription = !!disc['HIO description'] ? disc['HIO description'].trim() : ''

      statuses.push({
        label: 'Hole in one',
        additional: (
          <span>
            {hioDescription} <br />
            {hioDate}
          </span>
        ),
      })
    }

    if (disc.sold) {
      //return `${numbro(disc.price).format('0.00')} €`
      statuses.push({ label: 'Sold', additional: !!disc.sold_at ? format(new Date(disc.sold_at), 'MMMM io, y') : '' })
    }

    if (disc.broken) {
      return { label: 'Broken' }
    }

    if (disc.missing) {
      statuses.push({ label: 'Missing', additional: !!disc.missing_description ? disc.missing_description : '' })
    }

    if (disc.Donated) {
      statuses.push({
        label: 'Donated',
        additional: !!disc['Donation description'] ? disc['Donation description'] : '',
      })
    }

    return statuses
  }

  const renderLostDisc = () => {
    if (disc.missing) {
      return renderTooltip(<DiscStatus label={'Lost'} />)
    }
  }

  const renderBrokenDisc = () => {
    if (disc.broken) {
      return renderTooltip(<DiscStatus label={'Broken'} />)
    }
  }

  const renderSoldDisc = () => {
    if (disc.sold) {
      return renderTooltip(
        <DiscStatus
          label={`Sold ${!!disc.sold_for && disc.sold_for > 0 ? ` (${numeral(disc.sold_for).format('0.00')}€)` : ''}`}
        />,
      )
    }
  }

  const renderHioDisc = () => {
    if (disc['Hole in one']) {
      let element = (
        <div className="HoleInOne">
          <span>Hole in one</span>
        </div>
      )
      return renderHioTooltip(element)
    }
  }

  const renderDonatedDisc = () => {
    if (disc.Donated) {
      return renderTooltip(<DiscStatus label={'Donated'} />)
    }
  }

  const statuses = getStatuses()

  const StatusComponent = ({ item, component: Component }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
      <Component height={isExpanded ? '100px' : '50px'}>
        <StatusText>
          {item.label}
          {item.additional && (
            <StyledInfoIcon style={{ cursor: 'hand', marginLeft: '5px' }} onClick={() => setIsExpanded(!isExpanded)} />
          )}
        </StatusText>

        {item.additional && <AdditionalText>{isExpanded && item.additional}</AdditionalText>}
      </Component>
    )
  }

  if (!!statuses && statuses.length > 0) {
    if (statuses.length === 2) {
      return (
        <>
          <StatusComponent item={statuses[0]} component={HoleInOne} />
          <StatusComponent item={statuses[1]} component={StyledDiv} />
        </>
      )
    } else {
      return <StatusComponent item={statuses[0]} component={StyledDiv} />
    }
  }

  return null
}
