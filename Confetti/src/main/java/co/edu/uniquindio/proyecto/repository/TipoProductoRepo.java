package co.edu.uniquindio.proyecto.repository;

import co.edu.uniquindio.proyecto.modelo.Cliente;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface TipoProductoRepo extends MongoRepository<Cliente, String> {
}