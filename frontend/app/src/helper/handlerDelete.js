
import clienteAxios from '../config/clienteAxios'
import swal from 'sweetalert';


const handleDelete =  async({id , navigate}) => {
     
    swal({
      title: "Estas seguro?",
      text: "Una vez eliminado, no podras recuperar este cliente!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) { 
         clienteAxios.delete(`/eliminar-cliente/${id}`).then(res => {
          
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

  export default handleDelete;