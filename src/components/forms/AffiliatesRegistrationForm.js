import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    name: yup.string().required().min(3).max(50),
    email: yup.string().required().email(),
    description: yup.string().required().min(50).max(500),
    address: yup.string().required(),
    phoneNum: yup.string().required(),
    website: yup.string().url(),
    type: yup.string().required()
});

const AffiliateRegistrationForm = () => {
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
        resolver: yupResolver(schema)
    });
    const [formErrors, setFormErrors] = useState([]);
    const [submitBtnMsg, setSubmitBtnMsg] = useState('Submit');

    const onSubmit = async (data) => {
        try {
            const { type, ...transformedData } = data;
            // https://safehouse-weavy.herokuapp.com
            // http://127.0.0.1:8000
            const res = await axios.post(`http://127.0.0.1:8000/api/v1/affiliates/${data.type}`, {
                ...transformedData,
                phone_num: data.phoneNum
            }, {
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
            setFormErrors([err.message]);
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

    const affiliateTypes = ['Employer', 'Instructor', 'Agency', 'Center'];

    return (
        <div className="w-full max-w-lg mx-auto my-10">
            <form className="flex flex-wrap -mx-3 mb-6 w-full bg-white rounded-xl shadow-md px-8 py-8" onSubmit={handleSubmit(onSubmit, onError)} method="POST">
                {
                    !isValid || formErrors.length > 0 ? 
                    (
                        formErrors.map((formError, index) => {
                            return <div key={index} className="error-toast">{formError}</div>
                        })
                    ) : <></>
                }
                <div className="mb-6">
                    <h2 className="text-2xl font-bold drop-shadow-md text-gray-500">Affiliate Information</h2>
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
                    <label htmlFor="email" className="label">E-Mail</label>
                    <input id="email" type="text" className={ errors.email ? 'responsive-input-red' : 'responsive-input-indigo'}
                    {...register('email')} />
                    {errors.email && (
                        <span role="alert" className="invalid-input">{errors.email?.message}</span>
                    )}
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-4">
                    <label htmlFor="type" className="label">Affiliate Type</label>
                    <select id="type" type="text" className={ errors.type ? 'responsive-input-red' : 'responsive-input-indigo'}
                    {...register('type')}>
                        {
                            affiliateTypes.map((affiliateType, index) => {
                                return <option key={index} value={affiliateType.toLowerCase()}>{affiliateType}</option>
                            })
                        }
                    </select>
                    {errors.type && (
                        <span role="alert" className="invalid-input">{errors.type?.message}</span>
                    )}
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
                    <label className="label">Phone Number (#)</label>
                    <input type="text" className={ errors.phoneNum ? 'responsive-input-red' : 'responsive-input-indigo'}
                    {...register('phoneNum')} />
                    {errors.phoneNum && (
                        <span role="alert" className="invalid-input">{errors.phoneNum?.message}</span>
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
                <div className="w-full md:w-1/3 px-3 md:mt-5">
                    <button className={ isSubmitting || submitBtnMsg !== 'Submit' ? 'responsive-btn-green' : 'responsive-btn-indigo' } type="submit" disabled={isSubmitting || submitBtnMsg !== 'Submit'}>
                        { isSubmitting ? 'Submitting...' : submitBtnMsg }
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AffiliateRegistrationForm;
