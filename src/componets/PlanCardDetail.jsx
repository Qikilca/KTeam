import { AutoFixHigh, CardTravel, MoreVert } from "@mui/icons-material";
import * as React from 'react';
import { Avatar, List, Card, CardContent, CardHeader, Box, Divider, Grid, ListItem, Typography, Button, CardActions, Icon, autocompleteClasses, IconButton } from "@mui/material";
import Image from "next/image";
import { use } from "express/lib/router";
import { textAlign } from "@mui/system";
import moment from "moment";
import "moment/locale/ja";

function PlanCardDetail(props) {
    const userName = props.userName;

    //momentを日本語に設定
    moment.locale("ja");
    //フォーマットをYYYY年M月D日 HH:mmに設定
    const postedDate = moment(props.postedDate).format("YYYY年M月D日 HH:mm");

    //プランタイトル
    const planTitle = props.title;

    //開始日と終了日
    const startDate = props.startDate;
    const endDate = props.endDate;

    //開催期間を差分から計算
    const holdingPeriod = moment(endDate).diff(moment(startDate), "days")

    //開催地域
    const areaName = props.areaName;

    //作物
    const cropsName = props.cropsName;

    //定員
    const capacity = props.capacity;

    //プラン概要
    const description = props.description;

    const fee = props.fee;

    return (


        <Grid item xs={12} md={12} lg={10}>

            <Card variant="outlined">

                <Typography component="div" textAlign={"center"}>
                    <Box sx={{ fontSize: 28, fontWeight: 550, m: 1 }}>{planTitle}</Box>
                </Typography>

                <Divider />

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
                                        開始日:{moment(startDate).format("YYYY年M月D日")}
                                    </ListItem>

                                    <Divider />

                                    <ListItem>
                                        開催期間:{holdingPeriod + "日間"}
                                    </ListItem>


                                    <Divider />

                                    <ListItem>
                                        開催地域:{areaName}
                                    </ListItem>

                                    <Divider />

                                    <ListItem>
                                        対象作物:{cropsName}
                                    </ListItem>

                                    <Divider />

                                    <ListItem>
                                        定員:{capacity + "名"}
                                    </ListItem>

                                    <Divider />

                                    <ListItem>
                                        料金:{fee + "円"}
                                    </ListItem>

                                    <Divider />

                                    <ListItem >
                                        {/*説明欄のテキストはオーバーする場合は...で表現する*/}
                                        <Box component="div"
                                            sx={{
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden',
                                            }}>
                                            説明:{description}

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
                        <IconButton sx={{ p: 0 }}>
                            <Avatar
                                alt={userName}
                                src="/broken-image.jpg"
                            >
                            </Avatar>
                        </IconButton>

                    }
                    title={userName}
                    subheader={"投稿日 " + postedDate}
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
                                    プラン確認
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
export default PlanCardDetail;