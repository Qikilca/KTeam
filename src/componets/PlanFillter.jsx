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
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: 200,
                    justifyContent: "flex-start",

                }}>
                <Toolbar sx={{
                    display: "block",
                    border:1,
                    marginTop:1
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
                    border:1,
                    marginTop:1

                }}>
                    <Typography textAlign={"center"} variant="h5">
                        作物選択
                    </Typography>

                    <Typography variant="h6">
                        穀類
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
                    border:1,
                    marginTop:1

                }}>
                    <Typography textAlign={"center"} variant="h5">
                        作物選択
                    </Typography>

                    <Typography variant="h6">
                        穀類
                    </Typography>

                    <FormGroup sx={{ flexDirection: 'row' }}>
                        <FormControlLabel control={<Checkbox />} label="シイタケ" name='シイタケ' />
                        <FormControlLabel control={<Checkbox />} label="なめこ" name='なめこ' />
                    </FormGroup>

                    <Typography variant="h6">
                        キノコ類
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
            </AppBar>


        </>
    )

}

export default PlanFillter;