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
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
//   console.log( props.items );

  var cards = [];

  props.items.forEach( item => {
        console.log(item.link);
        let photoAdd = "";
        if( item.photo !==  undefined ) photoAdd = item.photo.smallThumbnail;
        cards.push( 
             <div style = { { display:"block" } } >
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt={item.title}
                height="140"
                image={photoAdd}
                title={item.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2"> {item.title}  </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"> {item.author} </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href = {item.link} > Go to Book </Button>
            </CardActions>
            </Card>
            </div>
        );
  });

  return (
    <div>
        {cards}
    </div>
    
  
  );
}
