import { computed, reactive } from "vue";

export function useStateManager({
	"label-text": labelText,
	checked,
	value: propsValue,
	onChange: propsOnChange,
	...restProps
}) {
	const initialChecked = checked === "" || checked || false;
	const initialValue = propsValue ? { text: labelText, value: propsValue, checked: initialChecked } : propsValue;

	const onChange = (value) => {
		if (typeof propsOnChange === "function") {
			propsOnChange(value);
		}
		state.value = value;
	};

	const state = reactive({
		...restProps,
		labelText,
		value: initialValue,
		checked: computed(() => state.value.checked),
		onChange,
	});

	return state;
}
