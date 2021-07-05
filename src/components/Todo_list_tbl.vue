<template>
	<li class="li-st">
		<input type="checkbox"
			   :id="idx"
			   :checked="checked"
			   @change="$emit('check', {'idx':idx, 'flag':$event.target.checked})">
		<label :for="idx">
			<span :class="checked ? 'checkmark' : ''"></span>
		</label>
		<span class="todo-span">{{todo}}</span>
		<button
			class="del-btn"
			:value="idx"
			@click="$emit('remove', idx)">X</button>
	</li>
</template>

<script>
export default {
	name: "Todolist",
	props: {
		idx: Number,
		checked: Boolean,
		todo: String,
	},
};
</script>
