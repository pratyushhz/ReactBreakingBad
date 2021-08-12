// calling api:
import React from "react";
import ShowCharacter from "./ShowCharacter";
import { Grid, Box} from "@material-ui/core";
const Characters = ({apiData}) => {
    return(
        <Box style= {{margin:20}}>
            <Grid container spacing= {4}>
                {
                    apiData.map((item) => (
                    // console.log(item);
                    <Grid item xs= {3}>
                        <ShowCharacter key ={item.char_id} item ={item}/>
                    </Grid>
                    ))
                }
            </Grid>
        </Box>        
    )
}
export default Characters;