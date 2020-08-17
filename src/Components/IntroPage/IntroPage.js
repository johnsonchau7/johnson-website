import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";

import './IntroPage.css'

const useStyles = makeStyles((theme) =>({
  button: {
    textTransform: "none",
    width: 170,
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
    marginTop: 20,
    margin: theme.spacing(3),
    marginBottom: 20,
    justifyContent: 'center',
    minWidth: 130,
    maxWidth: 130,
  },
  chipssection: {
    justifyContent: 'space-evenly',
  }

}));

export default function IntroPage() {
  const button_classes = useStyles();

  return (
    <div>
      <CardActions classes={{root: button_classes.root}}>
        <Avatar className={button_classes.large} src="profile_pic.png" />
      </CardActions>

      <CardActions classes={{root: button_classes.root}}>
        <Typography variant="h4">
          Johnson Chau
        </Typography>
      </CardActions>

      <CardActions classes={{root: button_classes.root}}>
        <Card className={button_classes.bio}>
          <CardContent>
            <Typography variant="body1" component="p" align="center">
              A 2nd year Business Analytics and Computer Science student at University of Sydney, Active Programmer <span role="img" aria-label="computer">🖥</span> and Problem Solver <span role="img" aria-label="puzzle">🧩</span>
            </Typography>
          </CardContent>
        </Card>
      </CardActions>

      <CardActions className={button_classes.chipssection}>
        <Card className={button_classes.description}>
          <CardHeader
            title="Personality" className={button_classes.centertext}
          />
          <Chip className={button_classes.chips} label="Team Player" clickable/>
          <Chip className={button_classes.chips} label="Communicator" clickable/>
          <Chip className={button_classes.chips} label="Curious" clickable/>
        </Card>
        <Card className={button_classes.description}>
          <CardHeader
            title="Skills" className={button_classes.centertext}
          />
          <Chip className={button_classes.chips} label="Python" clickable/>
          <Chip className={button_classes.chips} label="Java" clickable/>
          <Chip className={button_classes.chips} label="C" clickable/>
        </Card>
      </CardActions>

      <CardActions classes={{root: button_classes.root}}>
        <Button className={button_classes.button} variant="outlined" fullWidth="false" href="Johnson_Chau_CV.pdf" target="_blank" >Resume</Button>
        <Button className={button_classes.button} variant="outlined" href="Johnson_Chau_Academic_Transcript.pdf" target="_blank">Academic Transcript</Button>
        <Button className={button_classes.button} variant="outlined" href="https://www.linkedin.com/in/johnsonchau7/" target="_blank">LinkedIn</Button>
        <Button className={button_classes.button} variant="outlined" href="https://github.com/johnsonchau7" target="_blank">GitHub</Button>
      </CardActions>

    </div>
  );
}
