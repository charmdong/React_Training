import React from 'react';
import PropTypes from 'prop-types';

function Movie(props) {

	const {movie} = props;

	return (
		<div>
			<img src={movie.medium_cover_image} alt={movie.tile}/>
			<h2>{movie.title_long}</h2>
			<span>Rate: {movie.rating}, Runtime: {movie.runtime}Mins</span>
			<p>{movie.summary}</p>
			<ul>
				{movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
			</ul>
		</div>
	);
}


export default Movie;