import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 400,
  },
  avatar: {
    backgroundColor: red[500],
  },

});


function TopManga ({topManga}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardHeader
        avatar={
          <Avatar aria-label="ranking" className={classes.avatar}>
            # {topManga.rank}
          </Avatar>
        }
      />
        <CardMedia
          className={classes.media}
          image={topManga.image_url}
          title={topManga.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {topManga.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Running: {topManga.start_date} - {topManga.end_date} <br/>
            Volumes: {topManga.volumes} <br/>
            Scored {topManga.score} by {topManga.members} members at AnimeList.com
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    // <div>
    //   <h4>{topManga.title}</h4>
    //   <img src={topManga.image_url} alt={`${topManga.title} cover art`}/>
    // </div>
  )
}

export default TopManga;