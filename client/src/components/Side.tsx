// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

function Side() {
    return (
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
    )
}

export default Side;