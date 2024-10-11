import { Alert, Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { postClientes } from "../services/usuarios.api";

export default function AgregarUsuarios() {

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        direccion: "",
    });

    const [errors, setErrors] = useState({});
    const [succesMessage, setSuccesMesaje] = useState("");
    const [errorMesaje, setErrorMesaje] = useState("");

    //Funcion para manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    };

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);



    //Manejamos las validaciones del formulario
    const validaciones = () => {
        let formError = {};
        if(!formData.nombre){
            formError.nombre = "El nombre es obligatorio";
        }
        if(!formData.apellido){
            formError.apellido = "Debes ingresar el apellido";
        }
        if(!formData.email){
            formError.email = "Debes Ingresar un email valido";
        }
        if(!formData.telefono){
            formError.telefono = "Debes ingresar un telefono valido";
        }
        if(!formData.direccion){
            formError.direccion = "Ingrese una direccion valida";
        }
        setErrors(formError);
        return Object.keys(formError).length === 0;
    };
    
    //Funcion para enviar el formulario
    const handleSubmit = async() => {
        if(validaciones()){
            try{
                const response = await postClientes(formData);
                setSuccesMesaje(response.message);
                setErrorMesaje("");
                //mostramos el alerta de exito
                setShowSuccessAlert(true);

                //limpiamos el formulario
                setFormData({
                    nombre: "",
                    apellido: "",
                    email: "",
                    telefono: "",
                    direccion: "",
                });
                //Ocultamos el alerta de exito
                setTimeout(() => {
                    setShowSuccessAlert(false);
                }, 1000);

            }catch(error){
                setErrorMesaje(error.message || "Error al enviar el formulario");
                setSuccesMesaje("");
            }
        }
    };


    return (
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom align="center" mt={2}>
          Agregar Cliente
        </Typography>

        {succesMessage && <Alert severity="success">{succesMessage}</Alert>}
        {errorMesaje && <Alert severity="error">{errorMesaje}</Alert>}

        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField 
          id="nombre" 
          label="Nombre" 
          variant="outlined"
          value={formData.nombre}
          onChange={handleChange}
          error={!!errors.nombre}
          helperText={errors.nombre}
            />

          <TextField 
          id="apellido" 
          label="Apellido" 
          variant="outlined" 
          value={formData.apellido}
          onChange={handleChange}
          error={!!errors.apellido}
          helperText={errors.apellido}
            />

          <TextField 
          id="email" 
          label="Email" 
          variant="outlined" 
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          />

          <TextField 
          id="telefono" 
          label="Telefono" 
          variant="outlined" 
          value={formData.telefono}
          onChange={handleChange}
          error={!!errors.telefono}
          helperText={errors.telefono}
          />

          <TextField 
          id="direccion" 
          label="Direccion" 
          variant="outlined" 
          value={formData.direccion}
          onChange={handleChange}
          error={!!errors.direccion}
          helperText={errors.direccion}
          />

        </Box>

        <Box component="form">
            <Stack direction="row" spacing={2} alignItems="flex-end" m={1}> 
                <Button variant="contained" color="success" onClick={handleSubmit}>Agregar Usuario</Button>
                <Button variant="outlined" color="error" onClick={() => setFormData({nombre: "", apellido: "", email: "", telefono: "", direccion: ""})}>Limpiar</Button>
            </Stack>

        </Box>
      </Container>
    );
}