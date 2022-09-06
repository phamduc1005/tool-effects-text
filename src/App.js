import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "../src/components/hollow/style.scss"
import TextField from '@mui/material/TextField';

function App() {
  const [currentEffect, setCurrentEffect] = React.useState("")

  const [thickness, setThickness] = React.useState(50)


  return (
    <div style={{ margin: 100}}>
      <Stack sx={{ marginBottom: 5 }} direction="row" spacing={5}>
        <Button variant="contained" onClick={() => setCurrentEffect("hollow")}>Hollow</Button>
        <Button variant="contained" onClick={() => setCurrentEffect("splice")}>Splice</Button>
      </Stack>

      {currentEffect === "hollow" && 
      <TextField 
      id="thickness" 
      label="Thickness" 
      variant="standard" 
      value={thickness} 
      onChange={(e) => setThickness(e.target.value)}
      />
      }

      <div style={{ margin: '120px 0px 0px 550px' }}>
        <div className={currentEffect}>
          <div 
          style={ currentEffect ? 
          currentEffect === "hollow" ? { WebkitTextStroke: thickness/18.661242466 } : {} 
          : {} 
          }
          >
            <h1>Thank kiu nhe !!</h1>      
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
