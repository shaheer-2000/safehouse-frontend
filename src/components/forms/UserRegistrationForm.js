import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { parse, isDate } from 'date-fns';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const mainUserSchema = {
    name: yup.string().required().min(3).max(50),
    username: yup.string().required().min(8).max(20).strict().lowercase().matches(/^[a-z0-9_]+$/g, 'username must only contain alphanumeric characters & underscore (_)'),
    password: yup.string().required().min(8).max(100),
    role: yup.string().required().oneOf(['admin', 'ngo', 'manager', 'housemate', 'homeless'], 'Role must be Admin/NGO/Manager/Housemate/Homeless'),
    email: yup.string().required().email(),
    country: yup.string().required(),
    city: yup.string().required()
};

const supplementUserSchema = {
    gender: yup.string().required().oneOf(['Male', 'Female', 'Other'], 'Gender must be Male/Female/Other'),
    dateOfBirth: yup.date().required().transform((value, originalValue) => {
        return isDate(originalValue) ? originalValue : parse(originalValue, 'yyyy-MM-dd', new Date());
    }).max(new Date(), `Date Of Birth must be earlier than ${new Date().toDateString()}`)
};

const mainNGOSchema = {
    description: yup.string().required().min(50).max(500),
    address: yup.string().required(),
    website: yup.string().url()
};

const adminSchema = yup.object().shape({
    ...mainUserSchema
});

const ngoSchema = yup.object().shape({
    ...mainUserSchema,
    ...mainNGOSchema
});

const otherSchema = yup.object().shape({
    ...mainUserSchema,
    ...supplementUserSchema
});

// temp
const countries = ['Pakistan', 'India', 'Bangladesh'];
const cities = {
    'Pakistan': ['Karachi', 'Lahore', 'Faislabad'],
    'India': ['Mumbai', 'Delhi'],
    'Bangladesh': ['Dhaka']
};

