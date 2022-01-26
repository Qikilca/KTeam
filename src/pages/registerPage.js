import * as React from 'react';
import ReactDOM from 'react-dom';
import HeaderTest from '../componets/HeaderTest';

import { Button, TextField, Grid } from '@mui/material';

function RegisterPage() {
  return (
    <div>
      <HeaderTest></HeaderTest>

      <Grid container maxWidth={"xs"} justifyContent={"center"}>

        <Grid item xs={12} md={7} margin={3}>
          <TextField id="mail" label="メールアドレス" variant="outlined" fullWidth></TextField>
        </Grid>

        <Grid item xs={12} md={7} margin={3}>
          <TextField id="password" label="パスワード" variant="outlined" fullWidth></TextField>
        </Grid>

        <Grid item xs={12} md={7} margin={3}>
          <TextField id="Re-enter_password" label="パスワード再入力" variant="outlined" fullWidth></TextField>
        </Grid>

        <Grid item xs={12} md={7} justifyContent={"center"} textAlign={"center"}>
          <Grid container justifyContent={"center"} textAlign={"center"}>
            <Grid item xs={4} margin={2}>
              <Button variant="outlined" fullWidth>キャンセル</Button>
            </Grid>
            <Grid item xs={4} margin={2}>
              <Button variant="contained" fullWidth>登録</Button>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}

export default RegisterPage;