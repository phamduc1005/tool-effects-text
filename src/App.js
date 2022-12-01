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
	const [fontSize, setFontSize] = React.useState(70)
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
	const [background, setBackground] = React.useState({
		roundness: 50,
		spread: 20,
		transparency: 100,
		color: "green"
	})

	const handleLimit = (min, max, value) => {
		if (value > max) {
			return max
		} else if (value < min) {
			return min
		} else {
			return value
		}
	}

	const toRadians = (angleDegrees) => {
		return angleDegrees * (Math.PI / 180);
	};

	const handleCalculateWithFontSize = (value) => {
		if (fontSize < 10) {
			return value;
		}
		const newValue = ((value / 9) * (fontSize - 9)) + value
		return newValue;
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
				<Button variant="contained" onClick={() => setCurrentEffect("background")}>Background</Button>
				<TextField 
				id="fontsize" 
				type="number"
				label="Fontsize" 
				variant="standard" 
				value={fontSize} 
				onChange={(e) => setFontSize(Number(e.target.value))}
				/>
			</Stack>

			{currentEffect === "hollow" && 
			<TextField 
			id="thickness" 
			type={"number"}
			label="Thickness" 
			variant="standard" 
			value={hollow.thickness} 
			onChange={(e) => setHollow({...hollow, thickness: handleLimit(1, 100, e.target.value)})}
			/>
			}

			{currentEffect === "splice" && 
			<Box>
				<TextField 
				id="thickness" 
				type={"number"}
				label="Thickness" 
				variant="standard" 
				value={splice.thickness} 
				onChange={(e) => setSplice({...splice, thickness: handleLimit(1, 100, e.target.value)})}
				/>
				<TextField 
				sx={{ marginLeft: 5 }}
				id="offset" 
				type={"number"}
				label="Offset" 
				variant="standard" 
				value={splice.offset} 
				onChange={(e) => setSplice({...splice, offset: handleLimit(0, 100, e.target.value)})}
				/>
				<TextField 
				sx={{ marginLeft: 5 }}
				id="direction" 
				type={"number"}
				label="Direction" 
				variant="standard" 
				value={splice.direction} 
				onChange={(e) => setSplice({...splice, direction: handleLimit(-180, 180, e.target.value)})}
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
				type={"number"}
				label="Offset" 
				variant="standard" 
				value={echo.offset} 
				onChange={(e) => setEcho({...echo, offset: handleLimit(1, 100, e.target.value)})}
				/>
                <TextField 
				sx={{ marginLeft: 5 }}
				id="direction" 
				type={"number"}
				label="Direction" 
				variant="standard" 
				value={echo.direction} 
				onChange={(e) => setEcho({...echo, direction: handleLimit(-180, 180, e.target.value)})}
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
			type={"number"}
            label="intensity" 
            variant="standard" 
            value={lift.intensity} 
            onChange={(e) => setLift({...lift, intensity: handleLimit(0, 100, e.target.value)})}
            />
            }

			{currentEffect === "shadow" &&
			<Box>
				<TextField 
				id="offset" 
				type={"number"}
				label="Offset" 
				variant="standard" 
				value={shadow.offset} 
				onChange={(e) => setShadow({...shadow, offset: handleLimit(0, 100, e.target.value)})}
				/>
				<TextField 
				sx={{ marginLeft: 5 }}
				id="direction" 
				type={"number"}
				label="Direction" 
				variant="standard" 
				value={shadow.direction} 
				onChange={(e) => setShadow({...shadow, direction: handleLimit(-180, 180, e.target.value)})}
				/>
				<TextField 
				sx={{ marginLeft: 5 }}
				id="blur" 
				type={"number"}
				label="Blur" 
				variant="standard" 
				value={shadow.blur} 
				onChange={(e) => setShadow({...shadow, blur: handleLimit(0, 100, e.target.value)})}
				/>
				<TextField 
				sx={{ marginLeft: 5 }}
				id="transparency" 
				type={"number"}
				label="Transparency" 
				variant="standard" 
				value={shadow.transparency} 
				onChange={(e) => setShadow({...shadow, transparency: handleLimit(0, 100, e.target.value)})}
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
				type={"number"}
				label="Offset" 
				variant="standard" 
				value={glitch.offset} 
				onChange={(e) => setGlitch({...glitch, offset: handleLimit(1, 100, e.target.value)})}
				/>
				<TextField 
				sx={{ marginLeft: 5 }}
				id="direction" 
				type={"number"}
				label="Direction" 
				variant="standard" 
				value={glitch.direction} 
				onChange={(e) => setGlitch({...glitch, direction: handleLimit(-180, 180, e.target.value)})}
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
						<MenuItem value={"rgb(0, 255, 0)"}>Green</MenuItem>
						<MenuItem value={"rgb(0, 0, 255)"}>Blue</MenuItem>
					</Select>
				</FormControl>
			</Box>
			}

			{currentEffect === "neon" &&
			<TextField 
			id="intensity" 
			type={"number"}
			label="Intensity" 
			variant="standard" 
			value={neon.intensity} 
			onChange={(e) => setNeon({...neon, intensity: handleLimit(1, 100, e.target.value)})}
			/>
			}

			{currentEffect === "background" &&
			<Box>
				<TextField 
				id="roundness" 
				type={"number"}
				label="Roundness" 
				variant="standard" 
				value={background.roundness} 
				onChange={(e) => setBackground({...background, roundness: handleLimit(0, 100, e.target.value)})}
				/>
				<TextField 
				sx={{ marginLeft: 5 }}
				id="spread" 
				type={"number"}
				label="Spread" 
				variant="standard" 
				value={background.spread} 
				onChange={(e) => setBackground({...background, spread: handleLimit(0, 100, e.target.value)})}
				/>
				<TextField 
				sx={{ marginLeft: 5 }}
				id="transparency" 
				type={"number"}
				label="Transparency" 
				variant="standard" 
				value={background.transparency} 
				onChange={(e) => setBackground({...background, transparency: handleLimit(0, 100, e.target.value)})}
				/>
				<FormControl variant="standard" sx={{ marginLeft: 5 }}>
					<InputLabel id="label-background-color">Color</InputLabel>
					<Select
						labelId="label-background-color"
						id="select-background-color"
						value={background.color}
						label="Color"
						onChange={(e) => setBackground({...background, color: e.target.value})}
					>
						<MenuItem value={"pink"}>Pink</MenuItem>
						<MenuItem value={"red"}>Red</MenuItem>
						<MenuItem value={"green"}>Green</MenuItem>
						<MenuItem value={"blue"}>Blue</MenuItem>
					</Select>
				</FormControl>
			</Box>
			}

			<div style={{ margin: '120px 0px 0px 550px' }}>
				<div className={currentEffect}>
					{/* { console.log(lift.intensity / 100) } */}
					<div 
					style={ 
					currentEffect ? 
						currentEffect === "hollow" ? 
						{ WebkitTextStroke: handleCalculateWithFontSize((hollow.thickness - 1) * 0.0075 + 0.0825) } 
						: 
						currentEffect === "splice" ? 
						{ 
						    WebkitTextStroke: handleCalculateWithFontSize((splice.thickness - 1) * 0.0075 + 0.0825), 
						    textShadow: `${handleCalculateWithFontSize(splice.offset * 0.015) * -(Math.sin(toRadians(splice.direction)))}px 
										${handleCalculateWithFontSize(splice.offset * 0.015) * (Math.cos(toRadians(splice.direction)))}px 
										0px
										${splice.color}`
						} 
                        : 
                        currentEffect === "echo" ?
                        { 
                            textShadow: `${handleCalculateWithFontSize(echo.offset * 0.015) * -(Math.sin(toRadians(echo.direction)))}px 
										${handleCalculateWithFontSize(echo.offset * 0.015) * Math.cos(toRadians(echo.direction))}px 
										0px 
										${echo.color}, 0.5), 
                                        ${(handleCalculateWithFontSize(echo.offset * 0.015) * -(Math.sin(toRadians(echo.direction))))* 2}px 
										${(handleCalculateWithFontSize(echo.offset * 0.015) * Math.cos(toRadians(echo.direction)))* 2}px 
										0px 
										${echo.color}, 0.3)` 
                        }
                        :
                        currentEffect === "lift" ?
                        {
                            textShadow: `0px 
										${handleCalculateWithFontSize(0.45)}px 
										${handleCalculateWithFontSize(lift.intensity * 0.02925 + 0.45)}px 
										rgba(0, 0, 0, ${(lift.intensity * 0.55 + 5) / 100})`
                        }
						:
						currentEffect === "shadow" ?
						{
							textShadow: `${handleCalculateWithFontSize(shadow.offset * 0.015) * -(Math.sin(toRadians(shadow.direction)))}px 
										${handleCalculateWithFontSize(shadow.offset * 0.015) * Math.cos(toRadians(shadow.direction))}px 
										${handleCalculateWithFontSize(shadow.blur * 0.015)}px 
										${shadow.color}, ${shadow.transparency / 100})`
						}
						:
						currentEffect === "glitch" ?
						{
							textShadow: `${handleCalculateWithFontSize(glitch.offset * 0.0075) * -(Math.sin(toRadians(glitch.direction)))}px 
										${handleCalculateWithFontSize(glitch.offset * 0.0075) * Math.cos(toRadians(glitch.direction))}px 
										0px 
										rgb(0, 255, 255),
										${handleCalculateWithFontSize(glitch.offset * 0.0075) * Math.sin(toRadians(glitch.direction))}px 
										${handleCalculateWithFontSize(glitch.offset * 0.0075) * -(Math.cos(toRadians(glitch.direction)))}px 
										0px 
										${glitch.color}`
						}
						:
						currentEffect === "neon" ?
						{
							filter: `drop-shadow(rgba(24, 40, 83, 0.95) 
									0px 
									0px 
									${handleCalculateWithFontSize((neon.intensity - 1) * 0.000904 + 0.150901)}px) 
									drop-shadow(rgba(47, 56, 83, 0.75) 
									0px 
									0px 
									${handleCalculateWithFontSize((neon.intensity - 1) * 0.00452 + 0.754507)}px) 
									drop-shadow(rgba(47, 56, 83, 0.44) 
									0px 
									0px 
									${handleCalculateWithFontSize((neon.intensity - 1) * 0.01356 + 2.26352)}px)`,
							color: `rgb(${neon.intensity * 2.02 + 53}, 
									${neon.intensity * 1.97 + 58}, 
									${neon.intensity * 1.8 + 75})`
						}
						:
						currentEffect === "background" ?
						{
							display: `table`,
							color: `#ffffff`,
							borderRadius: `${background.roundness}px`,
							padding: `${background.spread}px`,
							opacity: background.transparency / 100,
							backgroundColor: background.color
						}
						: {} 
					: {} 
					}
					>
						<p style={{ fontSize: fontSize }}>Thank kiu nhe !!</p>      
					</div>
				</div>
			</div>

		</div>
	)
};

export default App;
