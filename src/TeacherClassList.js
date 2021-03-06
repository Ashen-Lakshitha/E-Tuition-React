import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles }from '@mui/styles';

const useStyles = makeStyles({
  media: {
    "&:hover": {
      transform: "scale3d(1.2, 1.2, 1)",
      transition: "1s"
    }
  }
});

export default function ClassCard({data}) {
  // const [width, setWidth] = React.useState(300)
  const theme = useTheme();
  const classes = useStyles();

  const match = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{backgroundColor:'white', m:1}}
    >
      <Card
        sx={{width:match?'85vw':200,height:match?'':316}}
      >
        <CardMedia
          // component="img"
          alt="green iguana"
          className={classes.media}
          style={{height: 50, paddingTop: '56.25%'}}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7cmu-yfeosVSTyQwE1Iy2XP0v_KWNK6w7hA&usqp=CAU"
        />
        <CardContent>
          <Typography gutterBottom height={30} overflow='clip' variant="h5" component="div">
            {data.subject}
          </Typography>
          <Typography height={55} overflow='clip' variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions sx={{justifyContent:'space-evenly', height:15, backgroundColor:'green',}}>
          <Button size='small' sx={{color:'white'}}>Share</Button>
          <Button size="small" sx={{color:'white'}}>View Class</Button>
        </CardActions>
      </Card>
    </Box>
  );
}