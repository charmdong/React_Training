import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const {id} = useParams("id");

  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({});

  const getDetail = async() => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    
    setDetail(json.data.movie);
    setLoading(prev => !prev);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      {loading ? <h1>Loading...</h1> :
      <div>
        <img src={detail.medium_cover_image} alt={detail.title}/>
        <h2>{detail.title_long}, Like: {detail.like_count}</h2>
        <span>Rate: {detail.rating}, Runtime: {detail.runtime}Mins</span>
        <p>{detail.description_intro}</p>
        <ul>
				  {detail.genres.map((genre, index) => <li key={index}>{genre}</li>)}
			  </ul>
      </div>
      }
    </div>
  );
}

export default Detail;