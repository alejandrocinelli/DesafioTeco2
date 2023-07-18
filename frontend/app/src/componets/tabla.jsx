import '../css/tabla.css'
import { useState , useEffect} from 'react';
import clienteAxios from '../config/clienteAxios';
import handleDeleteConfig from '../helper/handlerDelete';
import { useNavigate } from "react-router-dom";
//import axios  from 'axios';

const Tabla = () => {

  const [list, setList] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    // Lógica para obtener los datos de la API
    const obtenerDatos = async () => {
      try {
        //const { data } = await axios.get('http://localhost:4000/clientes');
       const { data } = await clienteAxios.get('/clientes');
        setList(data);
    
      } catch (error) {
        console.log(error);
      }
    }
    obtenerDatos();

  }, [list]);

  const handleEdit = (id) => {
    // Lógica para editar el registro con el ID proporcionado
    console.log('Editar registro con ID:', id);
  };

  const handleDelete = (id) => {
    // Lógica para eliminar el registro con el ID proporcionado
    handleDeleteConfig({id , navigate})
  };

  return (
    <>
    <h2>Lista de Clientes</h2>
    <div className="tabla-wrapper">
    <div className="tabla-responsive">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
            <th>Sexo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item._id}>
              <td >{item.nombre}</td>
              <td >{item.apellido}</td>
              <td>{item.dni}</td>
              <td>{item.sex}</td>
              
              <td>
                <button onClick={() => handleEdit(item.dni)}>Editar</button>
                <button onClick={() => handleDelete(item._id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
};

export default Tabla;