import React, {useState, useEffect} from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
// import {Route, Switch, Redirect } from "react-router-dom";
// import Home from "./components/Home";
// import Details from "./components/Details";
// import Navbar from "./components/Navbar";
import { Box } from "@material-ui/core";
import {fetchData} from "./Service/Api";
import Characters from "./components/Characters"
const App = () => {
    // usestate
    const [text, setText] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
           const result = await fetchData(text);
           setData(result.data);
           console.log(result);
        }
        getData(text);
    }, []);

    const getText = (inputText) => {
        setText(inputText)
        console.log(inputText);
    }

    return(
        
        <Box>

            <Header valueInput={getText}/>
            <Characters apiData= {data}/>
            {/* <Header />
            <Navbar />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/details" component={ Details } />
                <Redirect to="/" />
            </Switch> */}
            
        </Box>

        
    )
}
export default App;