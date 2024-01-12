import { StoreProvider } from "./store/StoreProvider"
import "./styles/App.scss"

function App() {
	return (
		<StoreProvider>
			<h1>Hello Fred</h1>
		</StoreProvider>
	)
}

export default App
