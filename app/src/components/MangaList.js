import React from "react";
import { connect } from "react-redux"
import TopManga from "./TopManga"
// import Manga from "./Manga"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // display: "flex",
    // flexDirection: "column",
    // // alignItems: "center",
    // justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function MangaList ({ mangas, topMangaList }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>Top Manga List</h3>
      <Grid container spacing={3}>

      <>
      {topMangaList.map((topManga) => {
        return (
          <Grid item xs={6} sm={3}>
            {/* <Paper className={classes.paper}> */}
              <TopManga key={topManga.mal_id} topManga={topManga} />
            {/* </Paper> */}
          </Grid>
        )
      })}
      {/* why do these not do what I expect?? I can't use one by itself either. */}
      {/* <hr />
      <hr></hr>
      <><hr></hr></> */}
      {/* this will be reimplemented when a genre or search is performed. Searching the API returns completely diff data shape, so it needs a seperate component. */}
      {/* <h3>Manga Selections</h3>
      {mangas.map((manga) => {
        return <Manga key={manga.mal_id} manga={manga} />
      })} */}
      </>
      </Grid>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    mangas: state.mangas,
    topMangaList: state.topMangaList
  };
}

export default connect(mapStateToProps, {})(MangaList)