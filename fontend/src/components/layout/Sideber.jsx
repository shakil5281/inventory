import React from 'react'
import { styles } from './css/sidebercss'
import { Avatar, Box, IconButton, ListItem, Typography } from '@mui/material'
import { FcDoughnutChart } from 'react-icons/fc';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import avater_img from '../../assets/img/avatar_default.jpg';
import { navLinks } from '../../navlinks';
import { makeStyles } from '@material-ui/core/styles';



const Sideber = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <>
            <Box component={'div'} sx={styles.sidenavber} >
                <Box>
                    <Box component={'div'} sx={styles.mainHeader}>
                        <IconButton sx={{ fontSize: '2.5rem' }}>
                            <FcDoughnutChart />
                        </IconButton>
                        <Box component={'div'} sx={styles.profileHeader}>
                            <Box component={'div'} sx={{ display: 'flex' }}>
                                <Box><Avatar src={avater_img} /></Box>
                                <Box component={'div'} sx={{ marginLeft: 2 }}>
                                    <Typography variant='h6' sx={{ fontSize: '.9rem', fontWeight: "600", color: '#515151' }}>Minimal Ui</Typography>
                                    <Typography variant='body2' sx={{ color: 'gray' }}>Super Admin</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ marginTop: 1 }}>
                            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: '0 10px' }}>
                                <List component="nav" aria-label="main mailbox folders">
                                    {
                                        navLinks.map((item, i) => (
                                            <>
                                                <Typography variant='body2' sx={{ padding: '10px 20px', color: 'gray', fontWeight: '600', fontSize: '.75rem', color: '#515151' }}>
                                                    {item.title}
                                                </Typography>
                                                {
                                                    Array.from(item.manu).map((list, i) =>(
                                                        <ListItemButton
                                                        sx={{padding: '5px 10px', marginTop: 1, borderRadius: '7px'}}
                                                        selected={selectedIndex === i}
                                                        onClick={(event) => handleListItemClick(event, i)}
                                                    >
                                                        <IconButton>
                                                            {list.icons}
                                                        </IconButton>
                                                        <ListItem sx={{ fontWeight: '600', color: 'gray', padding: 0 }}>
                                                            <ListItemText primary={
                                                                <Typography  variant="body1" style={{ fontSize: '14px' }}>
                                                                    {list.name}
                                                                </Typography>
                                                            } />
                                                        </ListItem>
                                                    </ListItemButton>
                                                    ))
                                                }
                                                
                                            </>
                                        ))
                                    }
                                </List>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Sideber