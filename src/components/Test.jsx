import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";

const FooterTest = () =>{
    return(
        <footer>

            <div>
                aaaaaaaaaaaaaaaa
            </div>

        </footer>
    )
}


function Test() {

    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Button variant="contained" >xs=8</Button>

                </Grid>

                <Grid item xs={4}>

                    <Button variant="contained" >xs=4</Button>

                </Grid>


            </Grid>

        </Box>

    )

}

export default FooterTest;