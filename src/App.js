import React from 'react';
import { Container } from '@mui/material';
import SatuProps from './PropsAndState/SatuProps'


function App() {
  return (
    <>
        <Container maxWidth="sm">


            <h2>Kertas Pena React</h2>
            <small><i>Ini menggunakan fragment using only tag</i></small>

            <hr></hr>
            
            <SatuProps name='Muhammad Farras Maruf' waktu='Pagi'/>
        </Container>
    </>
  );
}

export default App;
