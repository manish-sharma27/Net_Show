import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sdata from './Sdata';
import Movies from './Movies';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  //   <App />
  // </React.StrictMode>
  <>

{/* <h1>List of  top 5 Netflix Series</h1>
        {/* fat_Arrow function */}
{/* 
        {Sdata.map((val,index) =>{
                console.log(index);     
        return(
         <Movies 
                key={val.id}
                genre={val.genre}
                url={val.url}
                title={val.title}
                watch={val.watch}
                // link={val.link}
        />
        );

        })}  */}
        <App/>
  </>


);

reportWebVitals();
