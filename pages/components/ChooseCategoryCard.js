import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignSelf: 'flex-end',
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(6),
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(36),
      height: theme.spacing(36),
    },
  },
  instruction: { textAlign: 'center', marginTop: 32, fontWeight: 'Bold' },
  btn: {
    width: 252,
    height: 56,
    marginTop: 16,
    marginLeft: 16,
  },
  action: { textAlign: 'center', marginTop: 32 },
}));

export default function Variants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.cardContainer}>
        <Typography variant="h6" className={classes.instruction}>
          SEARCH BY
        </Typography>
        <div>
          <Button variant="outlined" className={classes.btn}>
            Body Style
          </Button>
          <Button variant="outlined" className={classes.btn}>
            Make/Model
          </Button>
        </div>
        <Typography variant="body2" className={classes.action}>
          View all options
        </Typography>
      </Paper>
    </div>
  );
}
