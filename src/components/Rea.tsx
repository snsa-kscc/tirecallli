import { useState } from "react";

export  function Rea() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>hello from react</p>
			<button onClick={() => setCount(count => count + 1)}>
				count is {count}
			</button>
		</div>
	)
}


