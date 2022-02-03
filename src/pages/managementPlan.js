import { Box, Button, Grid, List, ListItem, ListSubheader, Typography } from '@mui/material';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import PlanCardDetail from '../components/PlanCardDetail';
import PlanCardManager from '../components/PlanCardManager';
import AddIcon from '@mui/icons-material/Add';
import PlanCard from '../components/Plancard';
import Link from "next/link";
import { useSession, signIn, signOut,  } from "next-auth/react";



function ManagementPlan(props) {
    const { posts } = props;

    const items = {
        userName: "NAME",
        title: "TEXT",
        postedDate: "2000-01-22",
        startDate: "2000-01-22",
        endDate: "2000-01-24",
        areaName: "area",
        cropsName: "crops",
        capacity: 1,
        description: "description",
        fee: 2
    }


    return (

        <>
            <Header></Header>

            <Grid container justifyContent={"center"} >

                <Grid item xs={12} md={10} xl={9} justifyContent={"start"} marginTop={4}>
                    <Typography variant='h5'>
                        購入したプラン
                    </Typography>
                </Grid>

                <Grid item xs={12} md={10} xl={9} justifyContent={"center"}>





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
                            overflow: 'auto',
                            height: 300,
                        }}
                        >

                            <Grid container justifyContent={"center"}>



                                <PlanCardDetail

                                    userName={items.userName}
                                    postedDate={items.postedDate}
                                    title={items.title}
                                    startDate={items.startDate}
                                    endDate={items.endDate}
                                    areaName={items.areaName}
                                    cropsName={items.cropsName}
                                    capacity={items.capacity}
                                    description={items.description}
                                    fee={items.fee}
                                >
                                </PlanCardDetail>



                            </Grid>

                        </Box>

                    </Box>

                </Grid>
            </Grid>

            {/*作成済みプランの表示 */}
            <Grid container justifyContent={"center"}>

                <Grid item xs={12} md={10} xl={9} justifyContent={"center"} marginTop={4}>
                    <Typography variant='h5'>
                        作成したプラン
                    </Typography>

                    {/*外側のborder用のボックスを構成 */}
                    <Box
                        sx={{
                            border: 1,
                            borderRadius: 1,
                            borderColor: "WindowFrame",
                            p: 1
                        }}
                    >
                        {/*中の表示用のボックスを構成 */}
                        <Box
                            sx={{
                                width: "100%",
                                overflow: 'auto',
                                height: 300

                            }}
                        >

                            <Grid container justifyContent={"center"} spacing={2}>



                                {
                                    //propsに入っている物を全て出してプランカードを作成する
                                    posts.map(
                                        (item) =>
                                            <PlanCardManager
                                                key={item.id}
                                                userName={item.teach_user_name}
                                                postedDate={item.created_at}
                                                title={item.title}
                                                startDate={item.start_date}
                                                endDate={item.end_date}
                                                areaName={item.area_name}
                                                cropsName={item.crops_name}
                                                capacity={item.capacity}
                                                description={item.description}
                                                fee={item.fee}

                                            ></PlanCardManager>
                                    )

                                }

                            </Grid>

                        </Box>

                    </Box>

                    <Box textAlign={"end"} marginTop={1}>


                        <Link href={"/planCreate"}>
                            <Button variant='contained'>
                                <AddIcon></AddIcon>
                                プラン作成
                            </Button>

                        </Link>

                    </Box>

                </Grid>

            </Grid>




        </>

    )

}


export async function getStaticProps(context) {

    const res = await fetch("http://localhost:3000/api/getMyPlans");
    const posts = await res.json();


    console.log(res.type);
    console.log(posts);

    return {
        props: { posts }


    };
}


export default ManagementPlan;
