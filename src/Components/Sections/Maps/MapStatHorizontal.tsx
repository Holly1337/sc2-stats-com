import React from 'react'
import { Header } from 'semantic-ui-react'

interface Props {
  name: string
  count: number
  image: string
  maxPlayCount: number
}

const MapStatHorizontal: React.FC<Props> = ({ name, count, image, maxPlayCount }) => {
  const percentPlayed = (count / maxPlayCount) * 100
  return (
    <span
      style={{
        display: 'grid',
        gridTemplateColumns: '300px 1fr',
        gridGap: 30,
        marginBottom: 30
      }}
    >
      <h3 className='d-flex justify-content-end text-right align-items-center m-0'>
        <div style={{ width: '100%' }}>
          <Header size={'large'} className={'mb-0'}>{name}</Header>
          <Header size={'medium'} className={'mt-0'}>{count}</Header>
        </div>
      </h3>
      <div
        style={{
          backgroundImage: `url("${image}")`,
          width: `${percentPlayed}%`,
          position: 'relative',
          backgroundColor: 'transparent',
          overflow: 'hidden',
          maxHeight: 67,
          backgroundPosition: 'center',
          backgroundSize: '800px'
        }}
      />
    </span>
  )
}

export default MapStatHorizontal
