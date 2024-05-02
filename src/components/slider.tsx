import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import { Button } from '@mui/material';

function SliderComponent() {
    // State to track the switch button state.
    const [buttonOn, setButtonOn] = useState(true);
    // State to track the value of slider.
    const [value, setValue] = React.useState<number>(1000);


    // Labels creation for slider.
    const marks = [
      {
          value: 0,
          label: '$5',
      },
      {
          value: 1000,
          label: '$10',
      },
      {
          value: 2000,
          label: '$15',
      },
      {
          value: 3000,
          label: '$20',
      },
      {
          value: 4000,
          label: '$25',
      },
      {
          value: 5000,
          label: '$30',
      },
  ];

  // Switch button styling

  const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#2caf9e' : '#2caf9e',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
            transition: 'background-color 0.3s ease-in-out', // Add transition effect.
        },
    }));

    function valuetext(value: number): string {
        return `${value}`;
    }

    // Updating the value on change in slider position.
    const handleChange = (event: ChangeEvent, newValue: number | number[]) => {
        setValue(newValue as number); // Since we are using a single-slider, we cast newValue to number.
        console.log(event);
    };
    
    // Custom attributes to slider track, rail and thumb.
    const CustomSlider = styled(Slider)({
        '& .MuiSlider-rail': {
            height: 6, // Adjust the height of the rail.
            borderRadius: 4, // Adjust border radius.
        },
        '& .MuiSlider-track': {
            height: 6, // Adjust the height of the track.
            borderRadius: 4, // Adjust the border radius for rounded corners.
            transition: 'background-color 0.3s ease-in-out', // Add transition effect.
        },
        '& .MuiSlider-thumb': {
            width: 16, // Adjust the width of the thumb.
            height: 16, // Adjust the height of the thumb.
            marginTop: 0, // Center the thumb vertically with the track.
            marginLeft: 0, // Center the thumb horizontally with the track.
        },
    });

    // Printing credit score to console.
    const handleClick = ()=> {
      const autoTopUpAmount = value === 0 ? 500 : value === 1000 ? 1200 : value === 2000 ? 1700 : value === 3000 ? 2500 : value === 4000 ? 3900 : value === 5500 ? 5000 : value;
      console.log(`Auto Top-up selected: ${autoTopUpAmount}`);
    }

    const creditValue = value === 0 ? 500 : value === 1000 ? 1200 : value === 2000 ? 1700 : value === 3000 ? 2500 : value === 4000 ? 3900 : value === 5500 ? 5000 : value;

    return (
        <div className='h-screen w-screen flex justify-center items-center p-2'>
            <div className={`border-2 overflow-hidden sm:w-[600px] md:w-[600px] ${buttonOn ? "h-[300px] sm:h-[260px]" : "h-[100px]"} rounded-3xl p-8`} style={{ transition: 'height 0.2s ease-in-out' }}>
                {/* heading */}
                <div className='flex items-center gap-2'>
                    <Typography variant="h6" style={{ fontSize: '19px' }}>
                        Setup Auto Top-up
                    </Typography>
                    <AntSwitch 
                        defaultChecked={buttonOn} 
                        inputProps={{ 'aria-label': 'ant design' }} 
                        onChange={(event) => setButtonOn(event.target.checked)}
                    />
                </div>
                {/* desc */}
                {buttonOn && 
                  (<div>
                    <Typography variant="body2" style={{ fontSize: '12.5px' }} color="#898989">
                        Once the credit score goes below a minimum threshold <span className='text-[#9847ff] font-bold'>50</span>, we will auto-purchase <span className='text-[#9847ff] font-bold'>{creditValue}</span> credits and add them to your account. 
                        <a className='underline' href="https://github.com/rxjans">Learn more.</a>
                    </Typography>
                </div>)
                }
                {/* slider */}
                {/* Conditionally render the slider based on the switch button state */}
                {buttonOn && (
                    <div className='flex justify-center mt-3'>
                        <div style={{ width: '100%', position: 'relative' }}>
                            <CustomSlider
                                aria-label="credits"
                                defaultValue={1000}
                                getAriaValueText={valuetext}
                                step={1000}
                                marks={marks}
                                min={0}
                                max={5500}
                                value={value}
                                onChange={handleChange}
                                sx={{
                                    '& .MuiSlider-mark': {
                                        width: '0px', // Adjust the width of the marks
                                        height: '0px', // Adjust the height of the marks
                                    },
                                    '& .MuiSlider-markLabel': {
                                        fontSize: '11px', // Change the font size of the label
                                        fontWeight: 'bold', // Change the font weight of the label
                                        marginLeft: '5px'
                                    },
                                    '& .MuiSlider-thumb': {
                                        width: 18 , // Set the width of the thumb
                                        height: 18, // Set the height of the thumb
                                        borderRadius: '50%', // Make the thumb circular
                                        backgroundColor: 'transparent', // Make the background of the thumb transparent
                                        boxShadow: '0 0 19px 1px #9847ff', // Add a glow effect
                                        border: '5px solid #9847ff', // Add a border with white color
                                        backgroundImage: 'radial-gradient( white, white)', // Add a radial gradient for the thumb
                                    },
                                    '& .MuiSlider-track': {
                                        borderRadius: '10px', // Round the edges of the track
                                    },
                                    color: '#9847ff', // Slider track color
                                    '& .MuiSlider-rail': {
                                        color: 'gray', // Rail color
                                    },
                                }}
                            />
                            {/* Render labels only if the switch button is on */}
                            <Typography className='flex flex-col sm:flex-row gap-0.5' style={{ fontSize: '10px', fontWeight: 'bolder', color: '#898990' }} sx={{ position: 'absolute', bottom: '0px', left: '-1px',lineHeight: '10px' ,'@media (max-width: 640px)': { bottom: '-10px' } }}>
                                <p>500</p> <p>credits</p>
                            </Typography>
                            <Typography className='flex flex-col sm:flex-row gap-0.5' style={{ fontSize: '10px', fontWeight: 'bolder', color: '#898990' }} sx={{ position: 'absolute', bottom: '0px', left: 'calc(23% - 32px)',lineHeight: '10px' ,'@media (max-width: 640px)': { bottom: '-10px' },'@media (max-width: 500px)': { bottom: '-10px', left: 'calc(23% - 20px)' } }}>
                            <p>1200</p> <p>credits</p>
                            </Typography>
                            <Typography className='flex flex-col sm:flex-row gap-0.5' style={{ fontSize: '10px', fontWeight: 'bolder', color: '#898990' }} sx={{ position: 'absolute', bottom: '0px', left: 'calc(40% - 25px)',lineHeight: '10px' ,'@media (max-width: 640px)': { bottom: '-10px' },'@media (max-width: 500px)': { bottom: '-10px', left: 'calc(40% - 16px)' } }}>
                            <p>1700</p> <p>credits</p>
                            </Typography>
                            <Typography className='flex flex-col sm:flex-row gap-0.5' style={{ fontSize: '10px', fontWeight: 'bolder', color: '#898990' }} sx={{ position: 'absolute', bottom: '0px', left: 'calc(59% - 29px)',lineHeight: '10px' ,'@media (max-width: 640px)': { bottom: '-10px' },'@media (max-width: 500px)': { bottom: '-10px', left: 'calc(59% - 18px)' } }}>
                            <p>2500</p> <p>credits</p>
                            </Typography>
                            <Typography className='flex flex-col sm:flex-row gap-0.5' style={{ fontSize: '10px', fontWeight: 'bolder', color: '#898990' }} sx={{ position: 'absolute', bottom: '0px', left: 'calc(78% - 34px)',lineHeight: '10px' ,'@media (max-width: 640px)': { bottom: '-10px' },'@media (max-width: 500px)': { bottom: '-10px', left: 'calc(78% - 20px)' } }}>
                            <p>3900</p> <p>credits</p>
                            </Typography>
                            <Typography className='flex flex-col sm:flex-row gap-0.5' style={{ fontSize: '10px', fontWeight: 'bolder', color: '#898990' }} sx={{ position: 'absolute', bottom: '0px', left: 'calc(100% - 58px)',lineHeight: '10px' ,'@media (max-width: 640px)': { bottom: '-10px', left: 'calc(100% - 49px)' },'@media (max-width: 500px)': { bottom: '-10px', left: 'calc(100% - 32px)' } }}>
                            <p>5000</p> <p>credits</p>
                            </Typography>
                        </div>
                    </div>
                )}
                {/* button */}
                <div style={{ transition: 'opacity 0.3s ease-in-out' }}>
                    {/* Show button only if the switch button is on */}
                    {buttonOn && (
                        <Button 
                            onClick={handleClick}
                            sx={{ 
                                backgroundColor: '#9847ff', 
                                color: 'white', 
                                width: '150px', 
                                fontSize: '9.2px', 
                                marginTop: '30px',
                                '@media (max-width: 600px)': {
                                  marginTop: '30px', // Adjusted top margin for smaller devices
                              },
                              '&:hover': { // This removes hover styles
                                backgroundColor: '#9847ff', // Set background color to same as normal state
                                color: 'white', // Set text color to same as normal state
                              },
                            }}
                        >
                            Confirm Auto-Purchase
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SliderComponent;