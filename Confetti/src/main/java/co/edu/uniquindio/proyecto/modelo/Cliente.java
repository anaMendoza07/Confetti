package co.edu.uniquindio.proyecto.modelo;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Document("clientes")
public class Cliente implements Serializable {

    @EqualsAndHashCode.Include
    @Id
    private String codigoCliente;
    private String nombreCliente;
    private String correo;
    private List<String> telefono;
}

