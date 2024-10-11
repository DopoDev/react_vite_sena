import { Alert, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { deleteClientes, getClientes } from "../services/usuarios.api";

export default function VerUsuarios() {

    const [clientes, setClientes] = useState([]);
    const [succesMessage, setSuccesMesaje] = useState("");
    const [errorMesaje, setErrorMesaje] = useState("");

    //Obtenemos los clientes
    useEffect(() =>{
        const fecthClientes = async() => {
            try{
                const response = await getClientes();
                setClientes(response);
            }catch(error){
                setErrorMesaje(error.message || "Error al obtener los clientes");
                setSuccesMesaje("");
            }
        }
        fecthClientes();
    }, []);

    //Funcion para eliminar un cliente
    const handleDelete = async(id_cliente) => {
        if(window.confirm("Estas seguro que deseas eliminar este cliente?")){
            try{
                await deleteClientes(id_cliente);
                setSuccesMesaje("Cliente eliminado exitosamente");
                setClientes(clientes.filter(clientes => clientes.id_cliente !== id_cliente));
            }catch(error){
                setErrorMesaje(error.message || "Error al eliminar el cliente");
                setSuccesMesaje("");
            }
        }
    };

    return(
        <Container>
            <Typography variant="h3" component="h1" gutterBottom align="center" mt={2}>
                Clientes
            </Typography>
            {succesMessage && <Alert severity = "success">{succesMessage}</Alert>}
            {errorMesaje && <Alert severity = "error">{errorMesaje}</Alert>}

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Telefono</TableCell>
                            <TableCell>Direccion</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clientes.map(cliente => (
                            <TableRow key = {cliente.id_cliente}>
                                <TableCell>{cliente.nombre}</TableCell>
                                <TableCell>{cliente.apellido}</TableCell>
                                <TableCell>{cliente.email}</TableCell>
                                <TableCell>{cliente.telefono}</TableCell>
                                <TableCell>{cliente.direccion}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="error" onClick={() => handleDelete(cliente.id_cliente)}>Eliminar</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>

    )   
}