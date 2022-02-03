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
import Image from 'next/image';
import reactDom from 'react-dom';
import Router from "next/router"
import Header from '../components/Header';


function planCreate() {
    //作物選択
    const [crops, setCrops] = React.useState("");
    const handleChange1 = (event) => {
        setCrops(event.target.value);

    };
    //開催地選択
    const [area, setArea] = React.useState("");
    const handleChange2 = (event) => {
        setArea(event.target.value);

    };

    //カレンダー
    const [dates, setValue] = React.useState([null, null]);

    //  画像アップロード
    const Input = styled('input')({
        display: 'none'
    });

    //タイトル
    const [title, setTitle] = React.useState("");

    //開催場所
    const [place, setPlace] = React.useState("");

    //定員
    const [capacity, setCapacity] = React.useState(0);

    //料金
    const [fee, setFee] = React.useState(0);

    //プラン概要
    const [description, setDescription] = React.useState("");

    //写真
    const [image, setImage] = React.useState();

    const [isPublic, setIsPublic] = React.useState("false");


    const submitData = async event => {
        event.preventDefault();

        try {

            const body = {
                title,
                crops,
                area,
                place,
                dates,
                capacity,
                fee,
                description,
                isPublic
            };

            await fetch("api/post", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            await Router.push("/managementPlan")
        } catch (e) {
            console.error(e);
        }

    }



    return (
        <div>

            <Header></Header>

            <form method='POST' onSubmit={submitData}>
                <Grid container maxWidth={"xs"} justifyContent={"center"} >

                    <Grid item xs={12} md={7} margin={2} >
                        <TextField
                            id="plan_name"
                            label="プラン名"
                            variant="outlined"
                            fullWidth
                            value={title}
                            onChange={
                                (e) => setTitle(e.target.value)
                            }
                        />
                    </Grid>

                    <Grid item xs={12} md={7} margin={2} >
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
                                <MenuItem value={"米"}>米</MenuItem>
                                <MenuItem value={"トウモロコシ"}>トウモロコシ</MenuItem>
                                <MenuItem value={"そば"}>そば</MenuItem>

                                <MenuItem value={"しいたけ"}>しいたけ</MenuItem>
                                <MenuItem value={"なめこ"}>なめこ</MenuItem>

                                <MenuItem value={"モモ"}>モモ</MenuItem>
                                <MenuItem value={"ナシ"}>ナシ</MenuItem>
                                <MenuItem value={"サクランボ"}>サクランボ</MenuItem>
                                <MenuItem value={"ブドウ"}>ブドウ</MenuItem>
                                <MenuItem value={"柿"}>柿</MenuItem>
                                <MenuItem value={"リンゴ"}>リンゴ</MenuItem>

                                <MenuItem value={"インゲン"}>インゲン</MenuItem>
                                <MenuItem value={"キュウリ"}>キュウリ</MenuItem>
                                <MenuItem value={"トマト"}>トマト</MenuItem>
                                <MenuItem value={"サヤエンドウ"}>サヤエンドウ</MenuItem>
                                <MenuItem value={"ナス"}>ナス</MenuItem>
                                <MenuItem value={"ピーマン"}>ピーマン</MenuItem>
                                <MenuItem value={"ホウレンソウ"}>ホウレンソウ</MenuItem>
                                <MenuItem value={"ネギ"}>ネギ</MenuItem>
                                <MenuItem value={"玉ねぎ"}>玉ねぎ</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} md={7} margin={2} >
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="area-label">開催地域選択</InputLabel>
                            <Select
                                variant="outlined"
                                labelId="area-label"
                                id="area"
                                value={area}
                                label="開催地域選択"
                                displayEmpty
                                onChange={handleChange2}
                            >
                                <MenuItem value={"会津地域"}>会津地域</MenuItem>
                                <MenuItem value={"南会津地域"}>南会津地域</MenuItem>

                                <MenuItem value={"相双地域"}>相双地域</MenuItem>
                                <MenuItem value={"いわき地域"}>いわき地域</MenuItem>

                                <MenuItem value={"県北地域"}>県北地域</MenuItem>
                                <MenuItem value={"県中地域"}>県中地域</MenuItem>
                                <MenuItem value={"県南地域"}>県南地域</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} md={7} margin={2} >
                        <TextField id="place" label="開催地の住所" variant="outlined" fullWidth value={place} onChange={(e) => setPlace(e.target.value)} />
                    </Grid>

                    <Grid item xs={12} md={7} margin={2}  >
                        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>

                            <DateRangePicker
                                startText="開催期間 開始日"
                                endText="終了日"
                                value={dates}
                                okText="決定"
                                cancelText="キャンセル"


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
                            type={"number"}
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">人</InputAdornment>,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={7} justifyContent={"center"} mx={2} margin={2}>
                        <TextField
                            label="料金設定"
                            id="price"
                            type={"number"}
                            value={fee}
                            onChange={(e) => setFee(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">円</InputAdornment>,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={7} margin={2}>
                        <TextField
                            id="plan-overview"
                            label="プラン概要"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={5}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        >

                        </TextField>
                    </Grid>

                    <Grid item xs={12} md={7} margin={2}>
                        <FormControl>
                            <FormLabel id="publishing-settings">公開設定</FormLabel>
                            <RadioGroup
                                color='black'
                                defaultValue="open"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value={"true"}
                                    checked={isPublic === "true"}
                                    onChange={(e) => setIsPublic(e.target.value)}
                                    control={<Radio />}
                                    label="公開する"
                                />

                                <FormControlLabel
                                    value={"false"}
                                    checked={isPublic === "false"}
                                    onChange={(e) => setIsPublic(e.target.value)}
                                    control={<Radio />}
                                    label="公開しない"
                                />

                            </RadioGroup>
                        </FormControl>
                    </Grid>


                    <Grid item xs={12} md={7} margin={2}>

                        <img>
                        </img>

                    </Grid>


                    <Grid item xs={12} md={7} margin={2}>
                        <label htmlFor="upload-image-file">
                            <Input accept="image/*" id="upload-image-file" multiple type="file" />

                            <Button variant="contained" component="span">
                                画像をアップロード
                                <AddPhotoAlternateIcon />
                            </Button>
                        </label>
                    </Grid>



                    <Grid item xs={12} md={7} justifyContent={"center"} textAlign={"center"}>
                        <Grid container justifyContent={"center"} textAlign={"center"}>
                            <Grid item xs={4} margin={2}>
                                <Button variant="outlined" fullWidth onClick={() => Router.back()}>キャンセル</Button>
                            </Grid>
                            <Grid item xs={4} margin={2}>
                                <Button variant="contained" type='submit' fullWidth>作成</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </form>
        </div >
    );

}



export default planCreate