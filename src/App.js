import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

    const globalState = useSelector(state => state);
    const dispatch = useDispatch();
    const dispatchData = payload => dispatch({type: "ADD_2", payload});
    const apiKey = "2b6WajyaZvx7A7a8c11RDpoYseI1BZBf";
    const q = "t";
    const fetchData = () => fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${q}`);
    // fetch('https://jsonplaceholder.typicode.com/todos/1');
    const fetchDispatch = ()=>{
        fetchData().then(response => response.json())
        .then( json =>(
            (console.log(json),
            Object.keys(json).length === 0 && json.constructor === Object?
            dispatchData(0):dispatchData(1),dispatch({type: "ADD_LOCATION", payload: json[0].Key})
            ,console.log(globalState.reducer2.locations)) ) 
        )
    }

    return(
        <div className="App">
            {globalState.reducer.appData.map((value,index)=>(
               <div key={index}> 
                   <ul>{value}</ul>
               </div>
            ))
            }
             {globalState.reducer.messages.map((value,index)=>(
               <div key={index}> 
                   <ul>{value}</ul>
               </div>
            ))
            }
             {globalState.reducer2.appData.map((value,index)=>(
               <div key={index+"@"}> 
                   <ul>{value}</ul>
               </div>
            ))}
              {globalState.reducer2.messages.map((value,index)=>(
               <div key={index+"@"}> 
                   <ul>{value}</ul>
               </div>
            ))}
            <button onClick={fetchDispatch}>send</button>
        </div>
    )
}

export default App