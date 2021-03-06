import React from 'react';
import {Charts, Cards, CountryPicker} from "./components"
import styles from "./App.module.css";
import {fetchData} from "./Api"


class App extends React.Component{
state={
    data:{},
    country:"",
}

async componentDidMount(){
    const fetchedData = await fetchData();
   this.setState({data:fetchedData})
}

handleCountryChange = async (country) =>{
//fetch the data
const fetchedData = await fetchData(country);
//set the state
this.setState({data:fetchedData, country:country})
}

    render(){
        const{data, country}=this.state
        return(
            <div className={styles.container}>
               <Cards data={data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange} />
               <Charts data={data} country={country}/>
            </div>
        )
    }
}

export default App
