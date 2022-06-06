import {
    Card,
    CardMedia,
    CardContent,
    Typography
} from '@mui/material'

import styled from '@emotion/styled'
import { css } from 'styled-components'

const center = css`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
`

const StyledCard = styled(Card)`
    ${center}
    max-width: 500px;
`
const StyledCardContent = styled(CardContent)`
    ${center}
`

export default function ProduceCard() {
    return (
        <StyledCard>
            <CardMedia
                style={{
                    width: "auto",
                    maxHeight: "300px"
                }}
                component="img"
                image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Live from space album cover"
            />
            <StyledCardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    Fjallraven
                </Typography>
                <Typography component="p">
                    men's clothing
                </Typography>
                <Typography component="p">
                    $109.95
                </Typography>
            </StyledCardContent>
        </StyledCard>
    )
}