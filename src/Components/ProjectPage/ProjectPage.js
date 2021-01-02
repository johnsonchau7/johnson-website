import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  mainmedia1: {
    height: 350,
    width: 200,
  },
  mainmedia2: {
    height: 350,
  },
  maincardcontent: {
    display: 'flex',
    flexDirection: 'row',
  },
  maincarddescription: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: 400,
  },
  mainbutton: {
    paddingLeft: 9,
  },
  secondmedia: {
    height: 250,
    width: 700,
  },
  secondmedia1: {
    height: 250,
    width: 650,
  },
  secondcardcontent: {
    height: 400,
    width: 700,
  },
  secondcardstyle: {
    justifyContent: 'space-evenly',
  },
  secondbutton: {
    paddingLeft: 8,
  },
});

export default function ProjectPage(){
  const classes = useStyles();

    return (
      /*More about me*/
      <div>
        <div>
          <CardActions className={classes.secondcardstyle}>
            <Card className={classes.secondcardcontent}>
              <CardActionArea>
                <Link href="https://play.google.com/store/apps/details?id=com.JCBEST.maths_games" target="_blank">
                  <CardMedia className={classes.secondmedia1} image="Quick_Maths_game2.png" title="Quick Maths"></CardMedia>
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Quick Maths - Android Mobile Game
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Quick Maths - A free maths trivia game for students to finesse their arithmetic skills. Designed for anyone who enjoys fast paced mathematics!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://play.google.com/store/apps/details?id=com.JCBEST.maths_games" target="_blank" className={classes.secondbutton}>
                  Learn More
                </Button>
              </CardActions>
            </Card>

            <Card className={classes.secondcardcontent}>
              <CardActionArea>
                <Link href="https://github.com/johnsonchau7/tesla-forecasting" target="_blank">
                  <CardMedia className={classes.secondmedia}image="Tesla.png" title="FameBit"></CardMedia>
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Time Series Forecasting for Tesla
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    This project aims to build a univariate time series forecasting model for Tesla stock price in next 24 months from Dec 2020
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://github.com/johnsonchau7/tesla-forecasting" target="_blank" className={classes.secondbutton}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </CardActions>
        </div>

        <div>
          <CardActions className={classes.secondcardstyle}>
            <Card className={classes.secondcardcontent}>
              <CardActionArea>
                <Link href="https://github.com/johnsonchau7/AccentureBootcamp" target="_blank">
                  <CardMedia className={classes.secondmedia} image="Sust.png" title="Sust"></CardMedia>
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sust - Empowering Sustainablity
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    A sustainable food web application where users can make recipes from their left-over ingredients and view their ecological impact
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://github.com/johnsonchau7/AccentureBootcamp" target="_blank" className={classes.secondbutton}>
                  Learn More
                </Button>
              </CardActions>
            </Card>

            <Card className={classes.secondcardcontent}>
              <CardActionArea>
                <Link href="https://github.com/johnsonchau7/GoogleCaseComp2020" target="_blank">
                  <CardMedia className={classes.secondmedia}image="GoogleCase.png" title="FameBit"></CardMedia>
                </Link>
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
                <Button size="small" color="primary" href="https://github.com/johnsonchau7/GoogleCaseComp2020" target="_blank" className={classes.secondbutton}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </CardActions>
        </div>

        <Card className={classes.maincardcontent}>
          <CardActionArea >
            <Link href="https://github.com/johnsonchau7/sp500vsAMD" target="_blank">
              <CardMedia className={classes.mainmedia2} image="S&P500vsAMD.png" title="S&P500vsAMD"></CardMedia >
            </Link>
          </CardActionArea>
          <CardActions className={classes.maincarddescription}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2" align="justify">
                S&P500 vs AMD Data Project
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p" align="justify">
                Personal data project for explaining relationship between S&P500 and AMD between 2018 to 2019
              </Typography>
            </CardContent>
            <Button size="big" color="primary" href="https://github.com/johnsonchau7/sp500vsAMD" target="_blank" className={classes.mainbutton}>
              Learn More
            </Button>

          </CardActions>
        </Card>
      </div>

    );
}
