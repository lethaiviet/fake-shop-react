import { Grid, Typography, Rating, Button } from '@mui/material'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { selectProduces, } from '@/redux/produceSlice'
import { getProduceById, getProduces } from '@/redux/produceThunk'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
    const params = useParams()
    const { produce, loading } = useSelector(selectProduces)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduceById(parseInt(params.produceId, 10)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {!loading ?
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <FeatureImg>
                                <Img src={produce.image} alt=''></Img>
                            </FeatureImg>
                        </Grid>
                        <Grid item xs={12} sm={6} md={8} lg={8}>
                            <FeatureCaption>
                                <Typography variant='h4'>{produce.title}</Typography>
                                <Typography mb={3}>{produce.category}</Typography>
                                <Typography variant='h4' mb={1}>{produce.price}</Typography>
                                <FeatureRating>
                                    <Rating name="half-rating-read" defaultValue={produce?.rating?.rate} precision={0.5} readOnly />
                                    <Typography variant='p'>{`(${produce?.rating?.count} reviews)`}</Typography>
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