import { createContext, useContext } from "react";
import { Provider } from "mobx-react";

import RootStore from "./stores/RootStore";

import AppRoutes from "./routes/AppRoutes";
import AppLayout from "./components/app-layout/AppLayout";

const rootStore = new RootStore();
const storeContext = createContext(rootStore);

const App = () => {
  return (
    <Provider store={storeContext}>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRootStore = () => useContext(storeContext);
export default App;
