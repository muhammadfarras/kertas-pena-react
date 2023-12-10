import React from "react"
import { Accordion,AccordionDetails,AccordionSummary,Typography } from '@mui/material';

function SapaParentComponent(props){
    return (
        <>
        <Accordion>
            <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography><b>Accordion 1</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Selamat {props.waktu}
                    <NamaComponent name={props.name}/>
                </Typography>
            </AccordionDetails>

            
        </Accordion>
            
        </>
    )
}

function NamaComponent(props){
    return (
        <>
            dan selamat datang {props.name}
        </>
    )
}

export default SapaParentComponent