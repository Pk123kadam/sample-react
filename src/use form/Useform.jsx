import React from 'react'
import { useForm } from "react-hook-form";

function Useform() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("firstName", { required: true })}
                aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

            <input
                {...register("mail", { required: "Email Address is required" })}
                aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}

            <input type="submit" />
        </form>
    )
}

export default Useform