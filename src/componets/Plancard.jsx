import { Avatar, Box, Card, CardContent, Grid } from "@mui/material";

function PlanCard(params) {



    return (
        <div>

            <Grid container textAlign={"center"} justifyContent={"center"}>
                <Grid item xs={12} >
                    <Card variant="outlined">
                        <CardContent>
                            <Box xs={{}}>
                                <Avatar sx={{ width: 50, height: 50 }}></Avatar>

                            </Box>
                            <div>山田太郎</div>

                        </CardContent>
                    </Card>


                </Grid>


            </Grid>


        </div>
    )

}
export default PlanCard;