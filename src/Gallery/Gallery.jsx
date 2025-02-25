import React from "react";
import "./Gallery.scss";
import aiuImgOne from "./../assets/university.png"
import aiuImgTwo from "./../assets/graduation1.jpg"
import aiuImgThree from "./../assets/president.jpg"
import aiuImgFour from "./../assets/med-students.jpg"
import aiuImgFive from "./../assets/library.jpg"
import aiuImgSix from "./../assets/corner-look.jpg"
import aiuImgSeven from "./../assets/computer-science.jpg"
import aiuImgEight from "./../assets/trip.jpeg"
import aiuImgNine from "./../assets/hall.jpg"
import aiuImgTen from "./../assets/enactus.jpg"
import aiuImgEleven from "./../assets/outside-university.jpg"
import aiuImgTwelve from "./../assets/festival.jpeg"




const Gallery = () => {
  return (
    <section id="gallery">
      <h1>Галерея</h1>

      <div className="cards-grid">
        <div className="card-demo horizon-1"><img src={aiuImgOne} alt="" /></div>
        <div className="card-demo horizon-2"><img src={aiuImgTwo} alt="" /></div>
        <div className="card-demo vertical-1"><img src={aiuImgTwelve} alt="" /></div>
        <div className="card-demo vertical-2"><img src={aiuImgEight} alt="" /></div>

        <div className="card-demo horizon-3"><img src={aiuImgSix} alt="" /></div>
        <div className="card-demo horizon-4"><img src={aiuImgThree} alt="" /></div>
        <div className="card-demo vertical-3"><img src={aiuImgEleven} alt="" /></div>
        <div className="card-demo vertical-4"><img src={aiuImgSeven} alt="" /></div>

        <div className="card-demo"><img src={aiuImgFour} alt="" /></div>
        <div className="card-demo"><img src={aiuImgTen} alt="" /></div>
        <div className="card-demo"><img src={aiuImgFive} alt="" /></div>
        <div className="card-demo"><img src={aiuImgNine} alt="" /></div>
      </div>
    </section>
  );
};

export default Gallery;
