<template>
	<div class="todo">
		<section class="todo-list">
			<div class="list-box">
				<div class="title">To-do List</div>
				<div class="todo-add">
					<input type="text" class="todo-input" placeholder="New Todo" v-model="todo">
					<button class="add-btn" @click="dataSet(todo)"> Add </button>
				</div>
				<ul class="ul-st" @scroll="scrollEvent">
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
			rows: [],
			item: 15,
		}
	},
	methods: {
		async dataGet() {
			const url = '/todo/?items=' + this.item;
			const { data } = await this.$axios.get(url);

			this.rows = data;
		},
		async dataSet(data) {
			await this.$axios.post('/todo', {
				data
			});
		},
		scrollEvent(e) {
			const { scrollTop, clientHeight, scrollHeight } = e.target;

			if( scrollTop == (scrollHeight - clientHeight) ) {
				this.item = this.item + 10;
				this.dataGet();
			}
		}
	},
	created() {
		this.dataGet();
	},
};
</script>
<style src="@/css/todo.css"></style>
