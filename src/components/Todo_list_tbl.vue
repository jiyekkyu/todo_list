<template>
	<li class="li-st">
		<input type="checkbox"
			   :id="'todo-chk'+row.idx"
			   v-model="row.checked"
			   true-value=1
			   false-value=0
			   @change="dataPost(row)">
		<label :for="'todo-chk'+row.idx">
			<span :class="row.checked == 1 ? 'checkmark' : ''"></span>
		</label>
		<span class="todo-span">{{row.todo}}</span>
		<button
			class="del-btn"
			:idx="row.idx"
			:value="row.idx"
			@click="$emit('remove', row)">X</button>
	</li>
</template>

<script>
export default {
	name: "Todolist",
	props: {
		row: Object,
	},
	methods: {
		async dataPost(data) {
			await this.$axios.post('/todo', {
				data
			});
		},
	},
};
</script>
