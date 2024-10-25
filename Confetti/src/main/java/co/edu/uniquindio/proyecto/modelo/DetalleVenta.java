package co.edu.uniquindio.proyecto.modelo;

import lombok.*;
import org.springframework.data.annotation.Id;


@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Data
@AllArgsConstructor @NoArgsConstructor @Builder

public class DetalleVenta {
    @Id

    private Long codigoDetalleVenta;

    private int cantidadProducto;
    private Producto codigoProducto;

    private Venta codigoVenta;

    private Double valorTotal;
    private Double valorVenta;
    private Double valorIva;
}
