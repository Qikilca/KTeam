
import * as React from 'react';
import { Button, Grid, TextField, Typography, Box } from '@mui/material';
import PlanCard from '../componets/Plancard';
import Image from 'next/image';
import PlanFillter from '../componets/PlanFillter';
import { width } from '@mui/system';
import Header from '../componets/Header';


function SearchPlan(props) {

    const { posts } = props;

    return (
        <div>
            <Header></Header>


            <Grid container textAlign={"center"} justifyContent={"center"} spacing={2} marginTop={2}>

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



        </div >

    )

}


//PlanCardに使うPropsを取得してくる関数
export async function getStaticProps(context) {
    //エンドポイント指定
    const res = await fetch("http://localhost:3000/api/getAllPlan");
    const posts = await res.json();

    return {
        props: { posts }
    };
}

export default SearchPlan;