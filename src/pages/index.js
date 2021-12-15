import * as React from 'react';
import ReactDOM from 'react-dom';
import {Button, TextField} from '@mui/material';
import Footer from '../componets/Footer';


function HomePage() {

    return(
        
        <div>
            
            

            <h1>
                Welcom to Next.js
            </h1>

            <Button variant="contained">
                Add Button
            </Button>

            <Footer></Footer>
        </div>

    )


}

export default HomePage;