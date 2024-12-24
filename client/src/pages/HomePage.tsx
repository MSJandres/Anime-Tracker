// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import "../style/index.css"
// import { useState, useEffect } from "react";


function Home() {
    // const [topAnime, setTopAnime] = useState([]);
    // // const [search, setSearch] = useState([]);

    // const getTopAnime = async () => {
    //     const temp = await fetch("https://api.jikan.moe/v4/top/anime").then((res) =>
    //         res.json()
    //     );

    //     setTopAnime(temp.top.slice(0, 5));
    // };


    // useEffect(() => {
    //     getTopAnime();
    // }, []);
    // console.log(topAnime);

    return (
        <div className="bg-image">
            <div className="content-wrap" >
                <aside>
                    <nav>
                        <h3>Top Animes!</h3>
                        <a
                            href='#'
                            rel='noreferrer'>
                            Attack on Titan
                        </a>
                        <a
                            href='#'
                            rel='noreferrer'>
                            Naruto
                        </a>
                        <a
                            href='#'
                            rel='noreferrer'>
                            One Piece
                        </a>
                        <a
                            href='#'
                            rel='noreferrer'>
                            Hunter x Hunter
                        </a>
                    </nav>
                </aside>
            </div>
        </div>
    )
}

export default Home;