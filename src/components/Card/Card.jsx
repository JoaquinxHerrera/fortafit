import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PropTypes from 'prop-types';

export default function ActionAreaCard({img, title}) {
    ActionAreaCard.propTypes = {
        img: PropTypes.string.isRequired, 
        title: PropTypes.string.isRequired,
      };
      
  return (
    <Card sx={{ maxWidth: 265, backgroundColor: 'gray', textAlign: 'center'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={img}
          alt="image"
          
        />
        <CardContent className='Card'>
          <Typography gutterBottom variant="h6" component="div" color="white" >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
)}