import { Button, styled } from '@mui/material'
import React from 'react'

const CustomButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "black",
    "&:hover": {
        backgroundColor: "lightlue"
    },
    "&:disabled": {
        backgroundColor: "gray",
        color: "white"
    }
})

export default CustomButton