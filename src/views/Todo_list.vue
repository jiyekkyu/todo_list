<template>
	<div class="todo">
		<section class="todo-list">
			<div class="list-box">
				<div class="title">To-do List</div>
				<div class="todo-add">
					<input type="text"
						   class="todo-input"
						   placeholder="New Todo"
						   v-model="todo"
						   @keyup.enter="todoSet">
					<button class="add-btn" @click="todoSet"> Add </button>
				</div>
				<ul class="ul-st" @scroll="scrollEvent">
					<todolist
						v-for="(item, idx) in todos"
						:key="idx"
						:idx="idx"
						:checked="item.checked"
						:todo="item.todo"
						@remove="todoDel"
						@check="todoListChk"></todolist>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
import todolist from '@/components/Todo_list_tbl';
export default {
	name: 'todo',
	data() {
		return{
			todo: '',
			checked: false,
			todos: [],
		}
	},
	components: {
		todolist
	},
	methods: {
		todoGet() {
			const todo = JSON.parse(localStorage.getItem('todo'));

			this.todos = todo ?? [];
		},
		todoListChk(data) {
			const idx = data.idx;
			const flag = data.flag;

			this.todos[idx].checked = flag;

			localStorage.todo = JSON.stringify(this.todos);
		},
		todoDel(idx) {
			this.todos.splice(idx, 1);

			localStorage.todo = JSON.stringify(this.todos);
		},
		todoSet() {
			const todo = this.todo;
			const checked = this.checked;
			const obj = {todo, checked};

			if ( todo === "" ) {
				alert("Todo 내용을 입력해주세요.");
				return;
			}

			this.todos.push(obj);

			localStorage.todo = JSON.stringify(this.todos);

			this.todo = '';
			this.todoGet();
		},
	},
	created() {
		this.todoGet();
	},
};
</script>
