import React from 'react'

interface HeadingProps {
  children: React.ReactNode
}

const Heading: React.FC<HeadingProps> = ({ children }: HeadingProps) => (
  <h2>{children}</h2>
)

export default Heading
