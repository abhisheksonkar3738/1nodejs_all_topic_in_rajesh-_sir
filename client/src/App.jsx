import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Insert from "./pages/insert";
import Display from "./pages/display";
import Search from "./pages/search";
import Upadte from "./pages/update";
import Delete from "./pages/delete";
import Edit from "./pages/edit";

const App=()=>{
  return(
    <>
    
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path="home" element={<Home/>}/>
    <Route path="insert" element={<Insert/>}/>
    <Route path="display" element={<Display/>}/>
    <Route path="search" element={<Search/>}/>
    <Route path="update" element={<Upadte/>}/>
    <Route path="delete" element={<Delete/>}/>
    <Route path="edit/:id" element={<Edit/>}/>
    </Route>
   </Routes>
   </BrowserRouter>

    </>
  )
}

export default App;