package co.edu.uniquindio.proyecto.modelo;


import lombok.*;
import org.springframework.data.annotation.Id;

import java.io.Serializable;

@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Data
@AllArgsConstructor @NoArgsConstructor @Builder
public class Venta implements Serializable {
    @Id
    private Long codigoVenta;

    private Cliente codigoCliente;


    private Administrador id;

    private Double ivaventa;
    private Double totalVenta;
    private Double valorVenta;
}
