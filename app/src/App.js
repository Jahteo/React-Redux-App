import React, { useEffect } from 'react';
import { connect } from "react-redux"
import logo from './logo.svg';
import './App.css';
import MangaList from "./components/MangaList"
import { fetchManga } from "./store/actions/mangaListActions"

function App({ fetchManga, loadingManga, errorMessage }) {
  useEffect(() => {
    fetchManga();
  }, [fetchManga]);

  return (
    <div className="App">
        <h1>Manga Searcher</h1>
        <h2>Err, a work in progress. Enjoy the Top Ranked Manga from AnimeList in the meantime!</h2>
      <header className="App-header">
        {!loadingManga ? <MangaList /> : <div>...Scavenging Current Manga Deets...</div>}
        {errorMessage !== "" ? <div>{errorMessage}</div> : null}
        {/* TODO:create a spinny bit in a corner, and other bobs reusing the code below */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

function mapPropsToState (state) {
  return {
    loadingManga: state.loadingManga,
    errorMessage: state.errorMessage
  }
}

export default connect(mapPropsToState, { fetchManga })(App);
