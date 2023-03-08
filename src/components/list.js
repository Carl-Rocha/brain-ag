import React, { useRef } from "react"
import { useDispatch } from "react-redux"
import { removeProducer,updateProducer } from "../redux/actions/producer"
import { Typography,ListItem,ListItemText,TextField,Box  } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
 
const List = ({item}) => {
    const dispatch = useDispatch()
    const cpf = useRef()
    const name = useRef()
    const city = useRef()
    const state = useRef()
    const farmTotal = useRef()
    const arableLand = useRef()
    const vegetationArea = useRef()
    const crops = useRef()
    const handleRemove =(cpf) => {
        dispatch(removeProducer(
            cpf
        )) 
    } 
    const handleUpdate =(id) => {
        dispatch(updateProducer(
            id,
            {
                cpf:cpf.current.value,
                name:name.current.value,
                city:city.current.value,
                state:state.current.value, 
                farmTotal:farmTotal.current.value,
                arableLand:arableLand.current.value, 
                vegetationArea:vegetationArea.current.value,
                crops:crops.current.value
            }
            
        )) 
    } 
    return (

        <ListItem
  
      secondaryAction={
        <>
          <ClearIcon onClick={() => handleRemove(item.cpf)} aria-label="delete">
            <ClearIcon />
          </ClearIcon>
          <EditIcon onClick={() => handleUpdate(item)} aria-label="edit">
            <EditIcon />
          </EditIcon>
        </>
      }
    >
      <ListItemText
        primary={item.name}
        secondary={
          <>
            <Box component="form" sx={{ '& > *': { m: 1 } }}>
      <Typography variant="h6">Editar Produtor</Typography>
      <TextField
        label="Nome"
        inputRef={name}
        defaultValue={item.name}
        variant="filled"
        size="small"
      />
      <TextField
        label="CPF"
        inputRef={cpf}
        defaultValue={item.cpf}
        variant="filled"
        size="small"
      />
      <TextField
        label="Cidade"
        inputRef={city}
        defaultValue={item.city}
        variant="filled"
        size="small"
      />
      <TextField
        label="Estado"
        inputRef={state}
        defaultValue={item.state}
        variant="filled"
        size="small"
      />
      <TextField
        label="Fazenda"
        inputRef={farmTotal}
        defaultValue={item.farmTotal}
        variant="filled"
        size="small"
      />
      <TextField
        label="Área"
        inputRef={arableLand}
        defaultValue={item.arableLand}
        variant="filled"
        size="small"
      />
      <TextField
        label="Área de Vegetação"
        inputRef={vegetationArea}
        defaultValue={item.vegetationArea}
        variant="filled"
        size="small"
      />
      <TextField
        label="Culturas"
        inputRef={crops}
        defaultValue={item.crops}
        variant="filled"
        size="small"
      />
      
    </Box>
          </>
        }
      />
    </ListItem>
      

        
      );
    
} 

export default List
