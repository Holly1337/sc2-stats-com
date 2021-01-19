import React from 'react'

interface Props {
  children: string
}

export const MetaDescription = (props: Props) => {
  let description = props.children.substr(0, 160)
  if (props.children.length > 160) {
    description = props.children.substr(0, 157) + '...'
  }
  return (
    <>
      <meta name={'og:description'} key={'og:description'} content={description} />
      <meta name={'description'} key={'description'} content={description}/>
    </>
  )
}
