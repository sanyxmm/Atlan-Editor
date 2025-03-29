import SideBar from "../editor-components/SideBar";
import CodeMirror from "../editor-components/CodeMirror";
import Output from "../editor-components/Output";
import { MainProvider } from "../MainContext"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import './styles.css'
function Editor() {
  return (
    <div className='App-Editor'>
      <MainProvider>
        <div className='content'>
          <div className='row'>
            <div className='col-md-3'>
              <SideBar />
            </div>
            <div className='col-md-9 col-12 '>
              <CodeMirror />
              <Output />
            </div>
          </div>
        </div>
      </MainProvider>
    </div>
  );
}

export default Editor;
