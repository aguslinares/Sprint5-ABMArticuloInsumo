export interface ArticuloInsumo{
    id: number;
    denominacion: string;
    urlImagen: string;
    precioCompra: number;
    stockActual: number; 
    stockMinimo: number;
}

export default ArticuloInsumo;