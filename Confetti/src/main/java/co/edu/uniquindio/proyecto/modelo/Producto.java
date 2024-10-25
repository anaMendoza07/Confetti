package co.edu.uniquindio.proyecto.modelo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.*;
import java.io.Serializable;
@Document("productos")
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Producto implements Serializable {
    @Id
    @EqualsAndHashCode.Include
    private String codigoProducto;
    private String nombreProducto;
    private TipoProducto tipoProducto;
    private int unidades;
    private float precio;
}
