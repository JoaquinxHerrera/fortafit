import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { PropTypes } from 'prop-types';




export default function CarouselRatio({items}) {
  CarouselRatio.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      })
    ).isRequired,
  };
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        width: '100%',
        textAlign: "center",
        padding:5,
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {items.map((item) => (
        <Card sx={{cursor:"pointer"}} orientation="vertical" size="sm" key={item.title} variant="outlined" >
          <AspectRatio ratio="1" sx={{ minWidth: 200 }}>
            <img
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?h=120&fit=crop&auto=format`}
              alt={item.title}
            />
          </AspectRatio>
          <Box sx={{ whiteSpace: 'nowrap', mx: 2 }}>
            <Typography level="title-md">{item.title}</Typography>
            <Typography level="body-sm">{item.description}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}