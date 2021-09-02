import { computed } from "vue";

export function useComponentToString({ component, maxPropsInline } = {}) {
	const codeString = computed(() => {
		const componentName = component?.name ?? "";
		const componentStates = component?.states ? Object.entries(component.states) : [];
		maxPropsInline = componentStates.length > maxPropsInline;

		const attrs = componentStates
			.map(([key, value]) => {
				if (value !== null)
					return value !== false && value !== true && value !== ""
						? ` ${maxPropsInline ? "\n  " : ""}${key}="${value}"`
						: ` ${maxPropsInline ? "\n  " : ""}${key}`;
			})
			.filter((item) => item)
			.join("");

		return component ? `<${componentName}${attrs ? `${attrs} ` : ""}${maxPropsInline ? "\n" : ""}/>` : "<div></div>";
	});

	return codeString;
}