const UserRegistrationForm = () => {
    const userRole = localStorage.getItem('type');
    const {
        register,
        watch,
        handleSubmit,
        formState: {
            errors,
            isValid,
            isSubmitting,
            isSubmitSuccessful
        }
    } = useForm({
        mode: 'onSubmit',
        shouldFocusError: true,
        resolver: yupResolver(userRole === 'admin' ? adminSchema : userRole === 'ngo' ? ngoSchema : otherSchema)
    });
    const [formErrors, setFormErrors] = useState([]);
    const [submitBtnMsg, setSubmitBtnMsg] = useState('Submit');

    const onSubmit = async (data) => {
        try {
            const transformedData = {
                ...data,
                date_of_birth: data.dateOfBirth
            };
            // https://safehouse-weavy.herokuapp.com/users
            const res = await axios.post(`https://safehouse-weavy.herokuapp.com/api/v1/users/${data.role.endsWith('s') ? data.role : data.role + 's'}`, transformedData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });

            setFormErrors([]);
            setSubmitBtnMsg('Submitted Successfully!');
            setTimeout(() => {
                setSubmitBtnMsg('Submit');
            }, 1000);
            console.log(res);
        } catch (err) {
            setFormErrors([...formErrors, err.message]);
            console.log(formErrors);
        }
    };
    const onError = (err) => {
        const errors = [];
        for (const field in err) {
            errors.push(err[field].message);
        }

        setFormErrors(errors);
        console.log(formErrors);
    };

    const selectedCountry = watch('country', countries.at(0));
    const possibleRoles = {
        'admin': ['Admin', 'NGO'],
        'manager': ['Housemate', 'Homeless']
    };

    return (
        <div className="w-full max-w-lg mx-auto my-10">
            <form className="flex flex-wrap -mx-3 mb-6 w-full bg-white rounded-xl shadow-md px-8 py-8" onSubmit={handleSubmit(onSubmit, onError)} method="POST">
                {
                    !isValid ? 
                    (
                        formErrors.map((formError, index) => {
                            return <div key={index} className="error-toast">{formError}</div>
                        })
                    ) : <></>
                }
                <div className="mb-6">
                    <h2 className="text-2xl font-bold drop-shadow-md text-gray-500">User Information</h2>
                </div>
                <div className="w-full px-3 mb-6 md:mb-4">
                    <label htmlFor="name" className="label">Name</label>
                    <input id="name" type="text" className={ errors.name ? 'responsive-input-red' : 'responsive-input-indigo'}
                    {...register('name')} />
                    {errors.name && (
                        <span role="alert" className="invalid-input">{errors.name?.message}</span>
                    )}
                </div>
                <div className="w-full px-3 mb-6 md:mb-4">
                    <label htmlFor="username" className="label">Username</label>
                    <input id="username" type="text" className={ errors.username ? 'responsive-input-red' : 'responsive-input-indigo'}
                    {...register('username')} />
                    {errors.username && (
                        <span role="alert" className="invalid-input">{errors.username?.message}</span>
                    )}
                </div>
                <div className="w-full px-3 mb-6 md:mb-4">
                    <label htmlFor="password" className="label">Password</label>
                    <input id="password" type="password" className={ errors.password ? 'responsive-input-red' : 'responsive-input-indigo'}
                    {...register('password')} />
                    {errors.password && (
                        <span role="alert" className="invalid-input">{errors.password?.message}</span>
                    )}
                </div>
                { Object.keys(possibleRoles).includes(userRole) ? 
                    (
                        <div className="w-full md:w-2/3 px-3 mb-6 md:mb-4">
                            <label htmlFor="role" className="label">Role</label>
                            <select id="role" type="text" className={ errors.role ? 'responsive-input-red' : 'responsive-input-indigo'}
                            {...register('role')}>
                                {
                                    possibleRoles[userRole].map((role, index) => {
                                        return <option key={index} value={role.toLowerCase()}>{role}</option>
                                    })
                                }
                            </select>
                            {errors.role && (
                                <span role="alert" className="invalid-input">{errors.role?.message}</span>
                            )}
                        </div>
                    ) : <></>
                }
                <div className="w-full px-3 mb-6 md:mb-4">
                    <label htmlFor="email" className="label">E-Mail</label>
                    <input id="email" type="text" className={ errors.email ? 'responsive-input-red' : 'responsive-input-indigo'}
                    {...register('email')} />
                    {errors.email && (
                        <span role="alert" className="invalid-input">{errors.email?.message}</span>
                    )}
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-4">
                    <label htmlFor="country" className="label">Country</label>
                    <select id="country" type="text" className={ errors.country ? 'responsive-input-red' : 'responsive-input-indigo'}
                    {...register('country')}>
                        {
                            countries.map((country, index) => {
                                return <option key={index} value={country}>{country}</option>
                            })
                        }
                    </select>
                    {errors.country && (
                        <span role="alert" className="invalid-input">{errors.country?.message}</span>
                    )}
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-4">
                    <label htmlFor="city" className="label">City</label>
                    <select id="city" className={ errors.city ? 'responsive-input-red' : 'responsive-input-indigo'}
                    {...register('city')}>
                        {   
                            cities[selectedCountry].map((city, index) => {
                                return <option key={index} value={city}>{city}</option>
                            })
                        }
                    </select>
                    {errors.city && (
                        <span role="alert" className="invalid-input">{errors.city?.message}</span>
                    )}
                </div>
                {
                    userRole !== 'admin' ? 
                    (
                        <hr className="hidden md:block w-full my-6 bg-gray-200 border-gray-200 border-t-1" aria-hidden="true" />
                    ) : <></>
                }
                {
                    userRole === 'ngo' ?
                    (
                        <>
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold drop-shadow-md text-gray-500">NGO Information</h2>
                            </div>
                            <div className="w-full px-3 mb-6 md:mb-0">
                                <label className="label">Description</label>
                                <textarea className={ errors.description ? 'responsive-input-red' : 'responsive-input-indigo'}
                                {...register('description')} />
                                {errors.description && (
                                    <span role="alert" className="invalid-input">{errors.description?.message}</span>
                                )}
                            </div>
                            <div className="w-full px-3 mb-6 md:mt-4 md:mb-0">
                                <label className="label">Address</label>
                                <input type="text" className={ errors.address ? 'responsive-input-red' : 'responsive-input-indigo'}
                                {...register('address')} />
                                {errors.address && (
                                    <span role="alert" className="invalid-input">{errors.address?.message}</span>
                                )}
                            </div>
                            <div className="w-full px-3 mb-6 md:mt-4 md:mb-0">
                                <label className="label">Website</label>
                                <input type="text" className={ errors.website ? 'responsive-input-red' : 'responsive-input-indigo'}
                                {...register('website')} />
                                {errors.website && (
                                    <span role="alert" className="invalid-input">{errors.website?.message}</span>
                                )}
                            </div>
                        </>
                    ) : <></>
                }
                                    {
                    !['admin', 'ngo'].includes(userRole) ?
                    (
                        <>
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold drop-shadow-md text-gray-500">Additional User Information</h2>
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="label">Gender</label>
                                <select className={ errors.gender ? 'responsive-input-red' : 'responsive-input-indigo'}
                                {...register('gender')}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.gender && (
                                    <span role="alert" className="invalid-input">{errors.gender?.message}</span>
                                )}
                            </div>
                            <div className="w-full px-3 mb-6 md:mt-4 md:mb-0">
                                <label className="label">Date Of Birth</label>
                                <input type="date" className={ errors.dateOfBirth ? 'responsive-input-red' : 'responsive-input-indigo'}
                                {...register('dateOfBirth')} />
                                {errors.dateOfBirth && (
                                    <span role="alert" className="invalid-input">{errors.dateOfBirth?.message}</span>
                                )}
                            </div>
                        </>
                    ) : <></>
                }
                <div className="w-full md:w-1/3 px-3 md:mt-5">
                    <button className={ isSubmitting || submitBtnMsg !== 'Submit' ? 'responsive-btn-green' : 'responsive-btn-indigo' } type="submit" disabled={isSubmitting || submitBtnMsg !== 'Submit'}>
                        { isSubmitting ? 'Submitting...' : submitBtnMsg }
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserRegistrationForm;
