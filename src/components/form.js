import React, { useRef, useState } from "react";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { addProducer } from "../redux/actions/producer";
import * as Yup from "yup";
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

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
  const [docValue, setDocValue] = useState("");
  const [open, setOpen] = useState(false);
  const { producer } = useSelector((state) => state);

  const handleClose = () => {
    setOpen(false);
  };

  const schema = Yup.object().shape({
    cpf: Yup.string()
      .required("CPF/CNPJ é obrigatório")
      .test("isValid", "CPF ou CNPJ é inválido", (value) => {
        let doc = value.replace(/([^0-9])+/g, "");
        if (doc?.length === 11 || doc?.length === 14) {
          return !producer.find(
            (item) => item.cpf.replace(/([^0-9])+/g, "") === doc
          );
        }
        return false;
      }),
    name: Yup.string().required("Nome é obrigatório"),
    city: Yup.string().required("Cidade é obrigatória"),
    state: Yup.string().required("Estado é obrigatório"),
    crops: Yup.string().required("Culturas plantadas é obrigatório"),
    sum: Yup.number().test(
      "sum",
      "A soma de área agrícultável e vegetação não pode ser maior que a área total da fazenda",
      function (value) {
        return value <= this.parent.farmTotal;
      }
    ),
  });

  const handleSave = (event) => {
    event.preventDefault();
    schema
      .validate({
        cpf: docValue,
        name: name.current.value,
        city: city.current.value,
        state: state.current.value,
        farmTotal: farmTotal.current.value,
        arableLand: arableLand.current.value,
        vegetationArea: vegetationArea.current.value,
        crops: crops.current.value,
        sum:
          Number(arableLand.current.value) +
          Number(vegetationArea.current.value),
      })
      .then(() => {
        dispatch(
          addProducer({
            cpf: docValue,
            name: name.current.value,
            city: city.current.value,
            state: state.current.value,
            farmTotal: farmTotal.current.value,
            arableLand: arableLand.current.value,
            vegetationArea: vegetationArea.current.value,
            crops: crops.current.value.toLowerCase(),
          })
        );
        setDocValue("");
        name.current.value = "";
        city.current.value = "";
        state.current.value = "";
        farmTotal.current.value = "";
        arableLand.current.value = "";
        vegetationArea.current.value = "";
        crops.current.value = "";
        setOpen(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container component="main" maxWidth="xs" align="center">
      <Box component="form" onSubmit={handleSave} noValidate sx={{ mt: 1 }}>
        <Box>
          <Typography component="h1" variant="h5" align="center">
            Cadastro de Produtores{" "}
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nome"
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
            label="CPF/CNPJ"
            name="cpf"
            autoComplete="cpf"
            autoFocus
            inputRef={cpf}
            InputProps={{
              inputMode: "numeric",
              maxLength: 18,
              inputComponent: InputMask,
              inputProps: {
                mask:
                  docValue.length > 14
                    ? "99.999.999/9999-99"
                    : "999.999.999-999",
                maskChar: "",
                value: docValue,
                onChange: (e) => setDocValue(e.target.value),
              },
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
            label="Área total da fazenda"
            name="Área total em hectares da fazenda"
            autoComplete="Área total em hectares da fazenda"
            autoFocus
            inputRef={farmTotal}
            InputProps={{
              type: "tel",
              endAdornment: (
                <InputAdornment position="start" disabled>
                  ha
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="Área agricultável em hectares"
            label="Área agricultável "
            name="Área agricultável em hectares"
            autoComplete="Área agricultável em hectares"
            autoFocus
            type="tel"
            inputRef={arableLand}
            InputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              endAdornment: (
                <InputAdornment position="start" disabled>
                  ha
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="Área de vegetação em hectares"
            label="Área de vegetação "
            name="Área de vegetação em hectares"
            autoComplete="Área de vegetação em hectares"
            autoFocus
            inputRef={vegetationArea}
            InputProps={{
              type: "tel",
              endAdornment: (
                <InputAdornment position="start" disabled>
                  ha
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="crops"
            label="Culturas plantadas (separe por vírgula)"
            name="crops"
            autoComplete="crops"
            autoFocus
            inputRef={crops}
            helperText="Digite as culturas plantadas separadas por vírgula (ex: Soja, Milho, Algodão)"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Salvar
          </Button>
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Sucesso"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Cadastro realizado com sucesso
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => navigate("/producers")}
      >
        Ver Produtores
      </Button>
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => navigate("/dashboard")}
      >
        Ver Dashboard
      </Button>
    </Container>
  );
};

export default Form;
