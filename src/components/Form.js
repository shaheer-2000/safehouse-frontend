import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SimpleInput, DropDownInput, TextBoxInput } from './FormInput';

const Form = (props) => {
	const userRole = localStorage.getItem('type') || 'homeless';
	console.log(localStorage.getItem('type'), userRole);
	const roles = {
		'admin': ['admin', 'ngo'],
		'manager': ['housemate', 'homeless']
	};

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('');
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	
	const [address, setAddress] = useState('');
	const [description, setDescription] = useState('');
	const [website, setWebsite] = useState('');

	const [phoneNum, setPhoneNum] = useState('');
	const [gender, setGender] = useState('-');
	const [idCardNum, setidCardNum] = useState('');

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

	const handleSubmit = async (e) => {
		e.preventDefault();

		let registeredUserRole = 'homeless';
		if (['admin', 'manager'].includes(userRole)) {
			registeredUserRole = role;
		} else {
			switch (userRole) {
				case 'ngo':
					registeredUserRole = 'manager';
					break;
				default:
					registeredUserRole = 'homeless';
			}
		}

		const res = await axios.post(`https://safehouse-weavy.herokuapp.com/api/v1/users/${registeredUserRole.endsWith('s') ? registeredUserRole : `${registeredUserRole}s`}`, {
			username,
			password,
			name,
			email,
			role,
			country,
			city,
			address,
			description,
			website,
			phoneNum,
			idCardNum			
		}, {
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json'
			},
		});

		console.table(Object.entries(res.data));

		console.table(Object.entries({
			username,
			password,
			name,
			email,
			role,
			gender,
			country,
			city,
			address,
			description,
			website,
			phoneNum,
			idCardNum
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
							<SimpleInput id="password" name="password" label="Password" type="password" onChangeHandler={setPassword} />
							<SimpleInput id="name" name="name" label="Name" onChangeHandler={setName} />
							<SimpleInput id="email" name="email" label="E-mail" type='email' onChangeHandler={setEmail} />
							{ ['admin', 'manager'].includes(userRole) ? <DropDownInput id="role" name="role" label="Role" options={roles[userRole]} onChangeHandler={setRole} /> : <></> }
							<div className="grid grid-cols-2">
								<DropDownInput id="country" name="country" label="Country" options={['Pakistan', 'United States of America', 'United Kingdom', 'Jamaica']} onChangeHandler={setCountry} />
								<DropDownInput id="city" name="city" label="City" options={['Karachi', 'Lahore', 'Faislabad']} onChangeHandler={setCity} />
							</div>
							{/* <TextBoxInput id="about" name="about" label="About" /> */}
						</div>
						<div className="px-4 py-5 bg-white space-y-6 sm:p-6">							
							<h2 className="text-lg leading-4 text-gray-700 mb-6">Details</h2>
							{ userRole === 'ngo' ? 
								<DropDownInput id="gender" name="gender" label="Gender" options={['Male', 'Female', '-']} onChangeHandler={setGender} />
								:
								<></>
							}
							{
								userRole === 'ngo' ?
									(<>
										<TextBoxInput id="address" name="address" label="Address" onChangeHandler={setAddress} />
										<TextBoxInput id="description" name="description" label="Description" onChangeHandler={setDescription} />
										<SimpleInput id="website" name="website" label="Website" onChangeHandler={setWebsite} />
									</>) : 
									(<>
										<SimpleInput id="id_card_num" name="id_card_num" label="NIC # (National Identity Card Number)" onChangeHandler={setidCardNum} />
										<SimpleInput id="phone_num" name="phone_num" label="Mobile Phone #" onChangeHandler={setPhoneNum} />
									</>)
							}
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
