import React from 'react'

// website <=
// username, password
// email email @ domain
// description
// photo

export const SimpleInput = (props) => {
	const {
		id,
		label,
		name,
		type,
		onChangeHandler
	} = props;

	return (
		<div className="grid grid-cols-5">
			<div className="col-span-3 sm:col-span-2">
				<label htmlFor={id} className="block text-sm font-medium text-gray-700">
					{label}
				</label>
				<div className="mt-1 flex rounded-md shadow-sm">
					<input type={type === undefined ? 'text' : type} name={name} id={id} onChange={(e) => onChangeHandler(e.target.value)} className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300" />
				</div>
			</div>
		</div>
	)
};

export const TextBoxInput = (props) => {
	const {
		id,
		label,
		name,
		onChangeHandler
	} = props;

	return (
		<>
			<div className="grid grid-cols-5">
				<div className="col-span-3 sm:col-span-2">
					<label htmlFor={id} className="block text-sm font-medium text-gray-700">
						{label}
					</label>
					<div className="mt-1">
						<textarea
							id={id}
							name={name}
							rows="3"
							className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
							placeholder="you@example.com"
							defaultValue=""
							onChange={(e) => onChangeHandler(e.target.value)}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export const DropDownInput = (props) => {
	const {
		id,
		label,
		name,
		options,
		onChangeHandler
	} = props;

	return (
		<>
			<div className="grid grid-cols-5">
				<div className="col-span-3 sm:col-span-2">
					<label htmlFor={id} className="block text-sm font-medium text-gray-700">
						{label}
					</label>
					<select
						id={id}
						name={name}
						className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						onChange={(e) => onChangeHandler(e.target.value)}
					>
						{
							options.map((option, index) => 
								<option key={index}>{option}</option>
							)
						}
					</select>
				</div>
			</div>
		</>
	)
}

export const FormInput = (props) => {
	return (
		<div className="grid grid-cols-3 gap-6">
			<div className="col-span-3 sm:col-span-2">
			<label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
				{props.label}
			</label>
			<div className="mt-1 flex rounded-md shadow-sm">
				<input
				type={props.type}
				name={props.name}
				id={props.id} 
				className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
				// placeholder="www.example.com"
				/>
				<span className="inline-flex items-center px-3 border border-l-0 border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
				@
				</span>
				<input
				type={props.type}
				name={props.name}
				id={props.id} 
				className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
				// placeholder="www.example.com"
				/>
			</div>
			</div>
	 	</div>
		// <div className="relative h-10 input-component mb-5">
		// 	<input type={props.type} id={props.id} name={props.name} className="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm" />
			
		// 	<label for={props.id} className="absolute left-2 transition-all bg-white px-1">
		// 		{props.label}
		// 	</label>
		// </div>
	);
};
