<template>
	<div class="todo">
		<section class="todo-list">
			<div class="list-box">
				<div class="title">To-do List</div>
				<div class="todo-add">
					<input type="text" class="todo-input" placeholder="New Todo" v-model="todo">
					<button class="add-btn" @click="todoSet(todo)"> Add </button>
				</div>
				<ul class="ul-st">
					<todolist-table v-for="row in rows" :key="row" :row="row"></todolist-table>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'todo',
	data() {
		return{
			todo: '',
			rows: []
		}
	},
	methods: {
		async todoGet(url) {
			const { data } = await this.$axios.get('/'+url);

			this.rows = data;
		},
		async todoSet(data) {
			await this.$axios.post('/todo', {
				data
			});
		},
	},
	created() {
		this.todoGet('todo');
	},
};
</script>
<style src="@/css/todo.css"></style>
