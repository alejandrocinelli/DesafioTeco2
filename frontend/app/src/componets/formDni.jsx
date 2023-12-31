import { useState } from 'react';
import '../css/formulario.css'
import Alerta from './alerta';
import InformacionCliente from './informacionCliente';
import clienteAxios from '../config/clienteAxios';
//todo hay que corrgir el error que solo se puedan escribir 8 digitos en el dni
const FormDni = () => {

    const [dni,setDni] = useState('')
    const [alerta, setAlerta] = useState({});
    const [cliente, setCliente] = useState({});

    const handlerSubmit = async (e) => {
        e.preventDefault()
        
        if(dni.length < 8){
          return setAlerta({
              msg: 'El DNI debe tener 8 digitos',
              error: true,
              });
          }
        
            try {
                const {data} = await clienteAxios.get(`/consultar-cliente/${dni}`)
                
                setCliente(data)
                setAlerta({});
            } catch (error) {
               
                setAlerta({
                    msg: error.response.data.error ,
                    error: true,
                });
                setCliente({});

            }
    }
    const handleDniChange = (e) => {
      const inputDni = e.target.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
      setDni(inputDni.slice(0, 8)); // Limitar a 8 dígitos
    };

    const {msg} = alerta

  return (
    <>
    <h2>Busca el Usuario por DNI</h2>
    <div className='alerta'>
      {msg && <Alerta alerta={alerta}/>}
    </div>
   
    <form onSubmit={handlerSubmit}>
    <div className="form-group">
      <label htmlFor="dni">DNI:</label>
      <input type="number" id="dni" name="dni" required
      value={dni} onChange={handleDniChange}/>
  
    </div>
 
    <div className="form-group">
      <input type="submit" value="Enviar"/>
    </div>
  </form>

   {cliente.nombre && <InformacionCliente cliente={cliente}/>} 
  
    </>
  )
}
export default FormDni