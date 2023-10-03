import "./App.css";

import Movies from "./Movies.js";
import "./Movies.css";
import Sdata from "./Sdata";
function App() {
  return (
    <div>
      
      {/* <Movies
        genre="Action Movies"
        url="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXl6zodS7Jvuc-mOjBB-xuOzDoaAtHqFxQKeQ9Mg-1eikrdhgoTJyoRf7CnyleEQmeAIcc8H2nUYcbxumUMC5EAo8iACzWirylqRmYi0mDSXQdPSnJMHD-8tuaiQDJ89YmBd.jpg?r=545"
        title="Heart of Stone"
        watch="https://www.netflix.com/in/title/81416533"
      />
      <Movies
        genre="Action Movies"
        url="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXXaOZ3614x7qxHuZwCkuBbNAuQ03hqamYhHnccwvl9f-4QIK0JBiUh7A7UCt8lgkubqVNQ8fvkkSsqjlT7iHwqjb4r1xffdo6w.jpg?r=144"
        title="Annaatthe"
        watch="https://www.netflix.com/in/title/81509795"
      />
      <Movies
        genre="Action Movies"
        url="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV4lXl5W0GbT4svW4eaeILgbwaOuA7CVwiVjHCJtociy9ysxyAGNrpe0bAwilTWjWRB-mWmU3xS6YLfWRkupeXsOvjHEeKprI10.jpg?r=f05"
        title="Jurassic World: Fallen Kingdom"
        watch="https://www.netflix.com/in/title/80228280"
      />
      <Movies
        genre="Hindi Movies"
        url="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbt4y3eK60Xcv_l_vqbZ4LX7eHEddXQm3xummlUaB6UUheuQpl53-kp3tNHOTFwW0SsBHthkPix82hqNInQgqHpPzopz2in6opw.jpg?r=f90"
        title="KKKG"
        watch="https://www.netflix.com/in/title/60036750"
      />
      <Movies
        genre="Hindi Movies"
        url="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb-UeRGrmB5paEG8fFvf2J6MBXccsWeHYK-8XCEbKkpl2e031wKvTbbSCyW3kduUg8qZBz6NN3UC-gQoa9ky76OGa28PG6V0iLw.jpg?r=ac4"
        title="Rowdy Rathore"
        watch="https://www.netflix.com/in/title/70229043"
      />
      <Movies
        genre="Hindi Movies"
        url="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRaPEsCNMpLI210T7AnzmTZSw9LMqZ0ndpiwEa0k2rlSVzzeWv01Mn4rDpVfZy4uVsiUI8JVXKG8EnLDWB3mMfiGLznZUAB7FBE.jpg?r=847"
        title="Taare Zameen pr"
        watch="https://www.netflix.com/in/title/70087087"
      />
      <Movies
        genre=" Action Thriller "
        url="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSAD5Ss-fXCIrtLhO3Vz7T-4Lut3TTTP4NtpdWT1NVhbVtCfo4Dl4xD8onWwOJXtAT9k0rv8bNJqsj8Q_OYyZyjV0nZCqJpQ2yNu2o-r1QyLGl1z4LlgK-5jomfCq_rjsEBt.jpg?r=57c"
        title="Bright"
        watch="https://www.netflix.com/in/title/80119234"
      />
      <Movies
        genre=" Action Thriller"
        url="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcUjzHFgb4aq-ldAOLiJgBTZWSNhomBYYC-tmwn7yrEOO_h42ba43f6K5fYm0Q6cINHObchs3dFQe0tL_DqUsTPUA6KXFCXsm61SRoeEmizLqGlZOFU9GREGBKIf-qq8eh6A.jpg?r=362"
        title="Extraction"
        watch="https://www.netflix.com/in/title/80230399"
      /> */}

      <h1>List of top 5 movies</h1>
      <h1 className="express">Movie Time!</h1>

      <h2>Action Movies</h2>

      {Sdata.map((val,index)=>{
        return(
          <Movies
            key={val.id}
            genre={val.genre}
            url={val.url}
            title={val.title}
            watch={val.watch}
          />
        )
      })}

    </div>
  );
}

export default App;
