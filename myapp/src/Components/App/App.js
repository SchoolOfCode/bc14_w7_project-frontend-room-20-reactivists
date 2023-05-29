// and the value of the selected item is passed to the function.
// Initialise the resource array as a useState variable.
// When the user clicks on the filter dropdown, the onChange function is called
// and then the grid is re-rendered with the filtered array via a useEffect hook.
// Filter the array based on the value of the selected item in the dropdown menu.

import React from "react";
import "./App.css";
import FilterDropDown from "../FilterDropdown/FilterDropDown";
import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";
import ResourceListDisplay from "../ResourceList/ResourceList";
import { resource } from "../Resource/Resource";
import { useReducer } from "react";
import Footer from "../Footer/Footer";
import ResourceBar from "../ResourceBar/ResourceBar.js";

function App() {

	const initialState = resource;
	const [state, dispatch] = useReducer(reducer, initialState);

	function reducer(state, value) {
		//

		console.log(value.target.value);
		switch (value.target.value) {
			case "css":
				return initialState.filter((item) => item.topic === "css");
			case "git":
				return initialState.filter((item) => item.topic === "git");
			case "react":
				return initialState.filter((item) => item.topic === "react");
			case "testing":
				return initialState.filter((item) => item.topic === "testing");
			case "UI/UX":
				return initialState.filter((item) => item.topic === "UI/UX");
			case "all":
				return initialState;
			default:
				return [];
		}
	}

	return (
		<Box>
			<Navbar aria-label="Navigation bar" />
			<FilterDropDown onChange={dispatch} aria-label="Filter by category dropdown menu" />
       		<ResourceBar results={state.length} aria-label="Number of results for chosen category" />
			<ResourceListDisplay resource={state} />
      <Footer />
		</Box>
	);

}
export default App;
