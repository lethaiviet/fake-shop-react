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

export default function ProduceCard({ props }) {
    return (
        <StyledCard>
            <CardMedia
                style={{
                    width: "auto",
                    maxHeight: "300px"
                }}
                component="img"
                image={props.image}
                alt={props.title}
            />
            <StyledCardContent>
                <Typography gutterBottom variant="headline" component="h5">
                    {props.title}
                </Typography>
                <Typography component="p">
                    {props.category}
                </Typography>
                <Typography component="p">
                    {`$${props.price}`}
                </Typography>
            </StyledCardContent>
        </StyledCard>
    )
}