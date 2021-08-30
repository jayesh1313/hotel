import React from 'react'
import Title from './Title'
import Form from './Form'

import '../stylesheets/home.css';

export default function Home() {
    return (
      
        <div className="rty"  >
    
     <h2 className="reqp">Make your vacation</h2>
     
     <h1 className="yuio">Comfortable</h1>
    
     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  src="https://lh3.googleusercontent.com/proxy/1_o4eRkVbfqdC304SJ1LVox0KDgCLXvnVtekrPiL5McbGz8aduXvWmnN5Hi2_K8arid7TGyXecVOkrbiKQQjuYBK8JnBbRlBbA19LO0lc5VHKwGhFDxCHJdCi7jZSnFoadi8aRkBlzmRc2t6Biz_vKHd3dJXY6fteug" className="d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://wallpapers.net/web/wallpapers/maldives-hotel-room-hd-wallpaper/5120x2160.jpg" className="d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="http://wallpapers.net/las-vegas-unleashed-hd-wallpaper/download/5120x2160.jpg" className="d-block w-50" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

          <h2 className="yhj">Book now </h2>


       
                  
                   
                   
             
                  
                      
                   
            
               
            
            
               

          

        </div>
    )
}
