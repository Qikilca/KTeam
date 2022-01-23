import { AutoFixHigh, CardTravel, MoreVert } from "@mui/icons-material";
import * as React from 'react';
import { Avatar, List, Card, CardContent, CardHeader, Box, Divider, Grid, IconButton, ListItem, Typography, Button, CardActions, Icon, autocompleteClasses } from "@mui/material";
import Image from "next/image";
import { use } from "express/lib/router";
import { textAlign } from "@mui/system";

function PlanCard(params) {


    const userName = React.useState("田中 太郎")
    const imgName = userName.toString();
    const postedDate = React.useState("投稿日：" + "2021年1月1日")



    return (


        <Grid item xs={12} md={8}>

            <Card variant="outlined">

                <CardContent>
                    {/*カードコンテンツをGridのコンテナとして指定*/}
                    <Grid container textAlign={"center"} justifyContent={"center"} alignItems={"center"}>

                        {/*画像ファイルの配置、画面が小さい場合は縦に並び替え*/}
                        <Grid item xs={12} md={6}>
                            <ListItem>
                                <Image src={"/img/sample2.jpg"} width={240} height={160} objectFit="contain" ></Image>
                            </ListItem>
                        </Grid>

                        {/*説明部分の配置*/}
                        <Grid item xs={12} md={6}>
                            <ListItem>

                                {/*説明項目のリスト化*/}
                                <List style={{ width: "100%", whiteSpace: 'nowrap' }}>
                                    <ListItem>
                                        開催期間:2020/01/01
                                    </ListItem>

                                    <Divider />

                                    <ListItem>
                                        開催地域:会津地域
                                    </ListItem>

                                    <Divider />

                                    <ListItem>
                                        対象作物:トマト
                                    </ListItem>
                                    <Divider />

                                    <ListItem>
                                        定員:3名
                                    </ListItem>
                                    <Divider />

                                    <ListItem >
                                        {/*説明欄のテキストはオーバーする場合は...で表現する*/}
                                        <Box component="div"
                                            sx={{
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden',
                                            }}>
                                            説明:こちらのプランでは初心者でも習得可能なトマトの栽培方法をお教えしています。

                                        </Box>

                                    </ListItem>
                                </List>

                            </ListItem>
                        </Grid>

                    </Grid>
                </CardContent>

                <Divider />

                <CardHeader
                    avatar={
                        <Avatar
                            alt={imgName}
                            src="/broken-image.jpg"
                        >
                        </Avatar>
                    }
                    title={userName}
                    subheader={postedDate}
                    inlist
                    action={
                        <Box sx={{
                            padding: 1,
                        }}>
                            {/**
                                 * 購入ボタン
                                 */}
                            <Button variant="contained" disableElevation>
                                <div>
                                    ￥4000
                                </div>
                            </Button>
                        </Box>
                    }
                >
                </CardHeader>
            </Card>
        </Grid>
    )

}
export default PlanCard;