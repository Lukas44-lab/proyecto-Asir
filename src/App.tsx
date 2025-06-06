import './App.css'
import ZonaContacto from './components/ZonaContacto'
import ZonaFooter from './components/ZonaFooter'
import ZonaGaleria from './components/ZonaGaleria'
import ZonaHeader from './components/ZonaHeader'
import ZonaMenu from './components/ZonaMenu'
import ZonaResenas from './components/ZonaReseña'
import ZonaSobreNosotros from './components/ZonaSobreNosotros'

function App() {
  

  return (
    <div>
      <ZonaHeader/>
      <ZonaSobreNosotros/>
      <ZonaGaleria/>
      <ZonaMenu/>
      <ZonaContacto/>
      <ZonaResenas/>
      <ZonaFooter/>
    </div>
  )
}

export default App
