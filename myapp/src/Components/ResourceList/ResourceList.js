//PLAN
//we need a function that returns all the items in the array
//  function maps through the array and gets the resource[0].title
//we want to display the image with the alt attribute and the title
//we want the image to be a link that goes to the page url

//use material UI to get a grid layout for display (later)
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../Resource/Resource.js";
import "./ResourceList.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResourceListDisplay({ resource }) {

	return (
		<Container maxWidth="xl" sx={{ flexGrow: 1, mt: "2em" }}>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{resource.map((item) => (
					<Grid item xs={3} sm={6} md={6} key={item.key}>
						<Item className="resource-items" style={{ border: "2px solid #004777" }}>
							<a href={item.link} target="_blank" rel="noreferrer" alt={item.linkAlt} title={item.linkAlt} aria-label={item.linkLabel}>
								<div className="resource" key={item.key}>
									<img className="images" src={item.imgSrc} alt={item.imgAlt} />
									<h2 className="resource-title">{item.title}</h2>
								</div>
							</a>
						</Item>
					</Grid>
				))}
			</Grid>
		</Container>
	);

}
