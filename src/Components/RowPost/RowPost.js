import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import { API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axios'
// import YouTube from 'react-youtube';

function RowPost(props) {       
  const [state, setState] = useState([])
  const {title,isSmall, url}=props;
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log("+++++++++", response.data)
      setState(response.data.results)
    })
  }, [])

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="posters">
        {state ? state.map((item) => {
          return (
            <img className= {isSmall ?"smallposter" :"poster"}src={`${imageUrl+item.backdrop_path}`} alt="Poster" />
          )
        }) : null}
      </div>
 
     {/* <YouTube videoId="2g811Eo7K8U" opts={opts}/> */}
    </div>
  )
}

export default RowPost