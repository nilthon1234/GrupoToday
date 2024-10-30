export interface VentaBoleta {
    ventaDto: VentaDto;
    detalles: DetalleDto[];
}

export interface DetalleDto {
    idZapatilla:     number;
    precioZapatilla: number;
    cantidad:        number;
    nombreZapatilla?: string;
    img?: string;
    marcaZapatilla?: string;
}

export interface VentaDto {
    nombreCliente:       string;
    apellidoCliente:     string;
    gmailCliente:        string;
    telefonoCliente:     string;
    direccionCliente:    string;
    idDepartamento: number;
}
