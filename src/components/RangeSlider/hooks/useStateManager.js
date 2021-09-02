import { reactive } from "vue";

export function useStateManager({
	"default-value": defaultValue,
	"label-text": labelText,
	value: propsValue,
	values = [],
	onChange: propsOnChange,
	...restProps
}) {
	const initialValue = defaultValue ? { text: labelText, value: defaultValue } : propsValue;
	const max = values.length - 1;

	const onChange = (value) => {
		if (typeof propsOnChange === "function") {
			propsOnChange(value);
		}
		state.value = value;
	};

	const state = reactive({ ...restProps, defaultValue, labelText, value: initialValue, values, max, onChange });

	return state;
}
