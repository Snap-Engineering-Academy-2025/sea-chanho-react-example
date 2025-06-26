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
import Box from '@mui/material/Box';
import ClickButton from './ClickButton';
import BasicPopover from './BasicPopover';
import BasicModal from './BasicModal';
import StateTextFields from './StateTextFields';


// import characters from './protagonists.json'

function App() {
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(exercises);

  function handleChange(e) {
    let newSearch = e.target.value;
    let temp = result
    temp = exercises.filter((exercise) => exercise.title.includes(newSearch) || exercise.description.includes(newSearch))
    console.log(temp);
    setSearch(newSearch);
    setResult(temp);
  }

  return (

    <>

      <Container maxWidth="md" sx={{ mb: 4}}>
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

        <StateTextFields
          onChange={handleChange}
          search={search} 
        />
      </Container>



      <Container maxWidth="lg">
        <Grid container spacing={0} >
          {result.map(exercise => (
            <Grid display="flex" justifyContent="center" alignItems="center" size={4}>
              <DataCard
                title={exercise.title}
                imgURL={exercise.imgURL}
                description={exercise.description}

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
      <Container maxWidth="lg" sx={{display: "flex", alignContent: "center", justifyContent: "center", mt: "10%", pr: "lg"}}>
      <BasicModal />

      <ClickButton />

      <BasicPopover />
      </Container>
    </>
  )
}

export default App