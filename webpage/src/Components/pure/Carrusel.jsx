import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { steps } from '../../models/steps';


export default function Carrusel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Paper
        square
        elevation={1}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'transparent',
        }}
      >
        <Typography>Seccion de videos</Typography>
      </Paper>
    <Box sx={{ maxWidth: '100vw', flexGrow: 1, display: 'flex', margin:'auto' }}>

      <MobileStepper
        variant="none"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        style={{backgroundColor: 'transparent', borderRadius: '20px', flex:'1 1 auto'}}
        backButton={
          <Button fontSize="large" onClick={handleBack} disabled={activeStep === 0} >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight fontSize='large'/>
            ) : (
              <KeyboardArrowLeft />
            )}

          </Button>
        }
      />

      {/* {steps.map(step=>{
        return(
                  <Box sx={{ height: 255, maxWidth: 500, width: '100%', p: 2, flex: '3 1 auto' }}>
                    {step.description}
                </Box>
        )

      })} */}


      <Box sx={{ height: 255, maxWidth: 500, width: '100%', p: 2, flex: '3 1 auto' }}>
                    {steps[activeStep].video}
     </Box>
     <Box sx={{ height: 255, maxWidth: 500, width: '100%', p: 2, flex: '3 1 auto' }}>
                    {steps[activeStep].video}
     </Box>



      <MobileStepper
        variant="none"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        style={{backgroundColor: 'transparent', borderRadius: '10px' , flex:'1 1 auto'}}
        nextButton={
          <Button
            size="Large"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >

            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
              /* <i className="bi bi-arrow-bar-right"></i> */
              /* <i class="bi bi-arrow-right-circle"></i> */
            ) : (
              <KeyboardArrowRight />
                /* <i class="bi bi-arrow-bar-left"></i> */
              /* <i class="bi bi-arrow-right-circle"></i> */
            )}
          </Button>
        }
      />
    </Box>

    <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        style={{backgroundColor: 'transparent', borderRadius: '10px', justifyContent:'center'}}
      />

    </>
  );
}
