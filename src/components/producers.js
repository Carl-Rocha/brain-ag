import List from './list';
import { Typography, Container, Box ,Button} from '@mui/material';
import React from "react"
import { useSelector} from "react-redux"
import { useNavigate} from 'react-router-dom'


const Producers = () => {
    const { producer } = useSelector(state => state)
    const navigate = useNavigate();
    
    return <Container component="main" maxWidth="md">
        <Typography component="h1" variant="h5" align="center"> Produtores Cadastrados</Typography>
        { producer?.map((item, index) => (<Box key={`producer-${index}`}>
            <List item={item}/>
            </Box>))}
            <Button
              
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick= {() => navigate("/")}
            >
            Adicionar Produtor
            </Button>
        </Container>
        
    }

    export default Producers
