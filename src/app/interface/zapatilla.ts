import { Categoria } from "./categoria";
import { Marca } from "./marca";
import { Modelo } from "./modelo";

export interface Zapatilla {
    idZapatilla?:         number;
    nombreZapatilla:      string;
    descripcionZapatilla: string;
    precioZapatilla:      string;
    stockZapatilla:       string;
    
    imagenZapatilla:      string;  
    idAdminZapatillas:    number;
    idModeloZapatilla:    number;
    idCategoriaZapatilla: number;
    idMarcaZapatilla:     number;
    idPersonaZapatilla:   number;
    urlImg?:              string;
    categoria?: Categoria;
    marca?: Marca;
    modelo?: Modelo;
    
}
