import React from "react"
import ReactDOM from "react-dom/client"

import "./global.css"
import App from "./app"

ReactDOM.createRoot(document.getElementById("reactMountPoint")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
