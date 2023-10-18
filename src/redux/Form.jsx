import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addform, delform, getform, updform } from './FormReducer';
import Loader from './Loader';
import { useRef } from 'react';
import { current } from '@reduxjs/toolkit';


function Formm() {
    const ref = useRef()
    const dispatch = useDispatch()
    const [bool, setbool] = useState(false)
    // const [index, setindex] = useState(0)
    const [obj, setobj] = useState({})
    const [id, setid] = useState(0)
    const { form, load } = useSelector(state => state.form)
    console.log(form)
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string()
            .min(10, 'Too Short!')
            .max(10, 'Too Long!')

    });
    function handledel(id) {
        dispatch(delform(id))

    }
    useEffect(() => {
        dispatch(getform())
    }, [obj])
    let modify = {
        name: obj.name,
        email: obj.email,
        phone: obj.phone
    }
    let initial = {
        name: "",
        email: "",
        phone: ""
    }
    let country = [{ name: 'india', city: ['mumbai', 'pune'] }, { name: 'pak', city: ['karachi', 'dhaka'] }, { name: 'us', city: ['las vegas', 'chacago'] }]
    return (

        <div>
            {/* <select onChange={(e) => setindex(e.target.value)}>
                {
                    country.map((e, i) => {
                        return <option value={i}>{e.name}</option>
                    })
                }
            </select>
            <select>
                {
                    country[index].city.map((e, i) => {
                        return <option>{e}</option>
                    })
                }
            </select> */}
            {load ? <Loader></Loader> : <div>
                <Formik
                    initialValues={
                        Object.keys(obj).length === 0 ? initial : modify
                    }
                    validationSchema={SignupSchema}
                    onSubmit={(values, action) => {
                        // same shape as initial values
                        console.log(values);

                        if (Object.keys(obj).length) {
                            dispatch(updform({ id: id, data: values }))
                            setbool(!bool)
                            setobj({})
                        } else {
                            dispatch(addform(values))

                        }
                        action.resetForm()

                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label>Name</label>
                            <Field name="name" />

                            {errors.name && touched.name ? (
                                <div>{errors.name}</div>
                            ) : null}
                            <label>Email</label>
                            <Field name="email" type="email" />
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}
                            <label>Phone</label>
                            <Field name="phone" />
                            {errors.phone && touched.phone ? (
                                <div>{errors.phone}</div>
                            ) : null}
                            <button ref={ref} type="submit" className='btn btn-primary ms-2'>{bool ? "Update" : "Add"}</button>
                        </Form>
                    )}
                </Formik>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">FirstName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {form.map((item, index) => {
                            return <>
                                <tr key={index + 1}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td><button className='btn btn-danger' onClick={() => handledel(item.id)} disabled={bool}>Delete</button></td>
                                    <td><button disabled={bool} className="btn btn-primary" onClick={() => {
                                        setbool(!bool)
                                        setobj(item)
                                        setid(item.id)
                                    }}>Update</button></td>
                                </tr>

                            </>
                        })}

                    </tbody>
                </table>


            </div>}
        </div>

    )
}


export default Formm