import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Show from "./pages/Show";
import App from "./App";
import { showLoader } from "./loaders";
const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" >
                <Route path="" element={<App/>} />
                <Route path="show/:id" element={<Show/>} loader={showLoader} />

        </Route>
    </>
))

export default router 