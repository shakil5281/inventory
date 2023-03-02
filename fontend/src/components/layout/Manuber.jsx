import React from 'react'
import {styles} from './css/manubercss'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'

const Manuber = () => {
    return (
        <>
            <Box>
                <Box>
                    <AppBar sx={styles.menuber}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color=""
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <SearchIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Box>
        </>
    )
}

export default Manuber