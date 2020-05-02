import React,{useState} from 'react';
const useDropDown = (label,defaultState,options)=>{
	const [state,setState] = useState(defaultState);
	const dropDown = ()=>(
		<label htmlFor={label}>
			{label}
			<select value={state} onChange = {e=>setState(e.target.value)}
			onBlur = {e=>setState(e.target.value)}
			disabled={options.length===0}>
				<option>All</option>
				{options.map(e=>(<option value={e}>{e}</option>))}
			</select>

		</label>

	);
	return [state,dropDown,setState];
}
export default useDropDown;