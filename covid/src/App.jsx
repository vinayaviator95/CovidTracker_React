import React from 'react';
import {Charts, Cards, CountryPicker} from "./components"
import styles from "./App.module.css";
import {fetchData} from "./Api"


class App extends React.Component{
state={
    data:{}
}

async componentDidMount(){
    const fetchedData = await fetchData();
   this.setState({data:fetchedData})
}

    render(){
        const{data}=this.state
        return(
            <div className={styles.container}>
               <Cards data={data}/>
               <CountryPicker/>
               <Charts/>
            </div>
        )
    }
}

export default App
