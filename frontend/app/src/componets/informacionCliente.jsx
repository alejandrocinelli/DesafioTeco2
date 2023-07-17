import '../css/informacionCliente.css'

const informacionCliente = ({cliente}) => {

  return (
    <div className="container">
    <div className="user-card">
      <div className="user-info">
        <h3>{cliente.nombre} {cliente.apellido} </h3>
        <p>Sexo: <span>{cliente.sex}</span> </p>
        <p>DNI: {cliente.dni}</p>
      </div>
      <div className="user-actions">
        <button>Editar</button>
        <button>Borrar</button>
      </div>
    </div>
  </div>
  )
}
export default informacionCliente