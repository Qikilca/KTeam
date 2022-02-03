import { Select, Grid, InputLabel, MenuItem, TextField, FormControl, Divider, Button } from "@mui/material";
import { render } from "react-dom";
import * as React from 'react';
import Footer from "../components/footer";
import { Box } from "@mui/system";
import { withThemeCreator } from "@material-ui/styles";



function Contact() {

    const [category, setCategory] = React.useState();

    const handleChange = (event) => {
        setCategory(event.target.value);

    };

    return (

        <form method="post">
            <Grid container maxWidth={"xs"} justifyContent={"center"}>

                <Grid item xs={12} md={7} margin={2}>
                    <TextField id="input-name" label="名前" variant="outlined" fullWidth></TextField>
                </Grid>

                <Grid item xs={12} md={7} margin={2}>
                    <TextField id="input-email" label="メールアドレス" variant="outlined" fullWidth></TextField>
                </Grid>

                <Grid item xs={12} md={7} margin={2}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel id="category-label">カテゴリー</InputLabel>
                        <Select
                            variant="outlined"
                            labelId="category-label"
                            id="category"
                            value={category}
                            label="カテゴリー"
                            displayEmpty
                            onChange={handleChange}
                        >

                            <MenuItem value={"カテゴリー1"}>カテゴリー1</MenuItem>
                            <MenuItem value={"カテゴリー2"}>カテゴリー2</MenuItem>
                            <MenuItem value={"カテゴリー3"}>カテゴリー3</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>

                <Grid item xs={12} md={7} margin={2}>
                    <TextField
                        id="input-title"
                        label="タイトル"
                        variant="outlined"
                        fullWidth
                    >
                    </TextField>
                </Grid>

                <Grid item xs={12} md={7} margin={2}>
                    <TextField
                        id="input-contact-detail"
                        label="お問い合わせ内容"
                        variant="outlined"
                        rows={2}
                        multiline
                        fullWidth
                    >
                    </TextField>

                </Grid>

                <Grid item xs={12} md={7} margin={4} justifyContent={"center"} textAlign={"center"}>
                    <Grid container justifyContent={"center"} textAlign={"center"}>
                        <Grid item xs={3} marginRight={4}>
                            <Button variant="contained" fullWidth>キャンセル</Button>
                        </Grid>
                        <Grid item xs={3} marginLeft={4} >
                            <Button variant="contained" type="submit" fullWidth>送信</Button>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid >

        </form>
    )
}

export default Contact;