export interface VentaBoleta {
    ventaDto: VentaDto;
    detalles: Detalle[];
}

export interface Detalle {
    idZapatilla:     number;
    precioZapatilla: number;
    cantidad:        number;
    nombreZapatilla?: string;
    img?: string;
    marca?: string;
}

export interface VentaDto {
    nombreCliente:       string;
    apellidoCliente:     string;
    gmailCliente:        string;
    telefonoCliente:     string;
    direccionCliente:    string;
    departamentoCliente: number;
}
