import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Display from './Display';
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

function Formikk() {
    const [data, Setdata] = useState([])


    // function handleupd() {
    //     data.splice(index, 1, single)
    //     console.log("update")

    //     Setdata([...data])

    // }


    return (
        <div>

            {/* <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>

                        <Field name="lastName" />
                        {errors.lastName && touched.lastName ? (
                            <div className='text-danger'>{errors.lastName}</div>
                        ) : null}
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik> */}

            <Formik

                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, action) => {

                    Setdata([...data, values])


                    // same shape as initial values
                    console.log(values);
                    action.resetForm()
                }}>

                {({ errors, touched }) => (
                    <Form className='w-50 mx-auto'>
                        <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <Field type="text" className="form-control" aria-describedby="emailHelp" name="firstName" />
                            {errors.firstName && touched.firstName ? <div className='text-danger'>{errors.firstName}</div> : null}

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
                            <Field type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="lastName" />
                            {errors.lastName && touched.lastName ? <div className='text-danger'>{errors.lastName}</div> : null}

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <Field type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
                            {errors.email && touched.email ? <div className='text-danger'>{errors.email}</div> : null}

                        </div>

                        <div className='text-center'>
                            <button type="submit" className="btn btn-primary">ADD</button>

                        </div>
                    </Form>
                )}
            </Formik>
            <Display list={data} del={Setdata} ></Display>

        </div>
    )
}

export default Formikk
