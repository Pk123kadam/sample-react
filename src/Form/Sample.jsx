import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';

function Sample() {
    const [data, Setdata] = useState([])
    const [bool, setbool] = useState(false)
    const [obj, setobj] = useState({})


    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });
    console.log(data)
    function handledelete(i) {
        let del = data.filter((_, index) => i != index)
        Setdata(del)
    }
    console.log(obj)
    return (
        <>
            <Formik
                // initialValues={

                //     {
                //         firstName: "",
                //         lastName: "",
                //         email: "",
                //     }}
                // initialValues={Object.keys(obj).length === 0 ? initialValues : modifi}
                initialValues={Object.keys(obj).length === 0 ? {
                    firstName: "",
                    lastName: "",
                    email: ""
                } : obj}
                validationSchema={SignupSchema}
                onSubmit={(values, action) => {
                    // console.log(values)
                    // same shape as initial values
                    Setdata([...data, values])
                    action.resetForm()

                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        firstname:
                        <Field name="firstName" />
                        {errors.firstName && touched.firstName ? (
                            <div className='text-danger'>{errors.firstName}</div>
                        ) : null}
                        lastname:

                        <Field name="lastName" />
                        {errors.lastName && touched.lastName ? (
                            <div className='text-danger'>{errors.lastName}</div>
                        ) : null}
                        email:
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div className='text-danger'>{errors.email}</div> : null}
                        <button type="submit" className='btn btn-primary'>{bool ? "Update" : "Add"}</button>
                    </Form>
                )}
            </Formik >
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">email</th>
                        <th scope="col">actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((e, i) => {
                            return <tr>
                                <td>{e.firstName}</td>
                                <td>{e.lastName}</td>
                                <td>{e.email}</td>


                                <th><button className='btn btn-primary' onClick={() => {
                                    setbool(!bool)
                                    setobj(e)
                                }} disabled={bool}>Update</button></th>
                                <th><button className='btn btn-danger' onClick={() => handledelete(i)}>Delete</button></th>

                            </tr>
                        })
                    }


                </tbody>
            </table>



        </>
    )
}

export default Sample