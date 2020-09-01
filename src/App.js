import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieList from './components/MovieList';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }
    loadAll();

  }, []);
  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieList key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}