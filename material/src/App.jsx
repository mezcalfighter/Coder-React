import MaterialUi from "./components/pages/materialUi/MaterialUi";
import {ItemListContainer} from "./components/pages/itemListContainer/ItemListContainer";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";


function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <MaterialUi />
      {/* <ItemListContainer nombre="Emanuel"/> */}
    </ThemeProvider>
  );
}

export default App;