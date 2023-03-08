import React from "react"
import Form from "../../components/form" 
import Container from '@mui/material/Container';
import Producers from "../../components/producers";
 

const Producer = () => (
    <Container component="main" maxWidth="xl" sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
        display:'inline-flex'
      }}>
        <Form />
        <Producers />
    </Container>
)

export default Producer
