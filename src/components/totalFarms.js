import React from 'react';
import { useSelector} from "react-redux"
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


const Farms = () => {
    const { producer } = useSelector(state => state)
    const count = producer.length;
    return(
      <>
        <Box maxWidth="sm" display="flex" justifyContent="flex" color="text.secondary" >
          <Typography  component="p" variant="h4" align="center">Total de Fazendas</Typography>
          </Box>
          <Box maxWidth="md" display="flex" justifyContent="center" color="text.secondary" >
          <Typography component="p" variant="h4" align="center">{count}</Typography>
          </Box>
      </>

    ) 
  };

    export default Farms