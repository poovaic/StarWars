import {GetAllStarships} from '../sw-api.js';


function StarshipCard(){

   const {starShip,loading}=GetAllStarships('https://swapi.dev/api/starships/')
   if(loading) return <h1>Loading...</h1>;
   
    return(
        <div className="container">
    
        {starShip.map((result)=>{
        return <h2>{result.name}</h2>
        })}
        

        </div>
    )
}

export default StarshipCard