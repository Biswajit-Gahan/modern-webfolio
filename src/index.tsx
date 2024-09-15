import {createRoot} from "react-dom/client";
import '@fontsource-variable/mohave';
import '@fontsource-variable/monda';
import "./globals.css"
import App from "./app";

const webFolioMainElement = document.querySelector("#webfolio-main") as HTMLElement;
const root = createRoot(webFolioMainElement);
root.render(<App />);
