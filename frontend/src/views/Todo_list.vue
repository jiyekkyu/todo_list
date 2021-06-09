<template>
	<div class="todo">
		<section class="todo-list">
			<div class="list-box">
				<div class="title">To-do List</div>
				<div class="todo-add">
					<input type="text" class="todo-input" placeholder="New Todo" v-model="todo">
					<button class="add-btn" @click="todoSet('todo', todo)"> Add </button>
				</div>
				<table class="tb">
					<thead>
						<tr>
							<td>State</td>
							<td style="width: 100%">Todo</td>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(row, i) in rows">
							<td>
								<input type="checkbox"
								:id="'todo-chk'+i"
								v-model="row.checked"
								true-value=1
								false-value=0
								@change="todoSet('todo/checkUp', row)">
								<label :for="'todo-chk'+i">
									<span :class="row.checked == 1 ? 'checkmark' : ''"></span>
								</label>
							</td>
							<td>{{row.todo}}</td>
						</tr>
					</tbody>
				</table>
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
		async todoSet(url, data) {
			await this.$axios.post('/'+url, {
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
