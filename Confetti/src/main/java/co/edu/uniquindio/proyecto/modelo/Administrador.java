package co.edu.uniquindio.proyecto.modelo;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Administrador implements Serializable {
    @Id
    @EqualsAndHashCode.Include
    private Long id;
    private String email;
    private String password;
    private String nombre;

}
