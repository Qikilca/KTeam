import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HeaderTest from "../componets/HeaderTest";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Link from "next/link"
import HomePage from '.';



function StudentMyPage({user}) {
  const username = user.name;

  return (
    <div>

      <HeaderTest>

      </HeaderTest>

      <Grid container maxWidth={"xs"} justifyContent={"center"} textAlign={"center"}>

        <Grid container maxWidth={"xs"} justifyContent={"center"} textAlign={"center"}>
          <Grid item xs={12} md={7} margin={2}>
            {username} さんのマイページ
          </Grid>
        </Grid>

        <Grid item xs={12} md={7} justifyContent={"center"} textAlign={"center"}>
          <Grid container justifyContent={"center"} textAlign={"center"}>
            <Grid item xs={4} margin={2}>
              <Button variant="contained" fullWidth>マイプラン</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={7} justifyContent={"center"} textAlign={"center"}>
          <Grid container justifyContent={"center"} textAlign={"center"}>
            <Grid item xs={4} margin={2}>
              <Link href='/studentPage'>
                <Button variant="contained" fullWidth>
                  プロフィール編集
                </Button>
              </Link>
            </Grid>
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
    </div>
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


export default StudentMyPage;