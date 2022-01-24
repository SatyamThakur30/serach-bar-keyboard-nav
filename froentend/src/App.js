
import './App.css';
import Lists from './components/Lists';
import Searchbar from './components/Searchbar';
import { Searchcontextprovider } from './context/Searchcontext';

function App() {
  return (
    <div className="App">
      <Searchcontextprovider>
        <Searchbar />
        <Lists/>
      </Searchcontextprovider>
    </div>
  );
}

export default App;
