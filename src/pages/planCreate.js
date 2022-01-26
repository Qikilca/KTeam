import * as React from 'react';
import ReactDOM from 'react-dom';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {
    TextField,
    Button,
    Box,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    InputAdornment,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    styled

} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import ja from "date-fns/locale/ja";


function planCreate() {
    //作物選択
    const [crops, setCrops] = React.useState();
    const handleChange1 = (event) => {
        setCrops(event.target.value);

    };

    //カレンダー
    const [value, setValue] = React.useState([null, null]);

    //  画像アップロード
    const Input = styled('input')({
        display: 'none'
    });




    return (
        <div>
            <Grid container maxWidth={"xs"} justifyContent={"center"} >

                <Grid item xs={12} md={7} margin={2} >
                    <TextField id="plan_name" label="プラン名" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} md={7} margin={2}  >
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel id="crops-label">作物選択</InputLabel>
                        <Select
                            variant="outlined"
                            labelId="crops-label"
                            id="crops"
                            value={crops}
                            label="作物選択"
                            displayEmpty
                            onChange={handleChange1}
                        >
                            <MenuItem value={"rice"}>米</MenuItem>
                            <MenuItem value={"corn"}>トウモロコシ</MenuItem>
                            <MenuItem value={"soba"}>そば</MenuItem>

                            <MenuItem value={"shiitake"}>しいたけ</MenuItem>
                            <MenuItem value={"nameko"}>なめこ</MenuItem>

                            <MenuItem value={"peach"}>桃</MenuItem>
                            <MenuItem value={"pear"}>梨</MenuItem>
                            <MenuItem value={"cherry"}>さくらんぼ</MenuItem>
                            <MenuItem value={"grapes"}>ブドウ</MenuItem>
                            <MenuItem value={"persimmon"}>柿</MenuItem>
                            <MenuItem value={"apple"}>リンゴ</MenuItem>

                            <MenuItem value={"green_beans"}>インゲン</MenuItem>
                            <MenuItem value={"cucumber"}>キュウリ</MenuItem>
                            <MenuItem value={"tomato"}>トマト</MenuItem>
                            <MenuItem value={"snow_peas"}>サヤエンドウ</MenuItem>
                            <MenuItem value={"eggplant"}>ナス</MenuItem>
                            <MenuItem value={"green_pepper"}>ピーマン</MenuItem>
                            <MenuItem value={"spinach"}>ほうれんそう</MenuItem>
                            <MenuItem value={"leek"}>ネギ</MenuItem>
                            <MenuItem value={"onion"}>玉ねぎ</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={7} margin={2} >
                    <TextField id="place" label="開催地詳細" variant="outlined" fullWidth />

                </Grid>
                <Grid item xs={12} md={7} margin={2}  >
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>

                        <DateRangePicker
                            startText="開催期間 開始日"
                            endText="終了日"
                            value={value}

                            onChange={(newValue) => {
                                setValue(newValue);

                            }}

                            renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                    <TextField {...startProps} />
                                    <Box sx={{ mx: 2 }}> ～ </Box>
                                    <TextField {...endProps} />
                                </React.Fragment>
                            )}
                        />

                    </LocalizationProvider>
                </Grid>

                <Grid item xs={12} md={7} justifyContent={"center"} mx={2} >
                    <TextField
                        label="定員人数"
                        id="max-capacity"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">人</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={7} justifyContent={"center"} mx={2} margin={2}>
                    <TextField
                        label="料金設定"
                        id="price"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={7} margin={2}>
                    <TextField id="plan-overview" label="プラン概要" variant="outlined" fullWidth multiline rows={5}></TextField>
                </Grid>
                <Grid item xs={12} md={7} margin={2}>
                    <FormControl>
                        <FormLabel id="publishing-settings">公開設定</FormLabel>
                        <RadioGroup
                            color='black'
                            defaultValue="open"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="open" control={<Radio />} label="公開する" />
                            <FormControlLabel value="close" control={<Radio />} label="公開しない" />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={7} margin={2}>
                </Grid>
                <Grid item xs={12} md={7} margin={2}>
                    <label htmlFor="upload-image-file">
                        <Button variant="contained" component="span">
                            <Input accept="image/*" id="upload-image-file" multiple type="file" />
                            画像をアップロード
                            <AddPhotoAlternateIcon />
                        </Button>
                    </label>
                </Grid>



                <Grid item xs={12} md={7} justifyContent={"center"} textAlign={"center"}>
                    <Grid container justifyContent={"center"} textAlign={"center"}>
                        <Grid item xs={4} margin={2}>
                            <Button variant="outlined" fullWidth>キャンセル</Button>
                        </Grid>
                        <Grid item xs={4} margin={2}>
                            <Button variant="contained" fullWidth>作成</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    );

}
export default planCreate