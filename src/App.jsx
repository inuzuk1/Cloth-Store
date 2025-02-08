import './App.css';
import Collection from './components/Collections';
import Gallery from './components/Gallery';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Gallery/>
      <Collection/>
    </div>
  );
}


export default App;
