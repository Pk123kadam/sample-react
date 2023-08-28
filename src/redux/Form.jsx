import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addform, delform, getform } from './FormReducer';
import Loader from './Loader';


function Formm() {
    const dispatch = useDispatch()
    const [bool, setbool] = useState(false)
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
    }, [])
    return (
        <>
            {load ? <Loader></Loader> : <div>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phone: ''


                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values, action) => {
                        // same shape as initial values
                        console.log(values);
                        dispatch(addform(values))
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
                            <button type="submit" className='btn btn-primary ms-2'>{bool ? "Update" : "Add"}</button>
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
                                    <td><button className='btn btn-danger' onClick={() => handledel(item.id)}>Delete</button></td>
                                    <td><button className='btn btn-danger' onClick={() => { setbool(!bool) }}>Update</button></td>
                                </tr>

                            </>
                        })}

                    </tbody>
                </table>


            </div>}
        </>
    )
}


export default Formm