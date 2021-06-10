import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Content } from './styles'

import Header from '../components/Header'
import Home from '../Pages/Home'
import Estilos from '../Pages/Estilos'
import Animaciones from '../Pages/Animaciones'

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Content>
        <Switch>
          <Route path='/estilos'>
            <Estilos />
          </Route>
          <Route path='/animaciones'>
            <Animaciones />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Content>
    </BrowserRouter>
  )
}
