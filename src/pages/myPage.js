import * as React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Button, Paper, Box } from '@mui/material';
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Link from "next/link"
import HomePage from '.';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Header from '../components/Header';

function MyPage({ user }) {
    const username = user.name;

    return (
        <div>

            <Header></Header>

            <Grid container justifyContent={"center"} textAlign={"center"} marginTop={3} spacing={2}>

                <Grid item xs={12} md={7}>
                    ようこそ
                    <Box component="span"
                        sx={{
                            fontWeight: 'bold',
                            padding: 1
                        }}>
                        {username}
                    </Box>
                    さん
                </Grid>

                <Grid container justifyContent={"center"} spacing={2}>

                    <Grid item>
                        <Paper elevation={0} square variant={"outlined"}
                            sx={{
                                width: 160,
                                height: 160,
                                border:0
                            }}
                        >
                            <Link href={"/managementPlan"}>
                                <Button variant="contained" fullWidth sx={{ height: "100%" }} >
                                    <ContentPasteIcon fontSize='large'></ContentPasteIcon>
                                    <Box>
                                        プラン管理
                                    </Box>
                                </Button>
                            </Link>
                        </Paper>


                    </Grid>

                    <Grid item>
                        <Paper elevation={0} square variant={"outlined"}
                            sx={{
                                width: 160,
                                height: 160,
                                border:0
                            }} >

                            <Link href='/studentPage'>
                                <Button variant="contained" fullWidth sx={{ height: "100%" }} >
                                    <ManageAccountsIcon fontSize='large'></ManageAccountsIcon>
                                    プロフィール編集
                                </Button>
                            </Link>
                        </Paper>


                    </Grid>

                    <Grid item>
                        <Paper elevation={0} square variant={"outlined"}
                            sx={{
                                width: 160,
                                height: 160,
                                border:0

                            }} >

                            <Link href='/bankRegister'>
                                <Button variant="contained" fullWidth sx={{ height: "100%" }} >
                                    <AccountBalanceIcon fontSize='large'></AccountBalanceIcon>
                                    振込口座
                                    <br></br>
                                    登録・変更
                                </Button>
                            </Link>

                        </Paper>


                    </Grid>

                </Grid>

                <Grid item xs={12} md={7} justifyContent={"center"} textAlign={"center"}>
                    <Grid container justifyContent={"center"} textAlign={"center"}>
                        <Grid item xs={4} margin={2}>
                            <Button variant="outlined" onClick={() => signOut()} fullWidth>ログアウト</Button>
                        </Grid>
                        <Grid item xs={4} margin={2}>
                            <Button variant="outlined" fullWidth>退会手続きへ</Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div >
    )

}
export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: { user: session.user },
    };

}


export default MyPage;