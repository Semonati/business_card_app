import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Router from "./routes/Router";
import { ThemeProvider } from "./providers/ThemeProvider";
import { UserProvider } from "./users/providers/UserProviders";
import { SnackBarProvider } from "./providers/SnackBarProvifer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <SnackBarProvider>
            <UserProvider>
              <Layout>
                <Router />
              </Layout>
            </UserProvider>
          </SnackBarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
