<script>
import { useToggleSidebar } from "./hooks";

export default {
	name: "Sidebar",
};
</script>

<script setup>
const { toggleSidebar, show, icon } = useToggleSidebar();
</script>

<template>
	<button class="btn-open-sidebar" @click="toggleSidebar">
		<i class="material-icons">{{ icon }}</i>
	</button>

	<div class="main-sidebar" :class="{ show }">
		<div class="main-logo">
			<a href="https://devchallenges.io/" target="_blank"> <span>Dev</span>challenges.io </a>
		</div>

		<ul class="sidebar-menu">
			<li class="sidebar-item">
				<a>Colors</a>
			</li>

			<li class="sidebar-item">
				<a>Typography</a>
			</li>

			<li class="sidebar-item">
				<a>Spaces</a>
			</li>

			<li class="sidebar-item">
				<a>Buttons</a>
			</li>

			<li class="sidebar-item active">
				<a>Inputs</a>
			</li>

			<li class="sidebar-item">
				<a>Grid</a>
			</li>
		</ul>
	</div>

	<div class="overlay" @click="toggleSidebar" />
</template>

<style lang="css" src="~/assets/css/sidebar.css" />
