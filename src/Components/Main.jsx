import React, { useState } from "react";

const Main = () => {


  const [imgUrl, setImgUrl] = useState("https://cdn2.thecatapi.com/images/7j2.jpg")
  const callImg = ()=>{
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(res=>res.json())
    .then(data=>setImgUrl(data[0].url))
  }


  return (

    <div className="container">
        <div className="box">
          <h2>Enjoy the kitty </h2> <br /> <br />
          <img src={imgUrl} alt="" /> <br /> <br />
          <button onClick={()=> callImg()}>Click me</button>
        </div>
    </div>

  )
}

export default Main