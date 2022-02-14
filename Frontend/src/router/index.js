import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import routez from './routes'


const Routers = () => {
    var i = 0;
    return(
        <BrowserRouter >
           <Routes>
            
            {routez.map((r)=>{
                  return(<Route  path={r.path} element={r.element} > </Route>)
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;