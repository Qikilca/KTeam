import * as React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import { useSession, signIn, signOut } from "next-auth/react";
import Router from 'next/router';



import { Button, TextField, Grid, Box, Typography, Alert, AlertTitle } from '@mui/material';

function RegisterPage() {
  return (
    <div>
      <Header></Header>



      <Grid container alignItems={"center"} justifyContent={"center"} textAlign={"center"} marginTop={4}>

        <Grid item xs={12} md={7} justifyContent={"start"} textAlign={"start"}>

          <Alert severity='info'>
            <AlertTitle>アカウント登録について</AlertTitle>

            <Box>
              福農ではGoogleアカウントでの登録とサインインによって利用可能となります。
            </Box>

            <Box>
              下の登録ボタンを押した後にSine in with Googleを選択し、登録したいGoogleアカウントでログインしてください。
            </Box>

          </Alert>

        </Grid>
        {/**
         * <Grid item xs={12} md={7} margin={3}>
          <TextField id="mail" label="メールアドレス" variant="outlined" fullWidth></TextField>
        </Grid>

        <Grid item xs={12} md={7} margin={3}>
          <TextField id="password" label="パスワード" variant="outlined" fullWidth></TextField>
        </Grid>

        <Grid item xs={12} md={7} margin={3}>
          <TextField id="Re-enter_password" label="パスワード再入力" variant="outlined" fullWidth></TextField>
        </Grid>

        

         */}

        <Grid item xs={12} md={7} justifyContent={"center"} textAlign={"center"}>

          <Grid container justifyContent={"center"} textAlign={"center"}>

            <Grid item xs={4} margin={2}>
              <Button variant="outlined" fullWidth onClick={() => Router.back()}>キャンセル</Button>
            </Grid>

            <Grid item xs={4} margin={2}>
              <Button variant="contained" fullWidth onClick={() => signIn()} >登録</Button>
            </Grid>

          </Grid>

        </Grid>

      </Grid>
    </div >
  );
}

export default RegisterPage;