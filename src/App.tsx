import React, { useState } from "react";
import "./App.module.css";

import { Checkbox, Header, Layout, MoviePoster } from "./components";
import { List } from "./views";

import { movies, types } from "./mocks";

function App() {
  const [selected, setSelected] = useState([0]);

  const handleCheckboxToggle = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    if (e.target.checked) {
      setSelected([...selected, id]);
      return null;
    }

    setSelected(selected.filter(item => item !== id));
    return null;
  };

  const renderCheckbox = (type: FilterType) => (
    <Checkbox
      checked={selected.some(item => item === type.id)}
      key={type.type}
      onChange={handleCheckboxToggle}
      type={type}
    />
  );

  const renderMoviePoster = (movie: Movie) => (
    <MoviePoster key={movie.id} movie={movie} />
  );

  return (
    <>
      <Header />

      <Layout>
        <section className="movies-filters">
          <h2>Filmes</h2>

          {types.map(renderCheckbox)}
        </section>

        <List
          items={movies}
          label="Em cartaz"
          renderListItem={renderMoviePoster}
        />
      </Layout>
    </>
  );
}

export default App;
