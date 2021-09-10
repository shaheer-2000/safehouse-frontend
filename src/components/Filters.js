import React from "react";

export const MinMaxFilter = (props) => {
	const {
		minLabel,
		minId,
		minName,
		minInputHandler,
		maxLabel,
		maxId,
		maxName,
		maxInputHandler
	} = props;

	return (
		<div className="grid grid-cols-2">
			<label htmlFor={minId}>
				{minLabel}
			</label>
			<input className="col-span-1 rounded-md" type="number" min="0" id={minId} name={minName} onChange={minInputHandler} />
			<label htmlFor={maxId}>
				{maxLabel}
			</label>
			<input className="col-span-1 rounded-md" type="number" min="0" id={maxId} name={maxName} onChange={maxInputHandler} />
		</div>
	);
};
