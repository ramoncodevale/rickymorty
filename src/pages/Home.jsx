import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { api } from '../lib/api';

const Home = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await api
        .get("/epsodios")
        .then((response) => {
          setEpisodes(response.data.results);
        //   console.log(response.data.results);
        console.log(response.data.results.location.name)
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  return (
    <div className='bg-lime-200 grid grid-cols-4 '>
      {episodes.map((episode) => (
        <Card
          key={episode.id}
          name={episode.name}
          airDate={episode.air_date}
          image={episode.image}
          gender={episode.gender}
          species={episode.species}
          status={episode.status}
        />
      ))}
    </div>
  );
};

export default Home;

