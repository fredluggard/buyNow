import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { productsSlice } from "./slices/products.slice"
import { rootSlice } from "./slices/root.slice"

// setup store
export const makeStore = () => {
	// persist config
	const persistConfig = {
		key: "buy-now-store",
		storage,
		blacklist: [],
	}

	// combine reducers
	const rootReducer = combineReducers({
		[rootSlice.name]: rootSlice.reducer,
		[productsSlice.name]: productsSlice.reducer,
	})

	// persist reducer
	const persistedReducer = persistReducer(persistConfig, rootReducer)

	// configure store
	const store = configureStore({
		reducer: persistedReducer,
		// middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiHandler.middleware),
	})

	// persist store
	const persistor = persistStore(store)

	// return store and persistor
	return { store, persistor }
}
