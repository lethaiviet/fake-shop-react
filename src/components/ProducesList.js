import { Box, Grid } from '@mui/material'
import ProduceCard from '@components/ProduceCard'
import { useDispatch, useSelector } from 'react-redux'
import { selectProduces, } from '@/redux/produceSlice'
import { getProduces } from '@/redux/produceThunk'
import { useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { Link } from 'react-router-dom'

export default function ProducesList() {
    const { produces, loading } = useSelector(selectProduces)
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    useEffect(() => {
        const handleGetProducesAPI = async () => {
            try {
                await dispatch(getProduces()).unwrap()
            }
            catch (err) {
                enqueueSnackbar(`Error ${err}`, { variant: 'error' });
            }
        }

        handleGetProducesAPI();
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
                                produces.map(x => (
                                    <Grid key={x.id} item xs={12} sm={6} md={4} lg={3}>
                                        <Link to={`/produce/${x.id}`}>
                                            <ProduceCard props={x} key={x.id} />
                                        </Link>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box > :
                    <>LOADING</>
            }
        </>
    )
}