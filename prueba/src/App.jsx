import './App.css'
import { Descripcion } from './components/descripcion/descripcionComponents'
import { Imagen } from './components/imagen/imagenComponents'
import { Nombre } from './components/nombre/nombreComponents'
import { Rol } from './components/rol/rolComponents'

function App() {
  return (
    <div className = "card">
      <Imagen />
      <Nombre name = 'Monky D Luffy'/>
      <Descripcion descripcion = 'Es apodado como "Sombrero de Paja"'/>
      <Rol />
    </div>
  )
}

export default App
