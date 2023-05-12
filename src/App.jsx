import { useRef, useState } from "react";
import axios from "axios";
import { youtube_parser } from "./utils";


function App() {
  const inputUrlRef = useRef();
const [urlResult,setUrlResult] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault()
     const youtubeID = youtube_parser(inputUrlRef.current.value);
    console.log(youtubeID);
   


    const options = {
      method: 'get',
      url: 'https://youtube-mp3-download1.p.rapidapi.com/dl',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
      },
      params: {
        id: youtubeID
      }


    }
    axios(options)
      .then(res => setUrlResult(res.data.link))
      .catch(err => console.log(err))

    inputUrlRef.current.value = '';


  }

  const mystyle = {
    color: "#0096FF",
    
    
    

  }

  return (
   
   <div className="app">
  
    
      
    <section className="content">
      <div className="exoture">Exoture</div>
      <div className="content-desc"> <u>Secure</u> | <u>Fast</u> | <u>Reliable</u></div>
      <div className="content-desc2"> Click <u style={mystyle}>DOWNLOAD</u> on Next Page... Then Close It To Return.</div>


      <form onSubmit={handleSubmit} className="form" >
        <input ref={inputUrlRef} className="form-input" placeholder="Paste a Youtube URL Here..." type="tes" />
        <button type="submit" className="form-button">Search</button>

      </form>

      {urlResult? <a target='_blanck' rel="norefrrer" href={urlResult} className="download-btn"> GET MP3</a> : ''}
      

    
    </section>
  </div>
  )
}

export default App
