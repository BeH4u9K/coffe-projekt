import './App.css';
import Coffe_header from './Coffe/Coffe_header';
import Coffe_info_price from './Coffe/Coffe_info_price';
import Coffe_info_text from './Coffe/Coffe_info_text';
import Coffe_promo from './Coffe/Coffe_promo';
import Coffe_showcase from './Coffe/Coffe_showcase';
import Coffee_catalog from './Coffe/Coffee_catalog';





function App() {
  return (
    <div className="App">
      <Coffe_header/>
      <Coffe_showcase/>
      <Coffe_info_text/>
      <Coffee_catalog/>
      <Coffe_info_price/>
      <Coffe_promo/>
    </div>
  );
}

export default App;
