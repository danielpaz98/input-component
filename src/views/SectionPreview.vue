<script>
// COMPONENTS
import Input from "~/components/Input.vue";
import CheckboxList from "~/components/CheckboxList.vue";
import Checkbox from "~/components/Checkbox";
import Select from "~/components/Select";
import RangeSlider from "~/components/RangeSlider";
import ComponentSyntaxHighlighter from "~/components/ComponentSyntaxHighlighter";
// HOOKS
import { useInputState } from "~/hooks";
// STATIC DATA
import { checkboxOptions, iconOptions, colorOptions, sizeOptions, rowOptions } from "~/staticData";
</script>

<script setup>
const { inputState, updateInputState } = useInputState();
const componentToUse = { ...Input, states: inputState };
</script>

<template>
	<section class="section-preview">
		<div class="section-preview-body">
			<div class="section-preview-input">
				<h3 class="title-section">Preview</h3>
				<div class="input-container">
					<component
						:is="componentToUse"
						maxlength="100"
						v-bind="componentToUse.states"
						:value="componentToUse.states.value"
						@update:value="updateInputState({ key: 'value', value: $event })"
					/>
				</div>
			</div>

			<div class="section-preview-options">
				<h3 class="title-section">Options</h3>

				<div class="control-options">
					<CheckboxList
						:values="checkboxOptions"
						@change="updateInputState({ key: $event.value, value: $event.checked })"
					/>

					<div class="option-group">
						<label for="helper-text">Helper text:</label>

						<Input
							id="helper-text"
							placeholder="Some interesting text..."
							size="small"
							maxlength="50"
							full-width
							:value="componentToUse.states['helper-text']"
							@update:value="updateInputState({ key: 'helper-text', value: $event })"
						/>
					</div>

					<div class="option-group">
						<Select
							placeholder="select a icon..."
							label-text="Icon"
							:values="iconOptions"
							block
							@change="updateInputState({ key: 'icon', value: $event.value })"
						/>

						<Checkbox
							label-text="End Icon"
							value="end-icon"
							@change="updateInputState({ key: $event.value, value: $event.checked })"
						/>
					</div>

					<Select
						placeholder="select a color..."
						label-text="Color"
						:values="colorOptions"
						block
						@change="updateInputState({ key: 'color', value: $event.value })"
					/>

					<RangeSlider
						label-text="Size"
						:values="sizeOptions"
						@change="updateInputState({ key: 'size', value: $event.value })"
					/>

					<div class="option-group">
						<RangeSlider
							label-text="Rows"
							:values="rowOptions"
							@change="updateInputState({ key: 'row', value: $event.value })"
						/>

						<Checkbox
							label-text="Multiline"
							value="multiline"
							@change="updateInputState({ key: $event.value, value: $event.checked })"
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="section-preview-footer">
			<ComponentSyntaxHighlighter :component="componentToUse" />
		</div>
	</section>
</template>
