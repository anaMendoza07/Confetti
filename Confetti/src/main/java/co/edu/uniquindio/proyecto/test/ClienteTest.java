package co.edu.uniquindio.proyecto.test;
import co.edu.uniquindio.proyecto.modelo.Cliente;
import co.edu.uniquindio.proyecto.repository.ClienteRepo;
import com.mongodb.assertions.Assertions;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.List;
import org.springframework.boot.test.mock.mockito.MockBean;
@SpringBootTest
public class ClienteTest {
    @Autowired 
    private ClienteRepo clienteRepo;

    @Test
    public void registrarClienteTest(){

        Cliente cliente = Cliente.builder()
                .codigoCliente("1213444")
                .nombreCliente("Pepito perez")
                .correo("pepito@email.com")
                .telefono( List.of("12121", "232323") ).build();

        Cliente registro = clienteRepo.save( cliente );
        Assertions.assertNotNull(registro);
    }
    @Test
    public void actualizarClienteTest() {
    //Obtenemos el cliente con el id XXXXXXX
        Cliente cliente = clienteRepo.findById("XXXXXXX").orElseThrow();
    //Modificar el email del cliente
        cliente.setCorreo("nuevoemail@email.com");
    //Guardamos el cliente
        clienteRepo.save( cliente );
    //Obtenemos el cliente con el id XXXXXXX nuevamente
        Cliente clienteActualizado = clienteRepo.findById("XXXXXXX").orElseThrow();;
    //Verificamos que el email se haya actualizado
        Assertions.assertEquals("nuevoemail@email.com", clienteActualizado.getCorreo());
    }
    @Test
    public void listarClienteTest(){
//Obtenemos la lista de todos los clientes (por ahora solo tenemos 1)
        List<Cliente> clientes = clienteRepo.findAll();
//Imprimimos los clientes, se hace uso de una función lambda
        clientes.forEach(System.out::println);
//Verificamos que solo exista un cliente
        Assertions.assertEquals(1, clientes.size());
    }
    @Test
    public void eliminarClienteTest(){
//Borramos el cliente con el id XXXXXXX
        clienteRepo.deleteById("XXXXXXX");
        //Obtenemos el cliente con el id XXXXXXX
        Cliente cliente = clienteRepo.findById("XXXXXXX").orElse(null);
//Verificamos que el cliente no exista
        Assertions.assertNull(cliente);
    }
}
