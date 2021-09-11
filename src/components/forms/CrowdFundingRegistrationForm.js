import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    title: yup.string().required().min(3).max(50),
    goal: yup.number().min(0).max(10000000),
    description: yup.string().required().min(50).max(500),
});

const CrowdFundingForm = () => {
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
            // https://safehouse-weavy.herokuapp.com
            // http://127.0.0.1:8000
            const res = await axios.post(`http://127.0.0.1:8000/api/v1/fundings`, {
                ...data,
                username: localStorage.getItem('username')
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
                    <h2 className="text-2xl font-bold drop-shadow-md text-gray-500">Crowd-Funding Application</h2>
                </div>
                <div className="w-full px-3 mb-6 md:mb-4">
                    <label htmlFor="title" className="label">Title</label>
                    <input id="title" type="text" className={ errors.title ? 'responsive-input-red' : 'responsive-input-indigo'}
                    {...register('title')} />
                    {errors.title && (
                        <span role="alert" className="invalid-input">{errors.title?.message}</span>
                    )}
                </div>
                <div className="w-full px-3 mb-6 md:mb-4">
                    <label htmlFor="goal" className="label">Goal</label>
                    <input id="goal" type="text" className={ errors.goal ? 'responsive-input-red' : 'responsive-input-indigo'}
                    {...register('goal')} />
                    {errors.goal && (
                        <span role="alert" className="invalid-input">{errors.goal?.message}</span>
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
                <div className="w-full md:w-1/3 px-3 md:mt-5">
                    <button className={ isSubmitting || submitBtnMsg !== 'Submit' ? 'responsive-btn-green' : 'responsive-btn-indigo' } type="submit" disabled={isSubmitting || submitBtnMsg !== 'Submit'}>
                        { isSubmitting ? 'Submitting...' : submitBtnMsg }
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CrowdFundingForm;
