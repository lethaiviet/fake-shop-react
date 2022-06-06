import { Box, Grid } from '@mui/material'
import ProduceCard from '@components/ProduceCard'

const nums = Array.from({ length: 10 }, i => i + 1)

export default function ProducesList() {
    return (
        <Box sx={{ margin: '5% 10% 5% 10%' }}>
            <Grid container spacing={2}>
                {
                    nums.map(x => (<Grid item xs={12} sm={6} md={4} lg={3}>
                        <ProduceCard />
                    </Grid>)
                    )
                }
            </Grid>
        </Box>
    )
}