import Local from 'icons/Local'
import Logo from 'icons/Logo'
import MagnifyingGlass from 'icons/MagnifyingGlass'
import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'components'

import styles from './Header.module.scss'

interface IHeaderProps {
  currentLocation?: string
  locationSlug: string
  onCurrentLocationToggle: () => void
  onSearchChanged: (value: string) => void
  searchText: string
}

const Header: React.FC<IHeaderProps> = ({
  currentLocation,
  locationSlug,
  onCurrentLocationToggle,
  onSearchChanged,
  searchText,
}: IHeaderProps) => (
  <header>
    <div className={styles.headerWrapper}>
      <Link className={styles.logoWrapper} to={`/${locationSlug}`}>
        <Logo />
      </Link>

      <div className={styles.searchAndLocalWrapper}>
        <input
          className={styles.searchInput}
          value={searchText}
          onChange={e => {
            onSearchChanged(e.target.value)
          }}
          type='text'
        />

        <div className={styles.magnifyingGlassWrapper}>
          <MagnifyingGlass />
        </div>

        <Link
          onClick={onCurrentLocationToggle}
          to={`/${
            locationSlug === 'sao-paulo' ? 'rio-de-janeiro' : 'sao-paulo'
          }`}
        >
          <Text className={styles.location}>{currentLocation}</Text>
          <div className={styles.locationWrapper}>
            <Local />
          </div>
        </Link>
      </div>
    </div>
  </header>
)

export default Header
