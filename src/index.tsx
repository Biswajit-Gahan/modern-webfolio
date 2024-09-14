import {createRoot} from "react-dom/client";
import "./globals.css"
import App from "./app";

const webFolioMainElement = document.querySelector("#webfolio-main") as HTMLElement;
const root = createRoot(webFolioMainElement);
root.render(<App />);
