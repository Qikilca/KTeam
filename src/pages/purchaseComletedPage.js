import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from 'next/image'

function PurchaseCompletedPage() {
  return (
    <div>
      <Grid container maxWidth={"xs"} justifyContent={"center"} textAlign={"center"}>
        <Grid item xs={12} md={7} margin={2}>
          <Image src="/img/settelment.png" width={944} height={505} alt="決済画面画像" />
        </Grid>

        <Grid item xs={12} md={7} margin={2}>
          トップページに戻る場合は「トップページへ戻る」を、
          <br></br>
          引き続きプランをご覧になられる場合は「プラン一覧」を、
          <br></br>
          購入したプランを確認される場合は「マイプランを確認する」を。
          <br></br>
          購入したプランはマイページ内の「マイプラン」でも確認できます。
        </Grid>

        <Grid item xs={12} md={7} justifyContent={"center"} textAlign={"center"}>
          <Grid container justifyContent={"center"} textAlign={"center"}>
            <Grid item xs={3} margin={2}>
              <Button variant="outlined" fullWidth>トップページへ戻る</Button>
            </Grid>
            <Grid item xs={3} margin={2}>
              <Button variant="contained" fullWidth>プラン一覧へ戻る</Button>
            </Grid>
            <Grid item xs={3} margin={2}>
              <Button variant="contained" fullWidth>マイプランを確認する</Button>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}

export default PurchaseCompletedPage;