import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    width: 150,
    height: 46,
    background: '#008080',
    color: '#EAEAEA',
    marginLeft: 22,
    marginBottom: 22,
  },
}));

const Testimonials = () => {
  const classes = useStyles();
  return (
    <>
      <div className="pl-20 pr-20">
        <video width="100%" controls>
          <source src="video.mp4" type="video/mp4" />
        </video>
        <div className="flex pl-16 pt-12 pb-8">
          <p className="pt-2 text-2xl font-bold">Ready to Become a dealer? </p>
          <Button variant="contained" className={classes.button}>
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
