import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productsReducer, { productsFetch } from "./features/productsSlice";
import { productsApi } from "./features/productsApi";
import cartReducer, { getTotals } from "./features/cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(productsApi.middleware)
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
