import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

export default function Header({ icon, children }) {
    const Icon = icon;
    return (
        <AppBar position="relative">
            <Toolbar>
                <Icon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    {children}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}