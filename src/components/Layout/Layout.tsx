import React from 'react'

import styles from './Layout.module.scss'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }: ILayoutProps) => (
  <div className={styles.mainWrapper}>{children}</div>
)

export default Layout
