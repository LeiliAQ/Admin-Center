import routes from './routes'
import {useRoutes} from 'react-router-dom'
import Topbar from './Components/topbar/Topbar'
import Sidebar from './Components/Sidebar/Sidebar'
import './App.css'
function App() {
  const router=useRoutes(routes)
  return (
    <div className="App">
      <Topbar/>
      <div className='container'>
        <Sidebar/>
        {router}
      </div>
    </div>
  );
}

export default App;
