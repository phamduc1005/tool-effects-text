import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "../src/components/hollow/style.scss"
import "../src/components/splice/style.scss"
import "../src/components/echo/style.scss"
import "../src/components/lift/style.scss"
import "../src/components/shadow/style.scss"
import "../src/components/glitch/style.scss"
import "../src/components/neon/style.scss"

const App = () => {
	const [currentEffect, setCurrentEffect] = React.useState("");
	const [hollow, setHollow] = React.useState({
		thickness: 50
	});
	const [splice, setSplice] = React.useState({
		thickness: 50,
		offset: 50,
		direction: -45,
		color: "rgb(128, 128, 128)"
	});
    const [echo, setEcho] = React.useState({
        offset: 50,
        direction: -45,
        color: "rgb(128, 128, 128"
    });
    const [lift, setLift] = React.useState({
        intensity: 60
    });
	const [shadow, setShadow] = React.useState({
		offset: 50,
		direction: -45,
		blur: 0,
		transparency: 40,
		color: "rgb(128, 128, 128"
	});
	const [glitch, setGlitch] = React.useState({
		offset: 100,
		direction: 90,
		color: "rgb(255, 0, 255)"
	});
	const [neon, setNeon] = React.useState({
		intensity: 50
	});

	const toRadians = (angleDegrees) => {
		return angleDegrees * (Math.PI / 180);
	};

	
	return (
		<div style={{ margin: 100}}>
			<Stack sx={{ marginBottom: 5 }} direction="row" spacing={5}>
				<Button variant="contained" color='error' onClick={() => setCurrentEffect("")}>Start Over</Button>
				<Button variant="contained" onClick={() => setCurrentEffect("hollow")}>Hollow</Button>
				<Button variant="contained" onClick={() => setCurrentEffect("splice")}>Splice</Button>
                <Button variant="contained" onClick={() => setCurrentEffect("echo")}>Echo</Button>
                <Button variant="contained" onClick={() => setCurrentEffect("lift")}>Lift</Button>
				<Button variant="contained" onClick={() => setCurrentEffect("shadow")}>Shadow</Button>
				<Button variant="contained" onClick={() => setCurrentEffect("glitch")}>Glitch</Button>
				<Button variant="contained" onClick={() => setCurrentEffect("neon")}>Neon</Button>
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

            {currentEffect === "echo" &&
            <Box>
                <TextField 
				id="offset" 
				label="Offset" 
				variant="standard" 
				value={echo.offset} 
				onChange={(e) => setEcho({...echo, offset: e.target.value})}
				/>
                <TextField 
				sx={{ marginLeft: 5 }}
				id="direction" 
				label="Direction" 
				variant="standard" 
				value={echo.direction} 
				onChange={(e) => setEcho({...echo, direction: e.target.value})}
				/>
                <FormControl variant="standard" sx={{ marginLeft: 5 }}>
                    <InputLabel id="label-echo-color">Color</InputLabel>
                    <Select
                        labelId="label-echo-color"
                        id="select-echo-color"
                        value={echo.color}
                        label="Color"
                        onChange={(e) => setEcho({...echo, color: e.target.value})}
                    >
                        <MenuItem value={"rgb(128, 128, 128"}>Gray</MenuItem>
                        <MenuItem value={"rgb(255, 0, 0"}>Red</MenuItem>
                        <MenuItem value={"rgb(0, 255, 0"}>Green</MenuItem>
                        <MenuItem value={"rgb(0, 0, 255"}>Blue</MenuItem>
                    </Select>
				</FormControl>
            </Box>
            }

            {currentEffect === "lift" &&
            <TextField 
            id="intensity" 
            label="intensity" 
            variant="standard" 
            value={lift.intensity} 
            onChange={(e) => setLift({...lift, intensity: e.target.value})}
            />
            }

			{currentEffect === "shadow" &&
			<Box>
				<TextField 
				id="offset" 
				label="Offset" 
				variant="standard" 
				value={shadow.offset} 
				onChange={(e) => setShadow({...shadow, offset: e.target.value})}
				/>
				<TextField 
				sx={{ marginLeft: 5 }}
				id="direction" 
				label="Direction" 
				variant="standard" 
				value={shadow.direction} 
				onChange={(e) => setShadow({...shadow, direction: e.target.value})}
				/>
				<TextField 
				sx={{ marginLeft: 5 }}
				id="blur" 
				label="Blur" 
				variant="standard" 
				value={shadow.blur} 
				onChange={(e) => setShadow({...shadow, blur: e.target.value})}
				/>
				<TextField 
				sx={{ marginLeft: 5 }}
				id="transparency" 
				label="Transparency" 
				variant="standard" 
				value={shadow.transparency} 
				onChange={(e) => setShadow({...shadow, transparency: e.target.value})}
				/>
				<FormControl variant="standard" sx={{ marginLeft: 5 }}>
					<InputLabel id="label-shadow-color">Color</InputLabel>
					<Select
						labelId="label-shadow-color"
						id="select-shadow-color"
						value={shadow.color}
						label="Color"
						onChange={(e) => setShadow({...shadow, color: e.target.value})}
					>
						<MenuItem value={"rgb(128, 128, 128"}>Gray</MenuItem>
						<MenuItem value={"rgb(255, 0, 0"}>Red</MenuItem>
						<MenuItem value={"rgb(0, 255, 0"}>Green</MenuItem>
						<MenuItem value={"rgb(0, 0, 255"}>Blue</MenuItem>
					</Select>
				</FormControl>
			</Box>
			}

			{currentEffect === "glitch" &&
			<Box>
				<TextField 
				id="offset" 
				label="Offset" 
				variant="standard" 
				value={glitch.offset} 
				onChange={(e) => setGlitch({...glitch, offset: e.target.value})}
				/>
				<TextField 
				sx={{ marginLeft: 5 }}
				id="direction" 
				label="Direction" 
				variant="standard" 
				value={glitch.direction} 
				onChange={(e) => setGlitch({...glitch, direction: e.target.value})}
				/>
				<FormControl variant="standard" sx={{ marginLeft: 5 }}>
					<InputLabel id="label-glitch-color">Color</InputLabel>
					<Select
						labelId="label-glitch-color"
						id="select-glitch-color"
						value={glitch.color}
						label="Color"
						onChange={(e) => setGlitch({...glitch, color: e.target.value})}
					>
						<MenuItem value={"rgb(255, 0, 255)"}>Pink</MenuItem>
						<MenuItem value={"rgb(255, 0, 0)"}>Red</MenuItem>
						<MenuItem value={"rgb(0, 255, 0"}>Green</MenuItem>
						<MenuItem value={"rgb(0, 0, 255"}>Blue</MenuItem>
					</Select>
				</FormControl>
			</Box>
			}

			{currentEffect === "neon" &&
			<TextField 
			id="intensity" 
			label="Intensity" 
			variant="standard" 
			value={neon.intensity} 
			onChange={(e) => setNeon({...neon, intensity: e.target.value})}
			/>
			}

			<div style={{ margin: '120px 0px 0px 550px' }}>
				<div className={currentEffect}>
					<div 
					style={ 
					currentEffect ? 
						currentEffect === "hollow" ? 
						{ WebkitTextStroke: (hollow.thickness - 1) * 0.075 + 0.825 } 
						: 
						currentEffect === "splice" ? 
						{ 
						    WebkitTextStroke: (splice.thickness - 1) * 0.075 + 0.825, 
						    textShadow: `${(splice.offset * 0.15) * -(Math.sin(toRadians(splice.direction)))}px ${(splice.offset * 0.15) * Math.cos(toRadians(splice.direction))}px 0px ${splice.color}`
						} 
                        : 
                        currentEffect === "echo" ?
                        { 
                            textShadow: `${(echo.offset * 0.15) * -(Math.sin(toRadians(echo.direction)))}px ${(echo.offset * 0.15) * Math.cos(toRadians(echo.direction))}px 0px ${echo.color}, 0.5), 
                                        ${((echo.offset * 0.15) * -(Math.sin(toRadians(echo.direction))))* 2}px ${((echo.offset * 0.15) * Math.cos(toRadians(echo.direction)))* 2}px 0px ${echo.color}, 0.3) ` 
                        }
                        :
                        currentEffect === "lift" ?
                        {
                            textShadow: `0px 4.5px ${lift.intensity * 0.2925 + 4.5}px rgba(0, 0, 0, ${lift.intensity / 100})`
                        }
						:
						currentEffect === "shadow" ?
						{
							textShadow: `${(shadow.offset * 0.15) * -(Math.sin(toRadians(shadow.direction)))}px ${(shadow.offset * 0.15) * Math.cos(toRadians(shadow.direction))}px ${shadow.blur * 0.15}px ${shadow.color}, ${shadow.transparency / 100})`
						}
						:
						currentEffect === "glitch" ?
						{
							textShadow: `${(glitch.offset * 0.075) * -(Math.sin(toRadians(glitch.direction)))}px ${(glitch.offset * 0.075) * Math.cos(toRadians(glitch.direction))}px 0px rgb(0, 255, 255),
										${(glitch.offset * 0.075) * Math.sin(toRadians(glitch.direction))}px ${(glitch.offset * 0.075) * -(Math.cos(toRadians(glitch.direction)))}px 0px ${glitch.color}`
						}
						:
						currentEffect === "neon" ?
						{
							filter: `drop-shadow(rgba(24, 40, 83, 0.95) 0px 0px ${neon.intensity * 0.0102599 + 1.50901}), drop-shadow(rgba(47, 56, 83, 0.75) 0px 0px ${neon.intensity * 0.0512993 + 7.54507}), drop-shadow(rgba(47, 56, 83, 0.44) 0px 0px ${neon.intensity * 0.153898 + 22.6352})`,
							color: `rgb(${neon.intensity * 2.02 + 53}, ${neon.intensity * 1.97 + 58}, ${neon.intensity * 1.8 + 75})`
						}
						: {} 
					: {} 
					}
					>
						<h1 style={{ fontSize: 50 }}>Thank kiu nhe !!</h1>      
					</div>
				</div>
			</div>

		</div>
	)
};

export default App;
