/* eslint-disable react-hooks/rules-of-hooks */
import { useParams ,useNavigate } from "react-router-dom"
import { useEffect, useState  } from "react"
import clienteAxios from '../config/clienteAxios'
import swal from "sweetalert";

const editarCliente = () => {
  
    const params = useParams() 
    const [cliente, setCliente] = useState({})
    const [dni, setDni] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [sex, setSex] = useState('')
    const navigate = useNavigate()
   
    const {id} = params

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const {data} = await clienteAxios.get(`/consultar-cliente/${id}`)
                setCliente(data)
                setDni(data.dni)
                setNombre(data.nombre)
                setApellido(data.apellido)
                setSex(data.sex)
              
            } catch (error) {
                console.log(error);
            }
        }
        obtenerDatos()
    }, [id])
 

    const handlerSubmit = async (e) => {
        e.preventDefault()
        try {
           //aca vamos actualizar el cliente 
           const {data} = await clienteAxios.put(`/actualizar-cliente/${cliente._id}`,
           {nombre , sex , apellido , dni})
             
                if(data.message == 'Cliente actualizado'){
                    swal("El cliente ha sido actualizado", {
                    icon: "success",
                    })
                    navigate('/consultar-cliente')
                }
        } catch (error) {
            swal(error.response.data.error, "Vuelve a intentarlo.", "error");
        }
    }

  return (
    <>
    <h2>Editar Cliente</h2>
    <h3>El campo Dni no se podra modificiar</h3>
       
     <form onSubmit={handlerSubmit} >
    <div className="form-group">
      <label htmlFor="dni">DNI:</label>
      <input type="number" id="dni" name="dni" required 
      
      defaultValue={dni} readOnly
      />
    </div>
    <div className="form-group">
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required
      value={nombre} onChange={(e) => setNombre(e.target.value) }/> 
    </div>
    <div className="form-group">
      <label htmlFor="apellido">Apellido:</label>
      <input type="text" id="apellido" name="apellido" required
       value={apellido} onChange={(e) => setApellido(e.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="sexo">Sexo:</label>
      <select id="sexo" name="sexo" required value={sex} 
       onChange={(e) => setSex(e.target.value)}
      >
        <option value="">Seleccione una opción</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
      </select>
    </div>
    
    <div className="form-group">
      <input type="submit" value="Enviar"/>
    </div>
  </form>
  
    
     </>
  );
};

export default editarCliente;