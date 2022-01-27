
import * as React from 'react';
import { Button, Grid, TextField, Typography, Box } from '@mui/material';
import HeaderTest from '../componets/HeaderTest';
import PlanCard from '../componets/PlancardMain';
import Image from 'next/image';
import PlanFillter from '../componets/PlanFillter';
import { width } from '@mui/system';


function SearchPlan(props) {

    const { posts } = props;

    return (
        <div>


            <HeaderTest></HeaderTest>


            <Box
                sx={{
                    display: "flex"
                }}>

                <PlanFillter></PlanFillter>

                <Box sx={{
                    display: "block"
                }}>
                    <Grid container textAlign={"center"} justifyContent={"center"} >

                        {
                            //propsに入っている物を全て出してプランカードを作成する
                            posts.map(
                                (item) =>
                                    <PlanCard
                                        userName={item.teacher_name}
                                        postedDate={item.created_at}
                                        title={item.title}
                                        startDate={item.start_date}
                                        endDate={item.end_date}
                                        areaName={item.area_name}
                                        cropsName={item.crops_name}
                                        capacity={item.capacity}
                                        description={item.description}
                                        fee={item.fee}

                                    ></PlanCard>
                            )

                        }

                    </Grid>

                </Box>
            </Box>

        </div>

    )

}


//PlanCardに使うPropsを取得してくる関数
export async function getStaticProps(context) {
    //エンドポイント指定
    const res = await fetch("http://localhost:3000/api/getNewPlan5");
    const posts = await res.json();

    return {
        props: { posts }
    };
}

export default SearchPlan;