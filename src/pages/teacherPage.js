import * as React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


function TeacherPage(){

    const [crops, setCrops] = React.useState();
  
    const handleChange1 = (event) => {
        setCrops(event.target.value);
  
    };

    const [area, setArea] = React.useState();
  
    const handleChange2 = (event) => {
        setArea(event.target.value);
  
    };

    const [prefectures, setPrefectures] = React.useState();
  
    const handleChange3 = (event) => {
        setPrefectures(event.target.value);
  
    };
    return(
      <div>
        <Grid container maxWidth={"xs"} justifyContent={"center"}>
  
          <Grid item xs={12} md={7} justifyContent={"center"} textAlign={"center"} margin={2}>
              <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField id="first_name" label="姓" variant="outlined" fullWidth></TextField>
                  </Grid>
  
                  <Grid item xs={6}>
                    <TextField id="last_name" label="名" variant="outlined" fullWidth></TextField>
                  </Grid>
              </Grid>
          </Grid>
  
          <Grid item xs={12} md={7} margin={2}>
            <TextField id="phone_number" label="電話番号" variant="outlined" fullWidth></TextField>
          </Grid>
  
          <Grid item xs={12} md={7} margin={2}>
                  <FormControl variant="outlined" fullWidth>
                      <InputLabel id="crops-label">取り扱い作物選択</InputLabel>
                      <Select
                          variant="outlined"
                          labelId="crops-label"
                          id="crops"
                          value={crops}
                          label="取り扱い作物選択"
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
  
          <Grid item xs={12} md={7} margin={2}>
                  <FormControl variant="outlined" fullWidth>
                      <InputLabel id="area-label">活動地域選択</InputLabel>
                      <Select
                          variant="outlined"
                          labelId="area-label"
                          id="area"
                          value={area}
                          label="活動地域選択"
                          displayEmpty
                          onChange={handleChange2}
                      >
                          <MenuItem value={"aizu"}>会津地域</MenuItem>
                          <MenuItem value={"south_aizu"}>南会津地域</MenuItem>
  
                          <MenuItem value={"sousou"}>相双地域</MenuItem>
                          <MenuItem value={"iwaki"}>いわき地域</MenuItem>
  
                          <MenuItem value={"prefecture_north"}>県北地域</MenuItem>
                          <MenuItem value={"prefecture_inside"}>県中地域</MenuItem>
                          <MenuItem value={"prefecture_south"}>県南地域</MenuItem>
                      </Select>
                  </FormControl>
          </Grid>
  
          <Grid item xs={12} md={7} margin={2}>
            <TextField id="postal_code" label="郵便番号" variant="outlined" fullWidth></TextField>
          </Grid>
  
          <Grid item xs={12} md={7} margin={2}>
                  <FormControl variant="outlined" fullWidth>
                      <InputLabel id="prefectures-label">都道府県</InputLabel>
                      <Select
                          variant="outlined"
                          labelId="prefectures-label"
                          id="prefectures"
                          value={prefectures}
                          label="都道府県"
                          displayEmpty
                          onChange={handleChange3}
                      >
                          <MenuItem value={"01"}>北海道</MenuItem>
  
                          <MenuItem value={"02"}>青森県</MenuItem>
                          <MenuItem value={"03"}>岩手県</MenuItem>
                          <MenuItem value={"04"}>宮城県</MenuItem>
                          <MenuItem value={"05"}>秋田県</MenuItem>
                          <MenuItem value={"06"}>山形県</MenuItem>
                          <MenuItem value={"07"}>福島県</MenuItem>
  
                          <MenuItem value={"08"}>茨木県</MenuItem>
                          <MenuItem value={"09"}>栃木県</MenuItem>
                          <MenuItem value={"10"}>群馬県</MenuItem>
                          <MenuItem value={"11"}>埼玉県</MenuItem>
                          <MenuItem value={"12"}>千葉県</MenuItem>
                          <MenuItem value={"13"}>東京都</MenuItem>
                          <MenuItem value={"14"}>神奈川県</MenuItem>
  
                          <MenuItem value={"15"}>新潟県</MenuItem>
                          <MenuItem value={"16"}>富山県</MenuItem>
                          <MenuItem value={"17"}>石川県</MenuItem>
                          <MenuItem value={"18"}>福井県</MenuItem>
                          <MenuItem value={"19"}>山梨県</MenuItem>
                          <MenuItem value={"20"}>長野県</MenuItem>
                          <MenuItem value={"21"}>岐阜県</MenuItem>
                          <MenuItem value={"22"}>静岡県</MenuItem>
                          <MenuItem value={"23"}>愛知県</MenuItem>
  
                          <MenuItem value={"24"}>三重県</MenuItem>
                          <MenuItem value={"25"}>滋賀県</MenuItem>
                          <MenuItem value={"26"}>京都府</MenuItem>
                          <MenuItem value={"27"}>大阪府</MenuItem>
                          <MenuItem value={"28"}>兵庫県</MenuItem>
                          <MenuItem value={"29"}>奈良県</MenuItem>
                          <MenuItem value={"30"}>和歌山県</MenuItem>
  
                          <MenuItem value={"31"}>鳥取県</MenuItem>
                          <MenuItem value={"32"}>島根県</MenuItem>
                          <MenuItem value={"33"}>岡山県</MenuItem>
                          <MenuItem value={"34"}>広島県</MenuItem>
                          <MenuItem value={"35"}>山口県</MenuItem>
  
                          <MenuItem value={"36"}>徳島県</MenuItem>
                          <MenuItem value={"37"}>香川県</MenuItem>
                          <MenuItem value={"38"}>愛媛県</MenuItem>
                          <MenuItem value={"39"}>高知県</MenuItem>
  
                          <MenuItem value={"40"}>福岡県</MenuItem>
                          <MenuItem value={"41"}>佐賀県</MenuItem>
                          <MenuItem value={"42"}>長崎県</MenuItem>
                          <MenuItem value={"43"}>熊本県</MenuItem>
                          <MenuItem value={"44"}>大分県</MenuItem>
                          <MenuItem value={"45"}>宮崎県</MenuItem>
                          <MenuItem value={"46"}>鹿児島県</MenuItem>
                          <MenuItem value={"47"}>沖縄県</MenuItem>
                          
                      </Select>
                  </FormControl>
          </Grid>
  
          <Grid item xs={12} md={7} margin={2}>
            <TextField id="city_block" label="市区町村・番地" variant="outlined" fullWidth></TextField>
          </Grid>
  
          <Grid item xs={12} md={7} margin={2}>
            <TextField id="address_option" label="建物名・部屋番号" variant="outlined" fullWidth></TextField>
          </Grid>
  
          <Grid item xs={12} md={7} margin={2}>
            <TextField id="self_introduction" label="自己紹介" variant="outlined" fullWidth multiline rows={5}></TextField>
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
  
      </div>
    );
  }
  
  
  
  export default TeacherPage;