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
      <div className="pt-10 pl-16 text-white">
        <div className="w-64">
          <h1 className="text-2xl font-bold text-center w-64">List your car on Smart Autos</h1>
          <p className="text-center w-64">
            Join a vibrant community of car dealers. No matter the price level or type of car, Smart
            Auto will bring you interested buyers.
          </p>
        </div>
        <Button variant="contained" className={classes.button}>
          Get Started
        </Button>
      </div>
    </>
  );
};
export default Banner;
