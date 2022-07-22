import { Box, BottomNavigation, BottomNavigationAction, Divider } from '@mui/material';
import React from 'react';
import FlareIcon from '@mui/icons-material/Flare';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import { grey } from '@mui/material/colors';

export default function Navbar(){
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: '100%', height: '10%' }}>
            <Divider />
            <BottomNavigation
            style={styles.navBar}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            >
            <BottomNavigationAction style={styles.navButton} label="Discover" icon={<FlareIcon />} />
            <BottomNavigationAction style={styles.navButton} label="Bools" icon={<GroupsIcon />} />
            <BottomNavigationAction style={styles.navButton} label="Friends" icon={<PeopleIcon />} />
            </BottomNavigation>
        </Box>
    );
}

const styles = {
    navBar: {
        height: '100%'
    },
    navButton:{
        height: '100%'
    }
}