import React from "react"
import Container from '@mui/material/Container';
import Routes from './routes'

const App = () => {
  return (
  <Container component="main" maxWidth="xl" sx={{
    bgcolor: 'background.paper',
    boxShadow: 1,
    borderRadius: 2,
    p: 2,
    minWidth: 300,
    display:'inline-flex',
  }}>
  <Routes />
  
  </Container>
  )
} 


export default App;
