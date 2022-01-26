import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button, Grid, TextField, Typography, Box, Divider } from '@mui/material';
import HeaderTest from '../componets/HeaderTest';
import Footer from '../componets/Footer';
import FooterTest from '../componets/HeaderTest';
import PlanCard from '../componets/Plancard';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";
import { palette } from '@mui/system';



function HomePage(props) {
    //propsをpostsに代入
    const { posts } = props;


    return (

        <div>
            <HeaderTest></HeaderTest>

            <Grid container textAlign={"center"} justifyContent={"center"} spacing={2} marginTop={2}>


                <Grid item xs={12} md={9} sx={{
                    bgcolor: "info.main",
                    p: 2,
                    borderRadius: 2,
                    m: 1
                }}>
                    <Typography variant='h3' textAlign={"center"} alignItems={"cemter"}>
                        現役農家から直接学ぶ
                    </Typography>
                </Grid>

                <Grid item xs={12} md={9} sx={{
                    background: "#aaffff",
                    p: 2,
                    borderRadius: 2,
                    m: 1
                }}>
                    <Typography textAlign={"center"}>
                        これから農業を始める人や作物についてもっと知識を付けたい人におすすめ。
                        運営認証済みの現役農家が作物ごとに直接現地で授業をしてくれるため安心安全で分かりやすい!
                        自分が知りたい内容の授業を選択できるため無駄な時間を削減できます。
                    </Typography>
                </Grid>

                <Grid xs={12} md={9}>

                    <Typography variant='h4'
                        sx={{
                            bgcolor:"text.disabled",
                            p: 1,
                            marginTop:4
                        }}>
                        最新の授業プラン
                    </Typography>
                </Grid>

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


export default HomePage;