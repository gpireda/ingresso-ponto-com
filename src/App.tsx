import './App.module.css'

import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteChildrenProps,
  Switch,
} from 'react-router-dom'
import { slugify } from 'utils'
import { MoviesList } from 'views'

import { Header, Layout } from './components'

const App: React.FC = () => {
  const [currentLocation, setStateLocation] = useState('São Paulo')
  const [searchText, setSearchText] = useState('')

  const locationSlug = slugify(currentLocation)

  return (
    <Router>
      <Header
        currentLocation={currentLocation}
        locationSlug={locationSlug}
        onCurrentLocationToggle={() =>
          setStateLocation(
            currentLocation === 'São Paulo' ? 'Rio de Janeiro' : 'São Paulo',
          )
        }
        onSearchChanged={value => setSearchText(value)}
        searchText={searchText}
      />

      <Layout>
        <Switch>
          <Route path='/:currentLocation'>
            {(routeProps: any) => (
              <MoviesList searchText={searchText} {...routeProps} />
            )}
          </Route>

          <Route path='/'>
            <Redirect to={`/${locationSlug}`} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
