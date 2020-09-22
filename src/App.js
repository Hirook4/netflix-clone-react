import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieList from './components/MovieList';
import FeaturedMovie from './components/FeaturedMovie';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando item em destaque
      let destaque = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (destaque[0].items.results.length - 1));
      let chosen = destaque[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }
    loadAll();

  }, []);
  return (
    <div className="page">

      {
        featuredData && <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieList key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}