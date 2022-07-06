import {useState,useEffect} from 'react';

export function GetAllStarships(url){
   
    const [starShip,setStarShip] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
    async function ship(){
    let response = await fetch(url);
    let data = await response.json();
    setStarShip(data.results)  }

    ship()
    setLoading(false)
  
    },[url]);
  //console.log('starship',starShip)
  return{starShip}
}
