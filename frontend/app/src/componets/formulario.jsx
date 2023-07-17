import '../css/formulario.css'

const formulario = () => {

  return (
    <>
    <h2>Completa los campos del Usuario</h2>
    <form>
    <div className="form-group">
      <label htmlFor="dni">DNI:</label>
      <input type="text" id="dni" name="dni" required/>
    </div>
    <div className="form-group">
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required/> 
    </div>
    <div className="form-group">
      <label htmlFor="apellido">Apellido:</label>
      <input type="text" id="apellido" name="apellido" required/>
    </div>
    <div className="form-group">
      <label htmlFor="sexo">Sexo:</label>
      <select id="sexo" name="sexo" required>
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
   
  )
}
export default formulario