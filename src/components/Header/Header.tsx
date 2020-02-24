import Local from 'icons/Local'
import Logo from 'icons/Logo'
import MagnifyingGlass from 'icons/MagnifyingGlass'
import React, { useState } from 'react'
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
}: IHeaderProps) => {
  const [isInputVisible, setInputVisible] = useState(false)

  return (
    <header>
      <div className={styles.headerWrapper}>
        <Link className={styles.logoWrapper} to={`/${locationSlug}`}>
          <Logo showText={window.innerWidth > 768} />
        </Link>

        <div className={styles.searchAndLocalWrapper}>
          <input
            className={`${styles.searchInput} ${
              isInputVisible ? styles.showInput : ''
            }`}
            value={searchText}
            onChange={e => {
              onSearchChanged(e.target.value)
            }}
            placeholder='Digite o nome de um filme'
            type='text'
          />

          <div
            className={styles.magnifyingGlassWrapper}
            onClick={() => setInputVisible(!isInputVisible)}
          >
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
}

export default Header
