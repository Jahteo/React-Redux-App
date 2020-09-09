import React from "react";
import { connect } from "react-redux"
import Manga from "./Manga"


function MangaList ({ mangas }) {
return (
  <>
  <h3>Manga Selections</h3>
  {mangas.map((manga) => {
    return <Manga key={manga.mal_id} manga={manga} />
  })}
  </>
)
}

function mapStateToProps (state) {
  return {
    mangas: state.mangas,
  }
}

export default connect(mapStateToProps, {})(MangaList)