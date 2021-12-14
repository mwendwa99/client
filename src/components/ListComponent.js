import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '4px',
    },
}));

export default function ListComponent({ listItems }) {
    const [open, setOpen] = React.useState(true);
    const classes = useStyles();

    console.log(listItems);

    // const handleClick = () => {
    //     setOpen(!open);
    // };

    return (
        // map over listItems and return a list of ListItemButton components
        <List className={classes.root}>
            <ListSubheader>{listItems.title}</ListSubheader>
            {listItems.map((item, index) => (
                <ListItemButton key={index}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItemButton>
            ))}
        </List>
    );
}
