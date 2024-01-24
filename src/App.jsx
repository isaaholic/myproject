import Mainpage from "./mainpage/MainPage";
import Login from "./login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Error from "./error/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RequireAuth />}>
          <Route path="" element={<Mainpage />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
