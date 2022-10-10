import React, { useState } from 'react';
import Button from '../ui/Button';

function Todo(props) {

	const { todo, onClick, onClickBtn } = props;

	return (
		<div onClick={onClick}>
			<h4>{todo.content}</h4>
			<span>{todo.dueDate}</span>
			<Button
				text={todo.isDone ? "완료됨" : "완료하기"}
				onClick={todo.isDone ? null : onClickBtn}
				bgColor={todo.isDone ? "green" : "red"}
			></Button>
		</div>
	);
}

export default Todo;