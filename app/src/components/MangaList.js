import React from "react";
import { connect } from "react-redux"
import TopManga from "./TopManga"
import Manga from "./Manga"


function MangaList ({ mangas, topMangaList }) {
return (
    <>
    <h3>Top Manga List</h3>
    {topMangaList.map((topManga) => {
      return <TopManga key={topManga.mal_id} topManga={topManga} />
    })}
    {/* why do these not do what I expect?? I can't use one by itself either. */}
    <hr />
    <hr></hr>
    <><hr></hr></>
    {/* this will be reimplemented when a genre or search is performed. Searching the API returns completely diff data shape, so it needs a seperate component. */}
    {/* <h3>Manga Selections</h3>
    {mangas.map((manga) => {
      return <Manga key={manga.mal_id} manga={manga} />
    })} */}
    </>
  )
}

function mapStateToProps (state) {
  return {
    mangas: state.mangas,
    topMangaList: state.topMangaList
  };
}

export default connect(mapStateToProps, {})(MangaList)