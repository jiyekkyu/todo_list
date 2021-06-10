<template>
	<li class="li-st">
		<input type="checkbox"
			   :id="'todo-chk'+row.idx"
			   v-model="row.checked"
			   true-value=1
			   false-value=0
			   @change="dataSet(row)">
		<label :for="'todo-chk'+row.idx">
			<span :class="row.checked == 1 ? 'checkmark' : ''"></span>
		</label>
		{{row.todo}}
	</li>
</template>

<script>
export default {
	name: "Todolist",
	props: {
		row: Object,
	},
	methods: {
		async dataSet(data) {
			await this.$axios.post('/todo/checkup', {
				data
			});
		},
	},
};
</script>
