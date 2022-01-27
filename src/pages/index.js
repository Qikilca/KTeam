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
                        福島の農業を直接学ぶ
                    </Typography>
                </Grid>

                <Grid item xs={12} md={9} sx={{
                    background: "#aaffff",
                    p: 2,
                    borderRadius: 2,
                    m: 1
                }}>
                    <Typography textAlign={"center"}>
                        <div>
                            「福農」は福島の農業を多くに人に伝える事を目的としたサービスです。
                        </div>

                        <div>
                            これから農業を始める人や、作物についてもっと知識を付けたい人達のために、直接農家の方々に教えてもらうことができます。
                        </div>

                        <div>
                            現場からの声を直で聞き、より深く福島の農業を知ってもらえたらいいなと思っています。
                        </div>

                        <br></br>

                        <div>
                            福島第一原子力発電所事故の風評被害は10年以上たった今でも続いています。
                        </div>

                        <div>
                            震災当初に比べれば、福島県産の野菜を買うことに抵抗がある人はかなり減りました。
                            それでも、未だに抵抗を持っている人がいるのも確かです。
                        </div>

                        <div>
                            私たちは、福島の作物が安全だということを買ってもらうのではなく、作ってもらうことで知ってもらえるのではないかと考えました。
                        </div>

                        <div>
                            より多くの人が福島の農業を知り、福島の農作物が安全だということを知ってもらいたいです。
                        </div>

                    </Typography>
                </Grid>

                <Grid xs={12} md={9}>

                    <Typography variant='h4'
                        sx={{
                            bgcolor: "text.disabled",
                            p: 1,
                            marginTop: 4
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