import React, { useState } from 'react'

import { useForm, Controller } from "react-hook-form"
import Input from './Input'
import Select from './Select'
function Useform() {
    const [obj, setObj] = useState([])
    const [selectedData, setSelectedData] = useState({})
    const [update, setUpdate] = useState(false)
    console.log("selected", selectedData)
    function handlechange(e) {
        console.log(e.target.value)

    }
    function handleupdate(e, bool) {
        setSelectedData(e)
        setUpdate(bool)

    }
    const { control, handleSubmit, setValue, formState: { errors }, register } = useForm({

    })
    const onSubmit = (data) => {
        if (data) {
            setObj([...obj, data])
            console.log(data)
            setValue("firstName", "")
            setValue("select", "")
        }
        setUpdate(false)
    }
    if (update) {
        setValue("firstName", selectedData.firstName)
        setValue("select", selectedData.select)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => <Input  {...register('firstName', {
                        required: " firstName is required"
                    })}
                        {...field} />}
                />
                {errors.firstName?.type === "required" && (
                    <p role="alert">First name is required</p>
                )}
                <Controller
                    name="select"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...register('select', {
                                required: " select is required"
                            })}
                            options={[
                                { label: "--select--" },
                                { value: "chocolate", label: "Chocolate" },
                                { value: "strawberry", label: "Strawberry" },
                                { value: "vanilla", label: "Vanilla" },
                            ]}
                            {...field}
                            onChange={(e) => {
                                field.onChange(e)
                                handlechange(e)
                            }}
                        />
                    )}
                />
                {errors.select?.type === "required" && (
                    <p role="alert">select is required</p>
                )}
                <input type="submit" />
            </form>
            {
                obj?.map((e) => {
                    return <>
                        firstName: <h1>{e.firstName}</h1><br></br>
                        select: <h1>{e.select}</h1>
                        <br></br>
                        <button className='btn btn-primary' onClick={() => handleupdate(e, true)
                        }>Update</button><br></br></>

                })


            }</>

    )
}

export default Useform
