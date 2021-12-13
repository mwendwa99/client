import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        // place
        // MuiToolbar: {
        //     root: {
        //         backgroundColor: '#fff',
        //         color: '#000',
        //         minHeight: '64px',
        //         padding: '0px',
        //         boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        //     },
        // },
        // MuiAppBar: {
        //     root: {
        //         backgroundColor: '#fff',
        //         color: '#000',
        //         minHeight: '64px',
        //         padding: '0px',
        //         boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        //     },
        // },
        MuiButton: {
            root: {
                color: '#FFB900',
                backgroundColor: '#FFB900',
                '&:hover': {
                    backgroundColor: '#FFB900',
                    color: '#000',
                },
            },
        },
    },
    palette: {
        background: {
            default: '#FFB900',
            paper: '#FFF',
        },
        primary: {
            main: '#fff',
            secondary: '#FFB900',
            contrastText: '#000',
        },
        secondary: {
            main: '#ffb900',
            secondary: '#000',
            contrastText: '#fff',
        },
    },
});

export { theme };
