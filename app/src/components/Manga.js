import React from "react";

function Manga ({manga}) {
  return (
    <div>
      <h4>{manga.title_english}</h4>
      <h5>{manga.title_japanese}</h5>
      <img src={manga.image_url} alt={`${manga.title_english} cover art`}/>
    </div>
  )
}

export default Manga;