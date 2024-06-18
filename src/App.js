
import './App.css';
import HeaderCode from './Header';//Alias
import { Footer, FooterCode } from './Footer';//importing of name export
import Content, { ConentCode } from './Content';
import { Events } from './Events';
import { SetStatement } from './SetStatement';
import { ForceUpdting } from './ForceUpdting';
import { ToDoList } from './ToDoList';
import { PropsProviding } from './PropsProviding';
import TestComponents from './TestComponents';
import ParentComponents from './ParentComponents';





function App() {
let course="MERN ";
//let course=123;invalid proptype



  return (
    <div >
      <HeaderCode />
      <Content />
      <Events />
      <ConentCode />
      <ForceUpdting />
      <SetStatement/>
      <ToDoList/>
      <PropsProviding/>
    <TestComponents course={course}/>
    <ParentComponents/>
      <Footer />
      <FooterCode />
    </div>
  )
}

export default App;
