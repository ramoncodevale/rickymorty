import { useState, useEffect } from 'react';

import Card from '../components/Card';
import { api } from '../lib/api';


const Home = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await api
        .get("/character")
        .then((response) => {
          setEpisodes(response.data.results);
        console.log(response.data.results)
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="bg-[url('../assets/bg-image.png')]">
    <div className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
    </div>
  );
};

export default Home;