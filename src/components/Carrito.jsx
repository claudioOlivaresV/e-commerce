import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StepperThree from './StepperThree';
import StepperTwo from './StepperTwo';
import StepperOne from './StepperOne';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';






function getSteps() {
  return ['Productos', 'Tus Datos', 'Pago'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <StepperOne />;
    case 1:
      return <StepperTwo />;
    case 2:
      return <StepperThree />;
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  

  return (
    <div className="container margenNavbar mb-5 ">

<Breadcrumbs aria-label="breadcrumb0" className="mt-5">

     
<Link color="inherit" to="/" >
   <HomeIcon />   Home
 </Link>

 <Link color="inherit"  >
     Carrito de compra
 </Link>


</Breadcrumbs>
  
    
    <div >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <h3 className="text-left mb-4"> 
     <ShoppingBasketIcon/> Mi compra</h3>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography >All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography >{getStepContent(activeStep)}</Typography>

            
            <div className="my-3">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
               
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>

    </div>
  );
}
