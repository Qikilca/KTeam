import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function StudentMyPage() {
    return (
      <div>
        <Grid container maxWidth={"xs"} justifyContent={"center"} textAlign={"center"}>
  
          <Grid container maxWidth={"xs"} justifyContent={"center"} textAlign={"center"}>
            <Grid item xs={12} md={7} margin={2}>
              User_Name さんのマイページ
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
                <Button variant="contained" fullWidth>プロフィール編集</Button>
              </Grid>
            </Grid>
          </Grid>
  
          <Grid item xs={12} md={7} justifyContent={"center"} textAlign={"center"}>
            <Grid container justifyContent={"center"} textAlign={"center"}>
              <Grid item xs={4} margin={2}>
                <Button variant="outlined" fullWidth>ログアウト</Button>
              </Grid>
              <Grid item xs={4} margin={2}>
                <Button variant="outlined" fullWidth>退会手続きへ</Button>
              </Grid>
            </Grid>
          </Grid>
  
        </Grid>
      </div>
    );
  }
  
  export default StudentMyPage;