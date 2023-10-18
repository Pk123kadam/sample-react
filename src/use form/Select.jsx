import React from 'react'

function Select(props) {
    return (
        <select

            onChange={props?.onChange}>
            {
                props?.options?.map((e) => {
                    return <>
                        <option value={e?.value}>{e?.label}</option></>
                })
            }

        </select>
    )
}

export default Select
