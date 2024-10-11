import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000",
});

export const postClientes = async (cliente) => {
    
    try{
        const response = await API.post("/clientes", cliente);
        return response.data;
    }catch(error){
        return error.response.data;
    }
};

export const getClientes = async () => {
    const response = await API.get("/clientes");
    return response.data;
}

export const deleteClientes = async (id_cliente) => {
    const response = await API.delete(`/clientes/${id_cliente}`);
    return response.data;
}