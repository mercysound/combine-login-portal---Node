import axios from 'axios';
import {React, useEffect} from 'react';
import pdModeBaseUrl from "../url/BUrl.prod";
// import dvModeBaseUrl from "../url/BUrl.dev"

const Testheroku = () => {
  // const [ApiData, setApiData] = useState("")
  let url = pdModeBaseUrl.baseUrl
  // let url = dvModeBaseUrl.baseUrl;
  useEffect(() => {
    axios.get(url)
    .then((res)=>{
      console.log(res)
      // setApiData(res)
    })
    .catch((err)=>{
      console.error(err)
      console.log("there is an error");
    })
  }, [])
  
  return (
    <>

    </>
  )
}

export default Testheroku;
