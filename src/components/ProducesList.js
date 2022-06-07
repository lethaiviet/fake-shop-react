import { Box, Grid } from '@mui/material'
import ProduceCard from '@components/ProduceCard'
import { useDispatch, useSelector } from 'react-redux'
import { selectProduces, } from '@/redux/produceSlice'
import { getProduces } from '@/redux/produceThunk'
import { useEffect } from 'react'

export default function ProducesList() {
    const { produces, loading } = useSelector(selectProduces)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduces())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                !loading ?
                    <Box sx={{ margin: '5% 10% 5% 10%' }
                    } >
                        <Grid container spacing={2}>
                            {
                                produces.map(x => (<Grid item xs={12} sm={6} md={4} lg={3}>
                                    <ProduceCard props={x} />
                                </Grid>)
                                )
                            }
                        </Grid>
                    </Box > :
                    <>LOADING</>
            }
        </>
    )
}