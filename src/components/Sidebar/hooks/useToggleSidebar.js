import { toRefs, reactive } from "vue";

export function useToggleSidebar() {
	const state = reactive({ show: false, icon: "menu" });
	const { icon, show } = toRefs(state);

	const toggleSidebar = () => {
		state.show = !state.show;
		state.icon = state.show ? "close" : "menu";
	};

	return {
		toggleSidebar,
		icon,
		show,
	};
}
