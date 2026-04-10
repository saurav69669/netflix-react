import { Provider } from 'react-redux'
import './App.css'
import Routing from './Routing'
import appStore from './utils/appStore'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
