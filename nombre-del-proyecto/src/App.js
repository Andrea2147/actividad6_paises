import react from 'react';
import './App.css';

import Header from './components/Header';
import Buscador from './components/Buscador';
import SelectBox from './components/SelectBox';
import countries from './components/countries';

class App extends react.Component {
  state={
    regiones:['Africa','America','Artartidad','Asia','Europa','Oceania'],
    paises:[],
    filtered:[],
    busqueda:"",
    region:"",
    modo:"light",
    darkMode:false,
    isFetch:false,
  }

  consultarAPI =()=>{
    const URL="https://restcountries.com/v3.1/all/";
    fetch(URL)
    .then(response=> response.json())
    .then(data=> {
    var countries=Array.from(data);
     ///actualizar el estado con los paises///
     this.setState({
      paises:countries,
      filtered:countries,
      isFetch:true
    });
    console.log(countries);
    })
    .catch(error=>{
     console.log(error);
    })
  }
  //el codigo se ejecuta una unica vez//
  componentDidMount(){
    this.consultarAPI();
    console.log("component did Mount");
    console.log("se hizo una llamada a la API");
  }

  render (){
    return(
      <div className="App">
        <Header />
        <div className="container-80">
          <div className='search-filters'></div>
          <Buscador/>
          <SelectBox width={200} />
      </div>
        <countries countries={this.state.filtered} isFetch={this.state.isFetch}/>
      </div>
    )
  }
}
export default App;
