import './App.css'
import ZonaComentarios from './components/ZonaComentarios'
import ZonaContacto from './components/ZonaContacto'
import ZonaFooter from './components/ZonaFooter'
import ZonaGaleria from './components/ZonaGaleria'
import ZonaHeader from './components/ZonaHeader'
import ZonaMenu from './components/ZonaMenu'
import ZonaSobreNosotros from './components/ZonaSobreNosotros'

function App() {
  

  return (
    <div>
      <ZonaHeader/>
      <ZonaSobreNosotros/>
      <ZonaGaleria/>
      <ZonaMenu/>
      <ZonaComentarios/>
      <ZonaContacto/>
      <ZonaFooter/>
    </div>
  )
}

export default App
