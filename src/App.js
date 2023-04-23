import { useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";

function App() {
	const API_URL = "https://jsonplaceholder.typicode.com";

	const [prevCategory, setPrevCategory] = useState("users");
	const [category, setCategory] = useState("users");
	const categories = [
		{ name: "users", id: 1 },
		{ name: "posts", id: 2 },
		{ name: "comments", id: 3 },
	];
	const [data, setData] = useState([]);
	const [fetchError, setFetchError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(`${API_URL}/${category}`);
				if (!response.ok) throw Error("Did not receive expected data");
				const items = await response.json();
				setData(items);
				setFetchError(null);
			} catch (err) {
				setFetchError(err.message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchItems();
	}, [data]);

	return (
		<div className="App">
			<Header
				categories={categories}
				setCategory={setCategory}
				prevCategory={prevCategory}
				setPrevCategory={setPrevCategory}
			/>
			{isLoading && <p>Data is loading...</p>}
			{fetchError && <p style={{ color: "red" }}>Error: {fetchError}</p>}
			{!fetchError && <Content data={data} />}
		</div>
	);
}

export default App;
