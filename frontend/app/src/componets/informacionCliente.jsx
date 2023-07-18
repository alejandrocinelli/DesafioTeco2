import {  useNavigate } from "react-router-dom"
import '../css/informacionCliente.css'
import handleDeleteConfig from '../helper/handlerDelete';

const informacionCliente = ({cliente}) => {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()
 
  const handleDelete =  async() => {
   
    handleDeleteConfig({id: cliente._id , navigate})
   
  }
 
  const handleEdit = () => {
        navigate(`/editar-clientes/${cliente.dni}`)
        //navigate(`/editar-cliente`, {state: {cliente}})
  }
 

  return (
    <div className="container">
    <div className="user-card">
      <div className="user-info">
        <h3>{cliente.nombre} {cliente.apellido} </h3>
        <p>Sexo: <span>{cliente.sex}</span> </p>
        <p>DNI: {cliente.dni}</p>
      </div>
      <div className="user-actions">
        <button onClick={() => handleEdit()} >Editar</button>
        <button onClick={() => handleDelete()} >Borrar</button>
      </div>
    </div>
  </div>
  )
}
export default informacionCliente