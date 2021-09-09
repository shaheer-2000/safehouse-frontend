import React, { useEffect, useState } from 'react'
import { SimpleInput, TextBoxInput, DropDownInput } from './FormInput';

const Form = (props) => {
	const userRole = 'admin';
	const roles = ['admin', 'housemate'];

	const [username, setUsername] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('');
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');

	// TODO: if role is admin, then allow all options
	// TODO: if role is manager, then allow housemate and homeless
	// TODO: else automatically select designated role (e.g. an NGO can create a manager only)

	// TODO: need to add API/table for countries and cities

	// TODO: pass to backend for registration

	// TODO: add required prop to inputs

	/* useEffect(() => {
		console.table(Object.entries({
			username,
			name,
			email,
			role,
			country,
			city
		}));
	}) */

	const handleSubmit = (e) => {
		e.preventDefault();

		console.table(Object.entries({
			username,
			name,
			email,
			role,
			country,
			city
		}));
	};

	return (
		<>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="mt-5 md:mt-0 md:col-span-2">
					<div className="shadow sm:overflow-hidden">
						<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
							<h2 className="text-lg leading-4 text-gray-700">User</h2>
							<SimpleInput id="username" name="username" label="Username" onChangeHandler={setUsername} />
							<SimpleInput id="name" name="name" label="Name" onChangeHandler={setName} />
							<SimpleInput id="email" name="email" label="E-mail" type='email' onChangeHandler={setEmail} />
							{ ['admin', 'manager'].includes(userRole) ? <DropDownInput id="role" name="role" label="Role" options={roles} onChangeHandler={setRole} /> : <></> }
							<div className="grid grid-cols-2">
								<DropDownInput id="country" name="country" label="Country" options={['Pakistan', 'United States of America', 'United Kingdom', 'Jamaica']} onChangeHandler={setCountry} />
								<DropDownInput id="city" name="city" label="City" options={['Karachi', 'Lahore', 'Faislabad']} onChangeHandler={setCity} />
							</div>
							{/* <TextBoxInput id="about" name="about" label="About" /> */}
						</div>
						<div className="px-4 py-5 bg-white space-y-6 sm:p-6">							
							<h2 className="text-lg leading-4 text-gray-700 mb-6">Details</h2>
							<SimpleInput id="name" name="name" label="Name" />
							<DropDownInput id="gender" name="gender" label="Gender" options={['Male', 'Female', '-']} />
						</div>
					</div>
				</div>
				<div className="px-4 py-3 bg-gray-50 flex justify-center items-center sm:px-6">
					<button
						type="submit"
						className="flex-1 max-w-xs py-2 text-lg text-center border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Save
					</button>
				</div>
			</form>
		</>
	)
};

export default Form;
