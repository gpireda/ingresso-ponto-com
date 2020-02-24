import React from 'react'

interface TrailerProps {
  title: string
  url: string
}

const Trailer: React.FC<TrailerProps> = ({ title, url }: TrailerProps) => (
  <iframe
    allowFullScreen
    src={url}
    style={{
      border: 'none',
      height: '250px',
      marginTop: '10px',
      width: '100%',
    }}
    title={title}
  />
)

export default Trailer
