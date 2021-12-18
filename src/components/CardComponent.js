import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Icon, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: (cardStyle) => ({
        display: 'flex', alignItems: 'center',
        textTransform: cardStyle.textTransform,
    }),
    cardIcon: {
        marginRight: theme.spacing(2),
    },
}));
export default function BasicCard({ cardItems, cardStyle, gif }) {
    const classes = useStyles({ cardStyle });

    return !gif ? (
        <Card sx={{ minWidth: 275 }}>
            {cardItems.map((item, index) => (
                <CardActionArea key={index}>
                    <CardContent className={classes.root}>
                        <Icon fontSize='large' className={classes.cardIcon} >
                            {item.icon}
                        </Icon>
                        <Box>
                            <Typography variant="body1" className={classes.cardText}>
                                <strong>{item.title}</strong>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.subtitle}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            ))}
        </Card>
    ) : (
        <Card sx={{ minWidth: 275 }}>
            <CardActionArea>
                <Paper>
                    <img src={gif} height="100%" width="100%" alt="gif" />
                </Paper>
            </CardActionArea>
        </Card>
    )
}
