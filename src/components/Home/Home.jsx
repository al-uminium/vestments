import React from "react";
import './Home.css'
import HomeImg from '../../photos/casual-dresscode.jpg'

function Home() {
  return(
    <div className="Home">
      <div className="image-container">
        <div className="image-signboard">
          <div className="signboard-1">
            VESTMENTS
          </div>
          <div className="signboard-2">
            A fake e-commerce store for satisfying your clothing needs
          </div>
          <div className="signboard-3">
            SHOP NOW
          </div>
        </div>
        <img src={HomeImg} alt="Home" className="HomeImg" />
      </div>
    </div>
  )
}

export default Home