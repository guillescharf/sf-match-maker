
import './App.css';

/* DEPENDENCIAS DE BOOTSTRAP */
import 'bootstrap/dist/css/bootstrap.min.css';

import Body from './components/principal_structure/Body';
import Footer from './components/principal_structure/Footer';
import Header from './components/principal_structure/Header';
import { UserProvider } from './components/context/userContext';


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Body />
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
