import React from "react";
function MovieGenre({ genre }) {
    return <span className="movie-genre">{genre + " "}</span>;
}
export default function MovieInfo({ year, title, summary, poster, genres }) {
    return (
        <>
            <div className="movie-info">
                <div className="movie-column">
                    <img
                        className="movie-poster"
                        src={poster}
                        alt={title}
                        title={title}
                    />
                </div>

                <div className="movie-column">
                    <h1>{title}</h1>
                    <div className="movie-genres">
                        {genres.map((genre, index) => (
                            <MovieGenre genre={genre} key={index} />
                        ))}
                    </div>

                    <h5 className="movie-year">{year}</h5>

                    <p className="movie-summary">{summary.slice(0, 180)}...</p>
                </div>
            </div>
        </>
    );
}
