import * as React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from "@mui/material";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

//ボタンのラベルと遷移先の2次元配列
const pages = [
    ["トップページ", "/"],
    ["プランを探す", "/searchPlan"],
    ["新規登録", "/registerPage"]
];

const settings = ["マイページ", "ログアウト"]

function Test() {

    const { data: session } = useSession();

    /**
     * React Hooksを使ったログイン状態の保存変数
     * Trueならログイン状態、Falseならログアウト状態
     */
    const auth = false;

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/**画面が大きい時のロゴ */}
                    <Link href={"/"}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            ふくのう
                        </Typography>
                    </Link>


                    {/**画面が小さい時のメニューバー */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page[0]} onClick={handleCloseNavMenu}>
                                    <Link href={page[1]}>

                                        <Typography textAlign="center">
                                            {page[0]}
                                        </Typography>
                                    </Link>

                                </MenuItem>

                            ))}

                            {!session && (
                                <>
                                    <MenuItem key={"ログイン"} onClick={handleCloseNavMenu}>
                                        <Link href={"/loginPage"}>
                                            <Typography textAlign="center">
                                                ログイン
                                            </Typography>
                                        </Link>

                                    </MenuItem>

                                    <MenuItem key={"next-auth"} onClick={handleCloseNavMenu}>
                                        <Link href={"/api/auth/signin/google/"}>
                                            <Typography textAlign="center">
                                                next-auth
                                            </Typography>
                                        </Link>

                                    </MenuItem>


                                </>
                            )}
                        </Menu>
                    </Box>

                    {/**画面が小さい時のロゴ */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        ふくのう
                    </Typography>

                    {/**画面が大きい時のメニューボタン */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            //リンクで囲って画面遷移を実装にする
                            <Link href={page[1]}>
                                <Button
                                    key={page[0]}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page[0]}
                                </Button>
                            </Link>

                        ))}



                        {!session && (
                            <>
                                <Link href={"/loginPage"}>
                                    <Button
                                        key={"ログイン"}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        ログイン
                                    </Button>
                                </Link>



                                <Link href={"/api/auth/signin/google/"}>
                                    <Button
                                        key={"next-auth"}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        next-auth
                                    </Button>
                                </Link>

                            </>
                        )}

                    </Box>

                    {/**アバター表示 */}
                    {/**authがTrueならアバター類を表示しFalseなら非表示にする */}
                    {session && (
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}



                            >

                                <MenuItem key={"マイページ"} onClick={handleCloseNavMenu}>

                                    <Link href={"/studentMyPage"}>
                                        <Typography textAlign="center">
                                            マイページ
                                        </Typography>
                                    </Link>
                                </MenuItem>

                                <MenuItem onClick={() => signOut()}>

                                    <Typography textAlign="center">
                                        ログアウト
                                    </Typography>

                                </MenuItem>

                            </Menu>
                        </Box>

                    )}


                </Toolbar>

            </Container>

        </AppBar >
    );
};
export default Test;