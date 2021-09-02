<script setup>
// COMPONENTS
import Sidebar from "~/components/Sidebar";
// VIEWS
import ButtonContextProvider from "~/contexts/ButtonContext.vue";
// PROVIDER CONTEXTS
import SectionPreview from "~/views/SectionPreview.vue";
</script>

<template>
	<main>
		<Sidebar />

		<div className="container">
			<ButtonContextProvider>
				<SectionPreview />
			</ButtonContextProvider>
		</div>
	</main>
</template>
