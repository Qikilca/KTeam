import { Box, Button, Grid, List, ListItem, ListSubheader, Typography } from '@mui/material';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Header from '../componets/Header';
import PlanCardDetail from '../componets/PlanCardDetail';
import PlanCardManager from '../componets/PlanCardManager';
import AddIcon from '@mui/icons-material/Add';



function ManagementPlan() {

    return (

        <div>
            <Header></Header>
            <Grid container justifyContent={"center"} >

                <Grid item xs={12} md={10} xl={9} justifyContent={"center"} marginTop={4}>


                    <Typography variant='h5'>
                        購入したプラン
                    </Typography>

                    {/*外のborder用のBOX*/}
                    <Box
                        sx={{
                            border: 1,
                            borderRadius: 1,
                            borderColor: "WindowFrame",
                            p: 1,
                        }}
                    >
                        {/*中身用のBOX */}
                        <Box sx={{
                            width: "100%",
                            overflow: 'auto',
                            maxHeight: 300,

                        }}
                        >

                            <ListItem sx={{ justifyContent: "center" }}>

                                <PlanCardDetail
                                    userName="aa"
                                    title="Text"


                                >

                                </PlanCardDetail>


                            </ListItem>

                        </Box>

                    </Box>

                </Grid>


            </Grid>
        </div>

    )

}

export default ManagementPlan;