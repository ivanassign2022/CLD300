import './css/FrontProduct.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function FrontProduct() {
  return (
    <Container maxWidth="xl" >
    <Box sx={{ typography: 'h4' }}>Feature Product</Box>
    
    <Grid container spacing={5}>
      <Grid item xs={4}>
        <Card >
          <CardMedia
            sx={{ height: 140 }}
            image="/assets/product/product_1.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            The Air Jordan 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
            The Air Jordan 1 is the very first Nike basketball shoe model that was worn by Michael Jordan in 1985. It is one of the most iconic shoe models in the Jordan series and the entire sneaker industry.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
      <Card >
        <CardMedia
          sx={{ height: 140 }}
          image="/assets/product/product_2.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Nike Air Max 2090
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Nike Air Max 2090 is a modern iteration of the iconic Air Max 90 silhouette, updated for contemporary style and performance.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={4}>
      <Card >
          <CardMedia
            sx={{ height: 140 }}
            image="/assets/product/product_3.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Nike Air Force 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
            The Nike Air Force 1 is one of the most legendary and influential sneakers of all time. It was first introduced in 1982 as a basketball shoe, but has since transcended the court and become a cultural icon.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
      </Card>
      </Grid>
    </Grid>
    </Container>
  );
}