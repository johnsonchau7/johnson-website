import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import {makeStyles} from "@material-ui/core/styles";

import './IntroPage.css'

const useStyles = makeStyles((theme) =>({
  button: {
    textTransform: "none",
    minWidth: 170,
    maxWidth: 170,
    marginTop: 20,
    margin: theme.spacing(5),
    marginBottom: 20,
  },
  root: {
    justifyContent: 'center',
    padding: 10,
  },
  large: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
  bio: {
    minWidth: 550,
    maxWidth: 550,
    justifyContent: 'center',
  },
  description: {
    minWidth: 550,
    maxWidth: 550,
  },
  centertext: {
    textAlign: 'center',
  },
  chips: {
    justifyContent: 'center',
    minWidth: 130,
    maxWidth: 130,
  },
  chipssection: {
    justifyContent: 'space-evenly',
  },
  iconsize: {
    fontSize: 55,
    textAlign: 'center',
    minWidth: 130,
    maxWidth: 130,
  },
  iconchip: {
    minWidth: 130,
    maxWidth: 130,
    marginTop: 0,
    margin: theme.spacing(3),
    marginBottom: 10,
  },
  iconchipsection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

export default function IntroPage() {
  const button_classes = useStyles();

  return (
    <div>
      {/*profile picture*/}
      <CardActions classes={{root: button_classes.root}}>
        <Avatar className={button_classes.large} src="profile_pic.png" />
      </CardActions>

      {/*name*/}
      <CardActions classes={{root: button_classes.root}}>
        <Typography variant="h4">
          Johnson Chau
        </Typography>
      </CardActions>

      {/*bio*/}
      <CardActions classes={{root: button_classes.root}}>
        <Card className={button_classes.bio}>
          <CardContent>
            <Typography variant="body1" component="p" align="center">
              A 2nd year Business Analytics and Computer Science student at University of Sydney, Active Programmer <span role="img" aria-label="computer">🖥</span> and Problem Solver <span role="img" aria-label="puzzle">🧩</span>
            </Typography>
          </CardContent>
        </Card>
      </CardActions>

      {/*more about me*/}
      <CardActions className={button_classes.chipssection}>
        {/*Personality*/}
        <Card className={button_classes.description}>
          <CardHeader
            title="Personality" className={button_classes.centertext}
          />
          <div className={button_classes.iconchipsection}>
            <div className={button_classes.iconchip}>
              <div>
                <Icon className={button_classes.iconsize}>groups</Icon>
              </div>
              <div>
                <Chip className={button_classes.chips}label="Team Player" clickable/>
              </div>
            </div>
            <div className={button_classes.iconchip}>
              <div>
                <Icon className={button_classes.iconsize}>mood</Icon>
              </div>
              <div>
                <Chip className={button_classes.chips}label="Communicator" clickable/>
              </div>
            </div>
            <div className={button_classes.iconchip}>
              <div>
                <Icon className={button_classes.iconsize}>school</Icon>
              </div>
              <div>
                <Chip className={button_classes.chips}label="Learner" clickable/>
              </div>
            </div>
          </div>
        </Card>

        {/*Skills*/}
        <Card className={button_classes.description}>
          <CardHeader
            title="Skills" className={button_classes.centertext}
          />

          <div className={button_classes.iconchipsection}>
            <div className={button_classes.iconchip}>
              <div>
                <Icon className={button_classes.iconsize}>text_snippet</Icon>
              </div>
              <div>
                <Chip className={button_classes.chips}label="Python" clickable/>
              </div>
            </div>
            <div className={button_classes.iconchip}>
              <div>
                <Icon className={button_classes.iconsize}>computer</Icon>
              </div>
              <div>
                <Chip className={button_classes.chips}label="Java" clickable/>
              </div>
            </div>
            <div className={button_classes.iconchip}>
              <div>
                <Icon className={button_classes.iconsize}>developer_board</Icon>
              </div>
              <div>
                <Chip className={button_classes.chips}label="C" clickable/>
              </div>
            </div>
          </div>

        </Card>
      </CardActions>

      {/*key documents and links*/}
      <CardActions classes={{root: button_classes.root}}>
        <Button className={button_classes.button} variant="outlined" fullWidth="false" href="Johnson_Chau_CV.pdf" target="_blank" >Resume</Button>
        <Button className={button_classes.button} variant="outlined" href="Johnson_Chau_Academic_Transcript.pdf" target="_blank">Academic Transcript</Button>
        <Button className={button_classes.button} variant="outlined" href="https://www.linkedin.com/in/johnsonchau7/" target="_blank">LinkedIn</Button>
        <Button className={button_classes.button} variant="outlined" href="https://github.com/johnsonchau7" target="_blank">GitHub</Button>
      </CardActions>

    </div>
  );
}
