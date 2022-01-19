import * as React from 'react';
import ReactDOM from 'react-dom';
import { Box, Toolbar, MenuItem, Menu, Typography, Button, AppBar, IconButton, FormGroup, FormControlLabel, Switch } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Header() {
    const [LoginAnchorEl, setLoginAnchorEl] = React.useState(null);
    const [LogoutAnchorEl, setLogoutAnchorEl] = React.useState(null);
    const auth = React.useState(true);

    const isLoginMenuOpen = Boolean(LoginAnchorEl);
    const isLogoutMenuOpen = Boolean(LogoutAnchorEl);

    const MenuClose = () => {
        setLoginAnchorEl(null);
        setLogoutAnchorEl(null);
        MenuClose();
    };

    const LoginMenuOpen = (event) => {
        setLoginAnchorEl(event.currentTarget);
    };

    const LogoutMenuOpen = (event) => {
        setLogoutAnchorEl(event.currentTarget);
    };
    const LogoutMenuId = 'Logout';
    const LogoutMenu = (
        <Menu
            LogoutAnchorEl={LogoutAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={LogoutMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isLogoutMenuOpen}
            onClose={MenuClose}
        >
            <MenuItem>
                <a>作物を探す</a>
                <SearchIcon />
            </MenuItem>
            <MenuItem>
                <a>新規登録</a>
            </MenuItem>
            <MenuItem>
                <a>ログイン</a>
            </MenuItem>
        </Menu>
    );
    const LoginMenuId = 'Login';
    const LoginMenu = (
        <Menu
            LoginAnchorEl={LoginAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={LoginMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isLoginMenuOpen}
            onClose={MenuClose}
        >
            <MenuItem>
                <a >作物を探す</a>
                <SearchIcon />
            </MenuItem>
            <MenuItem>
                <a >マイページ</a>
            </MenuItem>
            <MenuItem>
                <a>ログアウト</a>
            </MenuItem>
        </Menu>
    );
    /*動作確認用 */
    const setAuth = React.useState(true);
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    return (
        <Box sx={{ flexGrow: 1 }} spacing={2}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={1}
                    >
                    </Typography>
                    <Button variant="Outlined" ml={4} >作物を探す
                        <SearchIcon />
                    </Button>
                    {auth ? (
                        <div>
                            <Button variant='outlined' mx={1} >
                                マイページ
                            </Button>
                            <Button variant="Outlined" mx={1}  >
                                ログアウト
                            </Button>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls='LoginMenu'
                                    aria-haspopup="true"
                                    onClick={LoginMenuOpen}

                                >
                                    <MoreVertIcon />
                                </IconButton>
                            </Box>
                        </div>
                    ) : (
                        <div>
                            <Button variant="Outlined" mx={1} >
                                新規登録
                            </Button>
                            <Button variant="Outlined" mx={1} >
                                ログイン
                            </Button>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={LogoutMenu}
                                    aria-haspopup="true"
                                    onClick={LogoutMenuOpen}

                                >
                                    <MoreVertIcon />
                                </IconButton>
                            </Box>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            {LoginMenu}
            {LogoutMenu}
            {/*動作確認*/}
            <Box>
                動作確認用
            </Box>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={auth}
                            onChange={handleChange}
                            aria-label="login switch"
                        />
                    }
                    label={auth ? 'Logout' : 'Login'}
                />
            </FormGroup>
            {/*動作確認*/}
        </Box >

    );

}
export default Header;