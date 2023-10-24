import { HashRouter, Switch, Route, Redirect } from 'react-router-dom/'
import HomePage from './features/HomePage'
import Shop from './features/Shop'
import { toShop, toHome } from './routes'

export const App = () => (
	<HashRouter>
		<nav>
			<Switch>
				<Route path={toHome()}>
					<HomePage />
				</Route>
				<Route path={toShop()}>
					<Shop />
				</Route>
				<Route>
					<Redirect to={toHome()} />
				</Route>
			</Switch>
		</nav>
	</HashRouter>
)

export default App
