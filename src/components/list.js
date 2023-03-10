import React, { useRef,useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { removeProducer,updateProducer } from "../redux/actions/producer"
import { ListItem,TextField,Box,InputAdornment,Grid  } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import InputMask from 'react-input-mask';
 
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
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
      name.current.value = item.name
      cpf.current.value = item.cpf
      city.current.value = item.city
      state.current.value = item.state
      farmTotal.current.value = item.farmTotal
      arableLand.current.value = item.arableLand
      vegetationArea.current.value = item.vegetationArea
      crops.current.value = item.crops
      

    }, [item])

    const handleRemove =(cpf) => {
      setEnabled(false)  
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
                crops:crops.current.value.toLowerCase()
            }
            
        )) 
    } 
    return (
      <>
      <Box>
       {item.name}
      </Box>
      <ListItem
  
      secondaryAction={
        <>
          <ClearIcon onClick={() => handleRemove(item.cpf)} aria-label="delete">
            <ClearIcon />
          </ClearIcon>
            {
              enabled ?
              <CheckIcon onClick={() => {
                setEnabled(false)
                handleUpdate(item.cpf)
              }} aria-label="edit">
              <CheckIcon />
            </CheckIcon>
              :
              <EditIcon onClick={() => setEnabled(true)} aria-label="edit">
              <EditIcon />
            </EditIcon>
            }
        </>
      }
    >
      
      <>
            <Grid container spacing={1} sx={{ display: 'flex', flexWrap: 'wrap' }}  >
            <Grid item xs={3}>
      <TextField
        disabled={!enabled}
        label="Nome"
        inputRef={name}
        variant="filled"
        size="small"
        
      />
      
      <TextField
        disabled={!enabled}
        label="CPF"
        inputRef={cpf}
        variant="filled"
        size="small"
        InputProps={{
          inputMode: 'numeric',
          maxLength: 14,
          inputComponent: InputMask,   
          inputProps: {
            mask: '999.999.999-99',
          },
        }}
      />
      <TextField
        InputProps={{
          endAdornment: <InputAdornment position="start" disabled >ha</InputAdornment>}}
        disabled={!enabled}
        label="Área de vegetação"
        inputRef={vegetationArea}
        variant="filled"
        size="small"
            
            />
            </Grid>
            <Grid item xs={3}>
            
            <TextField
             
              disabled={!enabled}
              label="Cidade"
              inputRef={city}
              variant="filled"
              size="small"
    
      />
           
            <TextField
              disabled={!enabled}
              label="Área total da fazenda"
              inputRef={farmTotal}
              variant="filled"
              size="small"
              InputProps={{
                endAdornment: <InputAdornment position="start" disabled >ha</InputAdornment>}}
            />
            <TextField
              disabled={!enabled}
              label="Área agricultável"
              inputRef={arableLand}
              variant="filled"
              size="small"
              InputProps={{
                endAdornment: <InputAdornment position="start">ha</InputAdornment>,
              }}
    

            />
            </Grid>
            <Grid item xs={3}>
            <TextField
              disabled={!enabled}
              label="Estado"
              inputRef={state}
              variant="filled"
              size="small"
    
            />
            <TextField
              disabled={!enabled}
              label="Culturas"
              inputRef={crops}
              variant="filled"
              size="small"
    
            />
            </Grid>
            </Grid>
          </>

      </ListItem>
    </>
      

        
      );
    
} 

export default List
