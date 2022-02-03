import * as React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';


import { Button, TextField, Grid } from '@mui/material';

function LoginPage() {
  return (
    <div>

      <Header></Header>

      <Grid container maxWidth={"xs"} justifyContent={"center"}>

        <Grid item xs={12} md={7} margin={3}>
          <TextField id="mail" label="メールアドレス" variant="outlined" fullWidth></TextField>
        </Grid>

        <Grid item xs={12} md={7} margin={3}>
          <TextField id="password" label="パスワード" variant="outlined" fullWidth></TextField>
        </Grid>

        <Grid item xs={12} md={7} justifyContent={"center"} textAlign={"center"}>
          <Grid container justifyContent={"center"} textAlign={"center"}>
            <Grid item xs={4} margin={2}>
              <Button variant="outlined" fullWidth>キャンセル</Button>
            </Grid>
            <Grid item xs={4} margin={2}>
              <Button variant="contained" fullWidth>ログイン</Button>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}

export default LoginPage;