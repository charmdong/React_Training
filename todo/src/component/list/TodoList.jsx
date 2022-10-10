import React from 'react';
import Todo from '../unit/Todo';


function TodoList(props) {

	const { todoList, onClick, onClickBtn } = props;

	return (
		<div>
			{
				todoList.map(todo => {
					return (
						<Todo 
							key={todo.id}
							todo={todo}
							onClick={() => {
								onClick(todo); //todo 클릭
							}}
							onClickBtn={() => {
								onClickBtn(todo); //todo 상태 변경 버튼 클릭
							}}
						/>
					);
				})
			}
		</div>
	);
}

export default TodoList;