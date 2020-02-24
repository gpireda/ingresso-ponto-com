import React from 'react'

import styles from './Trailer.module.scss'

interface TrailerProps {
  title: string
  url: string
}

const Trailer: React.FC<TrailerProps> = ({ title, url }: TrailerProps) => (
  <iframe allowFullScreen className={styles.trailer} src={url} title={title} />
)

export default Trailer
