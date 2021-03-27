import './App.css';
import Lists from './components/Lists'
import Header from './components/Header'
import Footer from './components/Footer'


function App () {
  return (
    <div className="page">
      <Header />
      <Lists />
      <Footer />
    </div>
  );
}

export default App;
