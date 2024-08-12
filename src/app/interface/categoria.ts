import { Administrador } from "./administrador";

export interface Categoria {
    idCategoria?:          number;
    nombreCategoria:      string;
    nombreZapatilla?:      string;
    marcaZapatilla?:       string;
    descriptionZapatilla?: string;
    stockZapatilla?:       string;
    precioZapatilla?:      string;
    imagenZapatilla?:      string;
    urlImg?:               string;

    gmailAdmin?:          string;
    idZapatilla?:         string;
    nombreModeloZapatilla?: string;
    nombrePersonaZapatilla?: string;
    administrador?:       Administrador;
}
