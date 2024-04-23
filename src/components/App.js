import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
      <a href="#about"></a>
    </nav>
  );
}

function Home() {
  return (
      <div id="home">
        <h1>Home</h1>
      </div>
  );
}

function About(){
  return(
  <div id="about">
  <h2>About</h2>
</div>
  )
}




function App() {
  return (
    <div>
        <div>
        <NavBar />
        <Home />
        </div>
        <div>
          <About />
          </div>
      </div>
    
    
  );
}

export default App;
