
import './App.css';
import HeaderCode from './Header';//Alias
import { Footer, FooterCode } from './Footer';//importing of name export
import Content, { ConentCode } from './Content';
import { Events } from './Events';
import { SetStatement } from './SetStatement';
import { ForceUpdting } from './ForceUpdting';
import { ToDoList } from './ToDoList';


function App() {
  return (
    <div >
      <HeaderCode />
      <Content />
      <Events />
      <ConentCode />
      <ForceUpdting />
      <SetStatement/>
      <ToDoList/>
      <Footer />
      <FooterCode />
    </div>
  )
}

export default App;
