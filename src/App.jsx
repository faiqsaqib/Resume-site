import './React-template/Template.css'
import Educations from './React-template/components/Educations';
import Expr from './React-template/components/Expr';
import "./React-template/images/react.js-img.png"
import Skills from './React-template/components/Skills';
import Template from './React-template/template';
import Todolist from './list';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
      {/* <Route path="" element={<Navbar/>} /> */}
        <Route path="/" element={<Template/>} />
        <Route path="/exp" element={<Expr/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/edu" element={<Educations/>} />
      </Routes>
    </BrowserRouter>
      {/* <Todolist /> */}
      {/* <Template/> */}
    </>
  );
}

export default App;
