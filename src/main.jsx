import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './styles/variables.css'; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
