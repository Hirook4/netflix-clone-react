import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

export default () => {

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista
      let list = await Tmdb.getHomeList();
      console.log(list);
    }
    loadAll();

  }, []);
  return (
    <div>ola mundo</div>
  );
}