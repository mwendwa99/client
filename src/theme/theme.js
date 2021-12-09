import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiToolbar: {
            root: {
                backgroundColor: '#fff',
                color: '#000',
                minHeight: '64px',
                padding: '0px',
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
            },
        },
        MuiAppBar: {
            root: {
                backgroundColor: '#fff',
                color: '#000',
                minHeight: '64px',
                padding: '0px',
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
            },
        },
        MuiButton: {
            root: {
                color: '#000',
                backgroundColor: '#fff',
                '&:hover': {
                    backgroundColor: '#fff',
                    color: '#000',
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#ffb900',
            contrastText: '#fff',
        },
        secondary: {
            main: '#fff',
            contrastText: '#000',
        },
    },
});

export { theme };
