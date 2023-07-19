/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import '../css/formulario.css'
import clienteAxios from '../config/clienteAxios'
import Alerta from './alerta'
import swal from 'sweetalert';

const formulario = () => {
  
  const [dni,setDni] = useState('')
  const [nombre,setNombre] = useState('')
  const [apellido,setApellido] = useState('')
  const [sex,setSex] = useState('')
  const [alerta, setAlerta] = useState({});

  const handlerSubmit = async (e) => {
    e.preventDefault()

     if(dni.length < 8){
      return setAlerta({
          msg: 'El DNI debe tener 8 digitos',
          error: true,
          });
      }

     try {
      const {data} = await clienteAxios.post('/cargar-cliente', {dni,nombre,apellido,sex})
      
      if(data === 'Cliente creado'){
        swal("El cliente ha sido creado", {
          icon: "success",
        })
        setDni('')
        setNombre('')
        setApellido('')
        setSex('')
        setAlerta({})
      }
     } catch (error) {
      swal(error.response.data.error, "Vuelve a intentarlo.", "error");
        
     }
      
    }

    const handleDniChange = (e) => {
      const inputDni = e.target.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
      setDni(inputDni.slice(0, 8)); // Limitar a 8 dígitos
    };

  const {msg} = alerta
 
  return (
    <div className='prueba'>
    <h2>Completa los campos del Usuario</h2>
    <div className='alerta'>
      {msg && <Alerta alerta={alerta}/>}
    </div>
    
    <form onSubmit={handlerSubmit} >
    <div className="form-group">
      <label htmlFor="dni">DNI:</label>
      <input type="number" id="dni" name="dni" required 
      
      value={dni} onChange={handleDniChange}
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
        <option value="no decide">Prefiero no decir</option>
      </select>
    </div>
    
    <div className="form-group">
      <input type="submit" value="Enviar"/>
    </div>
  </form>
  
    </div>
   
  )
}
export default formulario