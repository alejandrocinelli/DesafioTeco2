import { useState } from 'react';
import '../css/formulario.css'
import Alerta from './alerta';
import InformacionCliente from './informacionCliente';
import clienteAxios from '../config/clienteAxios';

const FormDni = () => {

    const [dni,setDni] = useState('')
    const [alerta, setAlerta] = useState({});
    const [cliente, setCliente] = useState({});

    const handlerSubmit = async (e) => {
        e.preventDefault()
        
        if(dni.length < 8){
           
            setAlerta({
                msg: 'El DNI debe tener 8 caracteres',
                error: true,
                });
            }
        
            try {
                const {data} = await clienteAxios.get(`/consultar-cliente/${dni}`)
                
                setCliente(data)
                setAlerta({});
            } catch (error) {
                console.log(error);
                setAlerta({
                    msg: error.response.data.error ,
                    error: true,
                });
                setCliente({});

            }
    }

    const {msg} = alerta

  return (
    <>
    <h2>Busca el Usuario por DNI</h2>
    {msg && <Alerta alerta={alerta}/>}

    <form onSubmit={handlerSubmit}>
    <div className="form-group">
      <label htmlFor="dni">DNI:</label>
      <input type="number" id="dni" name="dni" required
      value={dni} onChange={(e) => setDni(e.target.value)}/>
  
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