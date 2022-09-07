import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import "../src/components/hollow/style.scss"
import "../src/components/splice/style.scss"
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function App() {
  const [currentEffect, setCurrentEffect] = React.useState("")
  const [hollow, setHollow] = React.useState({
    thickness: 50
  });
  const [splice, setSplice] = React.useState({
    thickness: 50,
    offset: 50,
    direction: -45,
    color: "rgb(128, 128, 128)"
  })

  const toRadians = (angleDegrees) => {
    return angleDegrees * (Math.PI / 180);
  };


  return (
    <div style={{ margin: 100}}>
      <Stack sx={{ marginBottom: 5 }} direction="row" spacing={5}>
        <Button variant="contained" color='error' onClick={() => setCurrentEffect("")}>Start Over</Button>
        <Button variant="contained" onClick={() => setCurrentEffect("hollow")}>Hollow</Button>
        <Button variant="contained" onClick={() => setCurrentEffect("splice")}>Splice</Button>
      </Stack>

      {currentEffect === "hollow" && 
      <TextField 
      id="thickness" 
      label="Thickness" 
      variant="standard" 
      value={hollow.thickness} 
      onChange={(e) => setHollow({...hollow, thickness: e.target.value})}
      />
      }

      {currentEffect === "splice" && 
      <Box>
        <TextField 
        id="thickness" 
        label="Thickness" 
        variant="standard" 
        value={splice.thickness} 
        onChange={(e) => setSplice({...splice, thickness: e.target.value})}
        />
        <TextField 
        sx={{ marginLeft: 5 }}
        id="offset" 
        label="Offset" 
        variant="standard" 
        value={splice.offset} 
        onChange={(e) => setSplice({...splice, offset: e.target.value})}
        />
        <TextField 
        sx={{ marginLeft: 5 }}
        id="direction" 
        label="Direction" 
        variant="standard" 
        value={splice.direction} 
        onChange={(e) => setSplice({...splice, direction: e.target.value})}
        />
        <FormControl variant="standard" sx={{ marginLeft: 5 }}>
          <InputLabel id="label-splice-color">Color</InputLabel>
          <Select
            labelId="label-splice-color"
            id="select-splice-color"
            value={splice.color}
            label="Color"
            onChange={(e) => setSplice({...splice, color: e.target.value})}
          >
            <MenuItem value={"rgb(128, 128, 128)"}>Gray</MenuItem>
            <MenuItem value={"rgb(255, 0, 0)"}>Red</MenuItem>
            <MenuItem value={"rgb(0, 255, 0)"}>Green</MenuItem>
            <MenuItem value={"rgb(0, 0, 255)"}>Blue</MenuItem>
          </Select>
        </FormControl>
      </Box>
      }

      <div style={{ margin: '120px 0px 0px 550px' }}>
        <div className={currentEffect}>
          <div 
          style={ 
          currentEffect ? 
            currentEffect === "hollow" ? 
            { WebkitTextStroke: ((hollow.thickness - 1) * 0.075 + 0.825).toFixed(3) } 
            : 
            currentEffect === "splice" ? 
            { 
              WebkitTextStroke: ((splice.thickness - 1) * 0.075 + 0.825).toFixed(3), 
              textShadow: `${((splice.offset * 0.15) * -(Math.sin(toRadians(splice.direction)))).toFixed(7)}px ${((splice.offset * 0.15) * Math.cos(toRadians(splice.direction))).toFixed(7)}px 0px ${splice.color}`
            } 
            : {} 
          : {} 
          }
          >
            <h1>Thank kiu nhe !!</h1>      
          </div>
        </div>
      </div>

    </div>
  )
};

export default App;
