import Formulario from "./componets/formulario"
import Tabla from "./componets/tabla"
import Nav from "./componets/nav"
import FormDni from "./componets/formDni"
import { BrowserRouter,  Route, Routes} from 'react-router-dom';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<h2>Generar el inicio</h2>} />
      <Route path="/cargar-cliente" element={<Formulario/>} />
      <Route path="/consultar-cliente" element={<FormDni/>} />
      <Route path="/clientes" element={<Tabla/>} />
    </Routes>
   </BrowserRouter> 
  </>
  )
}

export default App
