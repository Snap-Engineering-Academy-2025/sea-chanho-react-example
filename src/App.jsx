import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './App.css';
import Container from "@mui/material/Container";
import DataCard from './DataCard';
import exercises from "./exercises.json"
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

// import characters from './protagonists.json'

function App() {
  let [counter, setCounter] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  function handleClick() {
    setCounter(counter += 1)
    console.log(counter);
  }
  
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
          {exercises.map(exercise => (
            <Grid display="flex" justifyContent="center" alignItems="center" size={4}>
              <DataCard
                title={exercise.title}
                imgURL={exercise.imgURL}
                description={exercises.description}
                
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* <Button
      variant="contained"
      sx={{ px: 6, mx: "auto" }}
      onClick={handleClick}
    >
      Click Me
    </Button> */}

    <button onClick={handleClick}>
      Clicks - {counter}
    </button>

    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Why did they remake Karate Kid?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            I'm in a club that makes me watch movies and it ruined my memories.
          </Typography>
        </Box>
      </Modal>
    </div>
    </>
  )
}

export default App