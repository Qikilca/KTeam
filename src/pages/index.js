import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button, Grid, TextField } from '@mui/material';
import HeaderTest from '../componets/HeaderTest';
import Footer from '../componets/Footer';
import FooterTest from '../componets/HeaderTest';
import PlanCard from '../componets/Plancard';
import Image from 'next/image';

function HomePage() {

    return (

        <div>
            <HeaderTest></HeaderTest>

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