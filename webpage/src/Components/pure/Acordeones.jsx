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



    <section>
      {temas.map((tema,i)=>{

        return(
          <Accordion expanded={expanded === tema.panel} onChange={handleChange(tema.panel)} key={i}>
            <AccordionSummary aria-controls="panel1d-content"  id="panel1d-header">
              <Typography>{tema.tema}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography Typography>
                  {tema.descripcion}
                </Typography>
                  <Link to={`/ver/${tema.tema}`} >Ver video</Link>
              </AccordionDetails>
            </Accordion>
        )
      })}

      <Accordion expanded={true} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content"  id="panel5d-header">
          <Typography>Tipo de voto</Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content"  id="panel6d-header">
          <Typography>Voto Nulo</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            texto
          </Typography>

          <Link to={'/'} >Ver video</Link>

        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content"  id="panel7d-header">
          <Typography>Voto en blanco</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            texto
          </Typography>

          <Link to={'/'}>Ver video</Link>

        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content"  id="panel8d-header">
          <Typography>Voto Recorrido</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            texto
          </Typography>

          <Link to={'/'}>Ver video</Link>

        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content"  id="panel9d-header">
          <Typography>Voto Impugnado</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            texto
          </Typography>

          <Link to={'/'}>Ver video</Link>

        </AccordionDetails>
      </Accordion>



        </AccordionDetails>
      </Accordion>


    </section>
  );
}
