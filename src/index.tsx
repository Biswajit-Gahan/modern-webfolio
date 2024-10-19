import {createRoot} from "react-dom/client";
import '@fontsource-variable/mohave';
import '@fontsource-variable/mohave/wght-italic.css';
import '@fontsource-variable/monda';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import '@fontsource-variable/montagu-slab';
import "./globals.css"
import App from "./app";

const webFolioMainElement = document.querySelector("#webfolio-main") as HTMLElement;
const root = createRoot(webFolioMainElement);
root.render(<App />);
