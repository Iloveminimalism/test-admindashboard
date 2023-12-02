import { Box } from '@mui/material';
import Header from '~/components/Header/Header';

function Dashboard(props) {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to dashboard" />
            </Box>
        </Box>
    );
}

export default Dashboard;
