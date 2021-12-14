import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Icon, Paper } from '@mui/material';


export default function BasicCard({ cardItems, gif }) {
    return !gif ? (
        <Card sx={{ minWidth: 275 }}>
            {cardItems.map((item, index) => (
                <CardActionArea key={index}>
                    <CardContent style={{ display: 'flex' }}>
                        <Icon fontSize='large' sx={{ mr: 2 }} >
                            {item.icon}
                        </Icon>
                        <Box>
                            <Typography variant="button" component="h2">
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
