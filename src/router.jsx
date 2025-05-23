import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import { showLoader, blogLoader } from "./loaders";
import Show from "./pages/ProjectShow/Show";
import Blog from "./pages/Blog/Blog";
import Games from "./pages/Games/Games";
const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" >
                <Route path="" element={<App/>} />
                <Route path="show/:id" element={<Show/>} loader={showLoader} />
                <Route path="blog" element={<Blog/>} />
                <Route path="games" element={<Games />}  />
        </Route>
    </>
))

export default router 