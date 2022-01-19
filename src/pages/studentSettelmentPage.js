import * as React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


function StudentSettlementPage() {
    return (
      <div>
        <Grid container maxWidth={"xs"} justifyContent={"center"} textAlign={"center"}>
  
          <Grid item xs={12} md={7} margin={2}>
            申し込み規約
          </Grid>
  
  
  
          <Grid item xs={12} md={7} margin={2}>
  
            Amazon.co.jp へようこそ.米国の法人であるAmazon.com Services LLC および/またはその関連会社（以下総称して「アマゾン」といいます）は、以下の規約に基づいて、お客様にサービスを提供いたします。お客様がAmazon.co.jp をご利用になる場合、Amazon.co.jp で商品を購入される場合、アマゾンのサイト機能やサービスやモバイルアプリをご利用になる場合、またはこれらのサービスに伴ってアマゾンにより提供されるソフトウエアをご利用になる場合、アマゾンは本利用規約に基づいてお客様にサービス・商品または機能を提供します（以下総称して「アマゾンサービス」といいます）。アマゾンサービスを利用することにより、お客様は本利用規約に同意することになりますので、以下を注意してお読みください。アマゾンサービスは多岐にわたるため、追加の規定や条件が適用されることがあります。例えば、お客様がプロフィール機能、Amazonギフト券、Amazonビデオ、アマゾン端末またはアマゾンのモバイル向けアプリ等のアマゾンサービスをご利用になる場合、当該アマゾンサービスのガイドラインやサービス規約（総称して「サービス規約」といいます）が適用されます。本利用規約とサービス規約に齟齬がある場合には、サービス規約の規定が優先するものとします。
            <br></br>
            プライバシーについて
            プライバシー規約は、お客様がアマゾンサービスを利用される場合にも適用されますので、お読みになり、ご理解いただきますようお願いいたします。
            <br></br>
            電子的コミュニケーション
            <br></br>
            アマゾンサービスをご利用になる場合、または、アマゾン にEメール、テキストメッセージ、いずれかのデバイスからその他のコミュニケ―ションを送信される場合は、お客様はアマゾン と電子的にコミュニケーションをとっていることになります。お客様は、アマゾンからEメール、テキストメッセージ、モバイルのプッシュ通知または当サイトにお知らせ、メッセージを掲載する方法またはアマゾン・メッセージセンターなど他のアマゾンサービスを通じて様々な電子的な方法でのご連絡（以下かかるアマゾン からお客様へのご連絡を総称して、「電子的通知」といいます。）を受けることに同意するものとします。お客様は、 全ての合意、お知らせ、メッセージ、情報開示その他のご連絡をアマゾン がお客様に電子的通知により行うことをもって、かかるご連絡を書面で行うことを求める法的要請を充たしているものとすることに同意することとします。
            <br></br>
            著作権
            <br></br>
            アマゾンサービスを通じて提供されるすべてのコンテンツ（文字、グラフィック、ロゴ、ボタンアイコン、画像、オーディオクリップ、デジタル形式で
            ・<br></br>・<br></br>・<br></br>・<br></br>・<br></br>・<br></br>・<br></br>
            <br></br>
            サイト運営者
            <br></br>
            Amazon.com Services LLC
            <br></br>
            PO Box 8102, Reno, NV 89507 USA
            <br></br>
            USA
            <br></br>
            日本でのお問い合わせ先
            <br></br>
            アマゾンジャパン合同会社
            <br></br>
            東京都目黒区下目黒1-8-1
            <br></br>
            〒153-0064
            <br></br>
          </Grid>
          
          <Grid item xs={12} md={7} margin={2}>
            <FormControl component="fieldset">
              <RadioGroup row aria-label="consent" name="row-radio-buttons-group">
                <FormControlLabel value="agree" control={<Radio />} label="同意する" />
                <FormControlLabel value="disagree" control={<Radio />} label="同意しない" />
              </RadioGroup>
            </FormControl>
          </Grid>
  
          <Grid item xs={12} md={7} margin={2}>
            <TextField id="card_number" label="カード番号" variant="outlined" fullWidth></TextField>
          </Grid>
  
          <Grid item xs={12} md={7} margin={2}>
            <TextField id="card_holder" label="カード名義" variant="outlined" fullWidth></TextField>
          </Grid>
  
          <Grid item xs={12} md={7} justifyContent={"center"} textAlign={"center"} margin={2}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField id="expiry" label="有効期限" variant="outlined" fullWidth></TextField>
              </Grid>
  
              <Grid item xs={6}>
                <TextField id="ccv" label="CCV" variant="outlined" fullWidth></TextField>
              </Grid>
            </Grid>
          </Grid>
  
          <Grid item xs={12} md={7} justifyContent={"center"} textAlign={"center"}>
            <Grid container justifyContent={"center"} textAlign={"center"}>
              <Grid item xs={4} margin={2}>
                <Button variant="outlined" fullWidth>キャンセル</Button>
              </Grid>
              <Grid item xs={4} margin={2}>
                <Button variant="contained" fullWidth>購入</Button>
              </Grid>
            </Grid>
          </Grid>
  
        </Grid>
      </div>
    );
  }
  
  
  export default StudentSettlementPage;