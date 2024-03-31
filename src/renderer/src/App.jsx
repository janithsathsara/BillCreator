import { MainContent, Sidebar } from './components'
import { BrowserRouter } from 'react-router-dom'
import './style.css'

function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <BrowserRouter>
      <div className="body">
        <Sidebar />
        <MainContent />
      </div>
    </BrowserRouter>
  )
}

export default App
