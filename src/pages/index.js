import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button, Grid, TextField } from '@mui/material';
import Test from '../componets/Test';
import Footer from '../componets/Footer';
import FooterTest from '../componets/Test';
import PlanCard from '../componets/Plancard';
import Image from 'next/image';
import Header from '../componets/Header';

function HomePage() {

    return (

        <div>

            <Header></Header>


            <PlanCard></PlanCard>

            {
                /*
            <Grid container justifyContent={"center"}>
                <Grid item xs={12} md={7}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>

                            <TextField id="input-name" label="姓" variant="outlined" fullWidth></TextField>

                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="input-name" label="名" variant="outlined" fullWidth></TextField>

                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
             */
            }


        </div>

    )


}

export default HomePage;