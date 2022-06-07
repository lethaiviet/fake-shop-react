import { Grid, Typography, Rating, Button } from '@mui/material'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { selectProduces, } from '@/redux/produceSlice'
import { getProduces } from '@/redux/produceThunk'
import { useEffect } from 'react'

const Container = styled.div`
    display: flex;
    margin: 5% 10% 5% 10%;
    border: 1px solid gray;
    height: auto;
`

const FeatureImg = styled.div`
    padding: 5% 10% 5% 10%;
`

const Img = styled.img`
  width: 100%;
  height: auto;
`

const FeatureCaption = styled.div`
    padding: 15% 10% 15% 10%;
`

const FeatureRating = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`

export default function ProduceDetail() {
    const { produces, loading } = useSelector(selectProduces)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduces())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {!loading ?
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <FeatureImg>
                                <Img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt=''></Img>
                            </FeatureImg>
                        </Grid>
                        <Grid item xs={12} sm={6} md={8} lg={8}>
                            <FeatureCaption>
                                <Typography variant='h4'>produces[0].title</Typography>
                                <Typography mb={3}>By Evan Winter</Typography>
                                <Typography variant='h4' mb={1}>$100</Typography>
                                <FeatureRating>
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                    <Typography variant='p'>(100 reviews)</Typography>
                                </FeatureRating>
                                <Button variant="outlined" height={100}>Add to cart</Button>
                            </FeatureCaption>

                        </Grid>
                    </Grid>
                </Container>
                : <div>Loading</div>}
        </>
    )
}