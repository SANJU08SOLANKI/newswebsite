import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from "./Component/Navigationbar";
import News from "./Component/News";

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navigationbar />

        <Routes>
          <Route
            exact
            path="/"
            element={<News key="general" category="general" />}
          />
          <Route
            exact
            path="/sports"
            element={<News ket="sports" category="sports" />}
          />
          <Route
            exact
            path="/business"
            element={<News key="business" category="Business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News key="entertainment" category="entertainment" />}
          />
          <Route
            exact
            path="/science"
            element={<News key="science" category="science" />}
          />
          <Route
            exact
            path="/health"
            element={<News key="health" category="health" />}
          />
          <Route
            exact
            path="/technology"
            element={<News key="technology" category="technology" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
