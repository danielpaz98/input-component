import { inject } from "vue";

export function useInputState() {
	const { inputState, setInputState } = inject("InputContext");

	const updateInputState = ({ key, value }) => {
		const updateState = value ? { [key]: value } : delete inputState[key];
		setInputState(updateState);
	};

	return { inputState, updateInputState };
}
