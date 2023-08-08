import React from 'react'
import Button from './button'
import Style from "./page.module.css"

function page() {
    return (
        <div>page
            <Button color={Style.red}></Button>
            <Button color={Style.yellow}></Button>

        </div>
    )
}

export default page