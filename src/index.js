import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "aos/dist/aos.css";
import Aos from "aos";


Aos.init({
  duration: 600, // مدة الحركة بالميلي ثانية
});
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // استخدام createRoot

root.render(

    <App />

 
);
