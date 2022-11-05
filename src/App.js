
import './App.css';

/* DEPENDENCIAS DE BOOTSTRAP */
import 'bootstrap/dist/css/bootstrap.min.css';

import Body from './components/principal_structure/Body';
import Footer from './components/principal_structure/Footer';
import Header from './components/principal_structure/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
