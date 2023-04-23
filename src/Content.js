const Content = ({ data }) => {
	return (
		<main className="Content">
			<h1>Content will be rendered below</h1>
			<ul className="Content__ul">
				{data.map((item) => (
					<li key={item.id}>{JSON.stringify(item)}</li>
				))}
			</ul>
		</main>
	);
};

export default Content;
