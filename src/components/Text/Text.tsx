import React, { CSSProperties } from 'react'

interface TextProps {
  children: React.ReactNode
  className?: string
  style?: CSSProperties
}

const Text: React.FC<TextProps> = ({
  children,
  className,
  style,
}: TextProps) => (
  <span
    className={className}
    style={{ color: '#fff', display: 'inline-flex', ...style }}
  >
    {children}
  </span>
)

export default Text
