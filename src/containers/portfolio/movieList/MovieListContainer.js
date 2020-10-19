import React, { useEffect } from "react";
import MovieList from "../../../components/portfolio/MovieList/MovieList";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList } from "../../../modules/movieList";
import { CircularProgress } from "@material-ui/core";

function MovieListContainer() {
    const { data, loading, error } = useSelector(
        (state) => state.movieList.movieList
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieList());
    }, [dispatch]);

    if (loading && !data)
        return (
            <div className="data-handling-sentence">
                <CircularProgress />
            </div>
        );
    if (error)
        return (
            <div className="data-handling-sentence">
                HTTP Communication Error!
            </div>
        );
    if (!data) return null;

    return (
        <>
            <MovieList movies={data.data.data.movies} />
        </>
    );
}

export default MovieListContainer;
