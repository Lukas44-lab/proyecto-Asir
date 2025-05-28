import './App.css'
import ZonaContacto from './components/ZonaContacto'
import ZonaFooter from './components/ZonaFooter'
import ZonaHeader from './components/ZonaHeader'
import ZonaMenu from './components/ZonaMenu'
import ZonaSobreNosotros from './components/ZonaSobreNosotros'

function App() {
  

  return (
    <div>
      <ZonaHeader/>
      <ZonaSobreNosotros/>
      <ZonaMenu/>
      <ZonaContacto/>
      <ZonaFooter/>
    </div>
  )
}

export default App
