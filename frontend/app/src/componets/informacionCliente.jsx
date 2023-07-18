import {  useNavigate } from "react-router-dom"
import '../css/informacionCliente.css'
import clienteAxios from '../config/clienteAxios'
import swal from 'sweetalert';

const informacionCliente = ({cliente}) => {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()
 
  const handleDelete =  async() => {
   
    swal({
      title: "Estas seguro?",
      text: "Una vez eliminado, no podras recuperar este cliente!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) { 
         clienteAxios.delete(`/eliminar-cliente/${cliente._id}`).then(res => {
          
          const message = res.data
          if(message === 'Cliente eliminado'){
          swal("El cliente ha sido eliminado", {
            icon: "success",
          })
         }
         }).then(() => {
         
          navigate('/clientes')
        })
        .catch((error) => {
         
          swal(error.response.data.error, "Vuelve a intentarlo.", "error");
        });
      } else {
        swal("El Cliente no fue eliminado");
      }
    });
  }
 
  const handleEdit = () => {
    console.log(cliente._id);
    //navigate(`/editar-cliente/${cliente._id}`)
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