import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 420,
    maxWidth: 420,
    minHeight: 400,
    maxHeight: 400,
    padding: 20,

  },
  media: {
    height: 250,
  },
  center: {
    justifyContent: 'center',
  },
});

export default function ProjectPage(){
  const classes = useStyles();

    return (
      /*More about me*/
      <CardActions className={classes.center}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="S&P500vsAMD.png"
              title="S&P500vsAMD"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                S&P500 vs AMD Data Project
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Personal data project for explaining relationship between S&P500 and AMD between 2018 to 2019
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href="https://github.com/johnsonchau7/sp500vsAMD" target="_blank">
              Learn More
            </Button>
          </CardActions>

        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="Sust.png"
              title="Sust"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Sust - Empowering Sustainablity
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A sustainable food web app where users can make recipes from their left-over ingredients
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href="https://github.com/johnsonchau7/AccentureBootcamp" target="_blank">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="FameBit.png"
              title="FameBit"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                FameBit - Marketing Made Easier
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A business strategy proposal to evolve Google's existing marketing platform, Famebit, by targeting SMBs
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href="https://github.com/johnsonchau7/GoogleCaseComp2020" target="_blank">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </CardActions>

    );
}
