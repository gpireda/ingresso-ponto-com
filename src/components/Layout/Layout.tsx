import React from 'react'

import styles from './Layout.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => (
  <div className={styles.mainWrapper}>{children}</div>
)

export default Layout
