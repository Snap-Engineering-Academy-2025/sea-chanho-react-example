import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './App.css'
import Container from "@mui/material/Container";

// import characters from './protagonists.json'

function App() {


  return (

    <>
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          Three Neat Exercises
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Try adding these to your routine
        </Typography>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={0} >
          <Grid display="flex" justifyContent="center" alignItems="center" size={4}> 
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Incline Dumbell Press"
                height="140"
                image="https://cdn.jefit.com/assets/img/exercises/gifs/31.gif"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Incline Dumbell Press
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Works shoulders, chest, and triceps.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid display="flex" justifyContent="center" alignItems="center" size={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Lateral Dumbell Raise"
                height="140"
                image="https://cdn.jefit.com/assets/img/exercises/gifs/32.gif"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lateral Dumbell Raise
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Works your shoulders
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

           <Grid display="flex" justifyContent="center" alignItems="center" size={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Pull up"
                height="140"
                image="https://cdn.jefit.com/assets/img/exercises/gifs/83.gif"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Pull up
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Works lets, shoulders, and biceps
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
    </>
  )
}

export default App