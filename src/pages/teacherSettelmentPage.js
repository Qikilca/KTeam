import * as React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function TeacherSettlementPage() {
  return (
    <div>
      <Grid container maxWidth={"xs"} justifyContent={"center"} textAlign={"center"}>

        <Grid item xs={12} md={7} margin={2}>
          受取口座 登録/変更
        </Grid>

        <Grid item xs={12} md={7} margin={2}>
          <TextField id="financial_facility" label="金融機関名 ※必須" variant="outlined" fullWidth helperText="【全角】例）〇〇銀行"></TextField>
        </Grid>

        <Grid item xs={12} md={7} margin={2}>
          <TextField id="branch_name" label="支店名 ※必須" variant="outlined" fullWidth helperText="【全角】例）〇〇支店"></TextField>
        </Grid>

        <Grid item xs={12} md={7} margin={2}>
          <FormControl component="fieldset">
            <FormLabel component="legend">口座種別 ※必須</FormLabel>
            <RadioGroup row aria-label="account">
              <FormControlLabel value="nomal_bank" control={<Radio />} label="普通" />
              <FormControlLabel value="current_bank" control={<Radio />} label="当座" />
              <FormControlLabel value="other_bank" control={<Radio />} label="その他" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={7} margin={2}>
          <TextField id="bank_account_number" label="口座番号 ※必須" variant="outlined" fullWidth helperText="【半角数字】例）1234567890"></TextField>
        </Grid>

        <Grid item xs={12} md={7} margin={2}>
          <TextField id="account_holder" label="口座名義 ※必須" variant="outlined" fullWidth helperText=" 【全角カナ】例）ノウギョウタロウ"></TextField>
        </Grid>

        <Grid item xs={12} md={7} margin={2}>
          利用規約に同意のうえ、口座登録を行います。
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


export default TeacherSettlementPage;
