import React ,{useState,useEffect} from  'react';
import axios from 'axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url="https://image.tmdb.org/t/p/original";


const Row = ({title,fetchUrl,isLargeRow}) => {
    const[movies,setMovies]=useState([]);
    const[trailerUrl,setTrailerUrl]=useState("");
    useEffect(()=>{
        const fetchData=async () => {
            const response =await axios.get(
               fetchUrl
            );
            setMovies(response.data.results);
            return response;
        };
        fetchData();
    },[fetchUrl]);
    console.log("movies",movies)

    const handleClick = async (movie) => {
        if (trailerUrl) {
          setTrailerUrl('');
        } else {
          try {
            const trailer = await movieTrailer(movie?.name || '', {
              tmdbId: movie.id,
              apiKey: "8ab056525e73a06067eb18d8561f020c", // Replace with your TMDB API key
            });
    
            if (trailer) {
              const urlParams = new URLSearchParams(new URL(trailer).search);
              setTrailerUrl(urlParams.get('v'));
            } else {
              console.log('No trailer found for', movie?.name);
            }
          } catch (error) {
            console.error('Error fetching trailer:', error);
          }
        }
      };
    
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoPlay:1,
        },
    };
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row-posters'>
            {movies && 
            movies.map((movie) => (
                <img
                onClick={() => handleClick(movie)}
                key={movie.id}
                className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
              />
              
            ))
            }
        </div>
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
};

export default Row
