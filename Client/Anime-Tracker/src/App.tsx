import { useState, useEffect } from "react";
import Header from "./components/Header";
import Side from "./components/Side";
import Anime from "./components/Anime";
import Footer from "./components/Footer";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState([]);

  const getTopAnime = async () => {
    const temp = await fetch("https://api.jikan.moe/v4/top/anime").then((res) =>
      res.json()
    );

    setTopAnime(temp.top.slice(0, 5));
  };

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    fetchAnime(search);
  };

  const fetchAnime = async (query: any) => {
    const temp = await fetch (`https://api.jikan.moe/v4/top/anime=${query}`)
      .then(res => res.json());

      setAnimeList(temp.results);
  }
  useEffect(() => {
    getTopAnime();
  }, []);
  console.log(topAnime);

  return (
    <>
      <div className="bg-image">
        <div className="App">
          <Header />
          <div className="content-wrap"></div>
          <Side topAnime={topAnime} />
          <Anime
            handleSearch={handleSearch}
            search={search}
            animeList={animeList}
          />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;
