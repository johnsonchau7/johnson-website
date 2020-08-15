import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";

import './IntroPage.css'

const useStyles = makeStyles((theme) =>({
  button: {
    textTransform: "none",
    width: 170,
    margin: theme.spacing(1),
  },
  root: {
    justifyContent: 'center',
    padding: 10,
  },
  large: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
}));

export default function IntroPage() {
  const button_classes = useStyles();

  return (
    <div>
      <CardActions classes={{root: button_classes.root}}>
        <Avatar className={button_classes.large} src="profile_pic.png" />
      </CardActions>

      <CardActions classes={{root: button_classes.root}}>
        <Typography variant="h4" gutterBottom>
          Johnson Chau
        </Typography>
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
