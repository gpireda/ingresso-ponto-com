import React from 'react'

interface TrailerProps {
  url: string
}

const Trailer: React.FC<TrailerProps> = ({ url }: TrailerProps) => (
  <iframe
    allowFullScreen
    src={url}
    style={{
      border: 'none',
      height: '250px',
      marginTop: '10px',
      width: '100%',
    }}
  />
)

export default Trailer
