import React from 'react';

const HelloWorld = () => {

	function sayHello() {
		alert('Hello, World!');
	}

	return (
		<button onClick={sayHello}>Hello!</button>
	);
};

export default HelloWorld;