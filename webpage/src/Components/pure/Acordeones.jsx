import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { temas } from '../../models/Temas';

import {Link} from 'react-router-dom'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.dark}`,
  '&:not(:last-child)': {
    borderBottom: 0,

  },
  '&:before': {
    display: 'none',
  },'background':'#EDDFB3','color': '#000'
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(117, 155, 255, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Acordeones() {
  //todo iterar sobre el archivo externp 'temas' e ir devolviendo un acordeones


  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  //todo agregar atributo path al objeto de los temas
  return (



    <div>
      {temas.map(tema=>{

        return(
          <Accordion expanded={expanded === tema.panel} onChange={handleChange(tema.panel)}>
        <AccordionSummary aria-controls="panel1d-content"  id="panel1d-header">
          <Typography>{tema.tema}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            {tema.descripcion}
          </Typography>

          <Link to={tema.panel} >Ver video</Link>

        </AccordionDetails>
      </Accordion>
        )
      })}
    </div>
  );
}
