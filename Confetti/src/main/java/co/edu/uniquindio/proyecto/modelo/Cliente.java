package co.edu.uniquindio.proyecto.modelo;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Document("clientes")
public class Cliente implements Serializable {
    @Id
    private String codigoCliente;
    private String nombreCliente;
    private String correo;
    private List<String> telefono;

}

