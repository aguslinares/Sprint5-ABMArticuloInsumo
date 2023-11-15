import {ArticuloInsumo} from "../types/ArticuloInsumo"

const BASE_URL = 'http://localhost:8080';

export const ArticuloInsumoService = {
    //Acá declararemos nuestros métodos.
    getArticulosInsumo:async (): Promise<ArticuloInsumo[]>=>{
        const response = await fetch(`${BASE_URL}/api/v1/ArticuloInsumo`)
        const data = await response.json();
        return data;
    },

    getArticuloInsumo: async (id: number): Promise<ArticuloInsumo> => {

        const response = await fetch(`${BASE_URL}/api/v1/ArticuloInsumo/${id}`);
        const data = await response.json();
        return data;
    },

    createArticuloInsumo:async (articuloInsumo: ArticuloInsumo): Promise<ArticuloInsumo> => {
        const response = await fetch(`${BASE_URL}/api/v1/ArticuloInsumo`, {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(articuloInsumo)
        });

        const data = await response.json();
        return data;

    },

    updateArticuloInsumo: async (id: number, articuloInsumo: ArticuloInsumo): Promise<ArticuloInsumo> => {
        const response = await fetch(`${BASE_URL}/api/v1/ArticuloInsumo/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(articuloInsumo)
        });

        const data = await response.json();
        return data;
    }, 

    deleteArticuloInsumo:async (id:number): Promise<void> => {
        await fetch (`${BASE_URL}/api/v1/ArticuloInsumo/${id}`,{
            method: "DELETE"
        });
    }
}