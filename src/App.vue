<script setup>
// COMPONENTS
import Sidebar from "~/components/Sidebar";
import Footer from "~/components/Footer.vue";
// VIEWS
import InputContextProvider from "~/contexts/InputContext.vue";
// PROVIDER CONTEXTS
import SectionPreview from "~/views/SectionPreview.vue";
</script>

<template>
	<main>
		<Sidebar />

		<div className="container">
			<InputContextProvider>
				<SectionPreview />
			</InputContextProvider>
		</div>
	</main>

	<Footer />
</template>
