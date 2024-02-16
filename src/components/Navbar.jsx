import React  from 'react';


const Navbar = () => {


  return (
    <nav>
      <div>
        <h1 className='no-margin'>Alexandre De Roeck</h1>
        <p className='no-margin'>Software Engineer</p>
        </div>
    <ul id="menu">
      <li>Accueil
        <ul>
          <li><a href="#">Photo</a></li>
          <li><a href="#">Vidéo</a></li>
          <li><a href="#">Design</a></li>
        </ul>
  
      </li>
      <li>Présentation
        <ul>
          <li><a href="https://github.com/Alex-Der-coder">Git</a></li>
          <li><a href="#">Vidéo</a></li>
          <li><a href="#">Design</a></li>
        </ul>
      </li>
      <li><a href="https://image-gallery-starter-8oupxb12p-alex-der-coders-projects.vercel.app/" aria-label="Lien vers une application de gallery photo">Gallery Photo</a></li>
    </ul>
    <label className="switch" aria-label="put the light Off or Not" >
      <input type="checkbox" />
      <span className="slider"></span>
    </label>

  </nav>
  
  );
};

export default Navbar;
