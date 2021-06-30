import React from 'react';
import './Card.css';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
function card({src, title, description, price,rating}) {
  function description_length(str, n){
    return str?.length > n ? str.substr(0,n-2) + "..." :str;
}

// function Rating(rating) {
//       var x;

//       x=Math.trunc(rating);
//       // console.log(x);

//       for(var i=0;i<=x;i++){
//         console.log(x);
//         { <StarRateIcon className="star" />}
//       }
//       }

function changeColor() { 
  document.getElementById( 
    "Myelement").style.backgroundColor = 
      document.getElementById( 
    "red").value; 
      }
    return (
      
      <div className="card">
        {/* <h4><FavoriteIcon className="FavoriteIcon"/></h4> */}
          <img src={src} alt="" />
          <div className="card-info"> 
              <h2>{title}</h2>
              <div className='night'>
              <h4>{price} $</h4>
              <h4>{rating}<StarRateIcon className="StarRateIcon" /> </h4>
              </div>
              <p>{description_length(description,100)}<a href="#">see more</a></p>
          </div>
      </div>
    );
  }

  export default  card;