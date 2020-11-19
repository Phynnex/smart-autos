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
    marginTop: 16,
    marginLeft: 22,
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <>
      <div className="w-56 pt-24 pl-16 text-white text-center">
        <h1 className="text-3xl font-bold w-56">List your car on Smart Autos</h1>
        <p className="text-x1 w-56 pt-4">
          Join a vibrant community of car dealers. No matter the price level or type of car, Smart
          Auto will bring you interested buyers.
        </p>
        <Button variant="contained" className={classes.button}>
          Get Started
        </Button>
      </div>
    </>
  );
};
export default Banner;
