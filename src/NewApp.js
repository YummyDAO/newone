import { Routes, Route } from "react-router-dom"
import Scroll from "./Scroll"
import Signin from "./Signin"
import Profile from "./Profile"
import App from "./App"
import Genesis from "./Genesis"

function Appnew() {
  return (
    <div className="App">
      <Routes>
        {/*<Route path="/" element={ <App/> } />
        <Route path="/profile" element={ <Profile/> } />
        <Route path="/scroll" element={ <Scroll/> } />
        <Route path="/signin" element={ <Signin/> } />*/}
        <Route path="/" element={ <Genesis/> } />
      </Routes>
    </div>
  )
}

export default Appnew