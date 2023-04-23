const Header = ({ categories, setCategory, prevCategory, setPrevCategory }) => {
	return (
		<header className="Header">
			{categories.map((item) => (
				<button
					className={`Header__button ${item.name}`}
					type="button"
					key={item.id}
					onClick={() => {
						setCategory(item.name);
						const b = document.querySelector(`.${prevCategory}`);
						const a = document.querySelector(`.${item.name}`);
						b.classList.remove("Header__button-selected");
						a.classList.add("Header__button-selected");
						setPrevCategory(item.name);
					}}
				>
					{item.name}
				</button>
			))}
		</header>
	);
};

Header.defaultProps = {
	title: "default title",
};

export default Header;
