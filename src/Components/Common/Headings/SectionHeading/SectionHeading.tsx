import React from 'react'
import { Header } from 'semantic-ui-react'

interface Props {
  title: React.ReactNode
  subtitle?: React.ReactNode
}

const SectionHeading: React.FC<Props> = ({ title, subtitle }) => {
  const hasSubtitle = subtitle !== undefined
  return (
    <div className={'my-4'}>
      <Header size={'huge'} textAlign={'center'}>
        {title}
      </Header>
      {hasSubtitle && (
        <Header size={'large'} textAlign={'center'} className={'mt-0'}>
          {subtitle}
        </Header>
      )}
    </div>
  )
}

export default SectionHeading
