import List from './list';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from "react"
import { useSelector} from "react-redux"



const Producers = () => {
    const { producer } = useSelector(state => state)
    return <Container component="main" maxWidth="md">
        
        <Typography component="h1" variant="h5" align="center"> Produtores Cadastrados</Typography>
        { producer?.map((item, index) => (<Box key={`producer-${index}`}>
            <List item={item}/>
            </Box>))}
        </Container>
        
    }

    export default Producers
