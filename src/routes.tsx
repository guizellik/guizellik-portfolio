import { Route, Switch } from 'react-router-dom'
import HomePage from './components/Pages/HomePage'
import ContactPage from './components/Pages/ContactPage'
import PortfolioPage from './components/Pages/PortfolioPage'


const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/contact" exact component={ContactPage} />
    <Route path="/portfolio" exact component={PortfolioPage} />
  </Switch>
)

export default Routes