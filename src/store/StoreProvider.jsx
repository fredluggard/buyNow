import PropTypes from "prop-types"
import { useRef } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { makeStore } from "./store"

const StoreProvider = ({ children }) => {
	const storeRef = useRef()

	if (!storeRef.current) {
		storeRef.current = makeStore()
	}

	return (
		<Provider store={storeRef.current?.store}>
			<PersistGate persistor={storeRef.current?.persistor}>{children}</PersistGate>
		</Provider>
	)
}

StoreProvider.propTypes = {
	children: PropTypes.node,
}

export { StoreProvider }
