import React from "react";
import "../../css/MovieList.css";
import MovieInfo from "./MovieInfo";
function MovieList({ movies }) {
    return (
        <>
            <section className="containerBox">
                <div className="moive-list">
                    <div className="container text-center moviePage-subject">
                        TOP 20 MOVIES DOWNLOAD IN TORRENT
                    </div>
                    {movies.map((movie, index) => (
                        <MovieInfo
                            key={index}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default MovieList;
