import * as React from 'react';
import Grid from '@mui/material/Grid'
import { maxHeight, width } from '@mui/system';
import { FormGroup, Typography, Toolbar, AppBar, FormControlLabel, Checkbox } from '@mui/material';
import { BorderAll } from '@mui/icons-material';

function PlanFillter() {


    return (

        <>
            <AppBar position="static" color="default"
                sx={{
                    flexDirection: "column",
                    height: "100%",
                    width: 200,
                    display: { xs: 'none', md: 'flex' }

                }}>
                <Toolbar sx={{
                    display: "block",
                    border: 1,
                    marginTop: 1
                }}>
                    <Typography textAlign={"center"} variant="h5">
                        地域選択
                    </Typography>

                    <Typography variant="h6">
                        会津
                    </Typography>

                    <FormGroup sx={{ flexDirection: 'row' }}>
                        <FormControlLabel control={<Checkbox />} label="会津地域" name='会津地域' />
                        <FormControlLabel control={<Checkbox />} label="南会津地域" name='南会津地域' />
                    </FormGroup>

                    <Typography variant="h6">
                        浜通り
                    </Typography>

                    <FormGroup sx={{ flexDirection: 'row' }}>
                        <FormControlLabel control={<Checkbox />} label="相双地域" />
                        <FormControlLabel control={<Checkbox />} label="いわき地域" />
                    </FormGroup>

                    <Typography variant="h6">
                        中通り
                    </Typography>

                    <FormGroup sx={{ flexDirection: 'row' }}>
                        <FormControlLabel control={<Checkbox />} label="県北地域" />
                        <FormControlLabel control={<Checkbox />} label="県中地域" />
                        <FormControlLabel control={<Checkbox />} label="県南地域" />
                    </FormGroup>
                </Toolbar>


                <Toolbar sx={{
                    display: "block",
                    border: 1,
                    marginTop: 1

                }}>
                    <Typography textAlign={"center"} variant="h5">
                        作物選択
                    </Typography>

                    <Typography variant="h6">
                        穀類
                    </Typography>

                    <FormGroup sx={{ flexDirection: 'row' }}>
                        <FormControlLabel control={<Checkbox />} label="米" name='米' />
                        <FormControlLabel control={<Checkbox />} label="トウモロコシ" name='トウモロコシ' />
                        <FormControlLabel control={<Checkbox />} label="そば" name='そば' />

                    </FormGroup>

                    <Typography variant="h6">
                        キノコ類
                    </Typography>

                    <FormGroup sx={{ flexDirection: 'row' }}>
                        <FormControlLabel control={<Checkbox />} label="しいたけ" />
                        <FormControlLabel control={<Checkbox />} label="なめこ" />
                    </FormGroup>

                    <Typography variant="h6">
                        果樹類
                    </Typography>

                    <FormGroup sx={{ flexDirection: 'row' }}>
                        <FormControlLabel control={<Checkbox />} label="モモ" name='モモ' />
                        <FormControlLabel control={<Checkbox />} label="ナシ" name='ナシ' />
                        <FormControlLabel control={<Checkbox />} label="サクランボ" name='サクランボ' />
                        <FormControlLabel control={<Checkbox />} label="ブドウ" name="ブドウ" />
                        <FormControlLabel control={<Checkbox />} label="カキ" name="カキ" />
                        <FormControlLabel control={<Checkbox />} label="リンゴ" name="リンゴ" />
                    </FormGroup>

                    <Typography variant="h6">
                        野菜類
                    </Typography>

                    <FormGroup sx={{ flexDirection: 'row' }}>
                        <FormControlLabel control={<Checkbox />} label="インゲン" name='インゲン' />
                        <FormControlLabel control={<Checkbox />} label="キュウリ" name='キュウリ' />
                        <FormControlLabel control={<Checkbox />} label="トマト" name='トマト' />
                        <FormControlLabel control={<Checkbox />} label="サヤエンドウ" name="サヤエンドウ" />
                        <FormControlLabel control={<Checkbox />} label="ナス" name="ナス" />
                        <FormControlLabel control={<Checkbox />} label="ピーマン" name="ピーマン" />
                        <FormControlLabel control={<Checkbox />} label="ホウレンソウ" name="ホウレンソウ" />
                        <FormControlLabel control={<Checkbox />} label="ネギ" name="ネギ" />
                        <FormControlLabel control={<Checkbox />} label="玉ねぎ" name="玉ねぎ" />
                    </FormGroup>

                </Toolbar>


                <Toolbar sx={{
                    display: "block",
                    border: 1,
                    marginTop: 1

                }}>
                    <Typography textAlign={"center"} variant="h5">
                        価格選択
                    </Typography>

                    <FormGroup sx={{ flexDirection: 'row' }}>
                        <FormControlLabel control={<Checkbox />} label="0～3000円" name='0～3000円' />
                        <FormControlLabel control={<Checkbox />} label="3000～5000円" name='3000～5000円' />
                        <FormControlLabel control={<Checkbox />} label="5000～10000円" name='5000～10000円' />
                        <FormControlLabel control={<Checkbox />} label="10000円～" name='10000円～' />
                    </FormGroup>
                </Toolbar>
            </AppBar>


        </>
    )

}

export default PlanFillter;