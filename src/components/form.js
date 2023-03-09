import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProducer } from "../redux/actions/producer";
import * as Yup from 'yup';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate} from 'react-router-dom'


const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useRef();
  const cpf = useRef();
  const city = useRef();
  const state = useRef();
  const farmTotal = useRef();
  const arableLand = useRef();
  const vegetationArea = useRef();
  const crops = useRef();

  const schema = Yup.object().shape({
    cpf: Yup.string().length(11, 'CPF deve ter exatamente 11 caracteres').required('CPF é obrigatório'),
    name: Yup.string().required('Nome é obrigatório'),
    city: Yup.string().required('Cidade é obrigatória'),
    state: Yup.string().required('Estado é obrigatório'),
    crops: Yup.string().required('Culturas plantadas é obrigatório'),
    sum: Yup.number().test('sum', 'A soma de área agrícultável e vegetação não pode ser maior que a área total da fazenda', function(value) {
      return value <= this.parent.farmTotal;
    })
  });

  const handleSave = (event) => {
    event.preventDefault()
    schema.validate({
      cpf: cpf.current.value,
      name: name.current.value,
      city: city.current.value,
      state: state.current.value,
      farmTotal: farmTotal.current.value,
      arableLand: arableLand.current.value,
      vegetationArea: vegetationArea.current.value,
      crops: crops.current.value,
      sum: Number(arableLand.current.value) + Number(vegetationArea.current.value)
    }).then(() => {
      dispatch(addProducer({
        cpf:cpf.current.value,
        name:name.current.value,
        city:city.current.value,
        state:state.current.value, 
        farmTotal:farmTotal.current.value,
        arableLand:arableLand.current.value, 
        vegetationArea:vegetationArea.current.value,
        crops:crops.current.value 
      }));
      cpf.current.value=''
      name.current.value=''
      city.current.value=''
      state.current.value=''
      farmTotal.current.value=''
      arableLand.current.value=''
      vegetationArea.current.value=''
      crops.current.value=''
    }).catch((err) => {
      alert(err.message);
    });
  };

  return (
    
      <Container component="main" maxWidth="xl" align="center" >
         <Box component="form" onSubmit={handleSave} noValidate sx={{ mt: 1 }}>
        <Box>
        <Typography component="h1" variant="h5" align="center">Produtor </Typography>
      <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
              inputRef={name}
            
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="cpf"
              label="cpf"
              name="cpf"
              autoComplete="cpf"
              autoFocus
              inputRef={cpf}
              inputProps={{
                maxLength: 14,
                type:"number"
              }}
            />
      <TextField
              margin="normal"
              required
              fullWidth
              id="Cidade"
              label="Cidade"
              name="Cidade"
              autoComplete="Cidade"
              autoFocus
              inputRef={city}
            
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Estado"
              label="Estado"
              name="Estado"
              autoComplete="Estado"
              autoFocus
              inputRef={state}
            
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="Área total em hectares da fazenda"
              label="Área total em hectares da fazenda"
              name="Área total em hectares da fazenda"
              autoComplete="Área total em hectares da fazenda"
              autoFocus
              inputRef={farmTotal}
              inputProps={{
                type:"number"
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Área agricultável em hectares"
              label="Área agricultável em hectares"
              name="Área agricultável em hectares"
              autoComplete="Área agricultável em hectares"
              autoFocus
              inputRef={arableLand}
              inputProps={{
                type:"number"
              }}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="Área de vegetação em hectares"
              label="Área de vegetação em hectares"
              name="Área de vegetação em hectares"
              autoComplete="Área de vegetação em hectares"
              autoFocus
              inputRef={vegetationArea}
              inputProps={{
                type:"number"
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Culturas plantadas (Soja, Milho, Algodão, Café, Cana de Açucar)"
              label="Culturas plantadas (Soja, Milho, Algodão, Café, Cana de Açucar)"
              name="Culturas plantadas (Soja, Milho, Algodão, Café, Cana de Açucar)"
              autoComplete="Culturas plantadas (Soja, Milho, Algodão, Café, Cana de Açucar)"
              autoFocus
              inputRef={crops}
            />
      <Button
              
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Salvar
            </Button>
            </Box>
      </Box>
      <Button
              
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick= {() => navigate("/producers")}
            >
            Ver Produtores
            </Button>
    </Container>

    )

} 

export default Form
