import React from "react";

function TopManga ({topManga}) {
  return (
    <div>
      <h4>{topManga.title}</h4>
      <img src={topManga.image_url} alt={`${topManga.title} cover art`}/>
    </div>
  )
}

export default TopManga;