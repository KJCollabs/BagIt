import React from "react";
import Department from "./department";
import SearchBar from "./SearchBar";

function HomePage() {
	//if LoginForm is filled out and true, proceed to homePage.js
	return (
		<div>
			<header>
				<SearchBar />
			</header>
			<div>
				<Department />
			</div>
		</div>
	);
}
export default HomePage;
