import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

function Navbar() {
	return (
		<AppBar position="sticky" id="">
			<Toolbar id="nav-bar-container"
				sx={{
					backgroundColor: "#FCF7F1",
					boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
				}}
			>
				<Typography
					id="nav-bar-title"
					variant="h1"
					component="div"
					sx={{ flexGrow: 1, fontSize: "1rem", color: "#525252" }}
					aria-label="Website title"
				>
					Bootcamper's Treasure Chest
				</Typography>

				<Link
					className="nav-bar-link"
					href="https://www.facebook.com/schoolofcode"
					target="_blank"
					rel="noreferrer"
					alt="Facebook icon"
				>
					<IconButton
						sx={{ mr: 1, color: "#525252" }}
						id="Facebook rounded icon button"
						title="Visit School of Code Facebook page"
						aria-label="Visit School of Code Facebook page"
						>
						<FacebookRoundedIcon />
					</IconButton>
				</Link>

				<Link
					className="nav-bar-link"
					href="https://www.linkedin.com/school/school-of-code/"
					target="_blank"
					rel="noreferrer"
					alt="LinkedIn icon"
				>
					<IconButton 
						sx={{ mr: 1, color: "#525252" }}
						id="LinkedIn rounded icon button"
						title="Visit School of Code LinkedIn page"
						aria-label="Visit School of Code LinkedIn page"
						>
						<LinkedInIcon />
					</IconButton>
				</Link>

				<Link
					className="nav-bar-link"
					href="https://github.com"
					target="_blank"
					rel="noreferrer"
					alt="GitHub icon"
					>
					<IconButton
						sx={{ mr: 1, color: "#525252" }}
						id="Github rounded icon button"
						title="Visit School of Code GitHub page"
						aria-label="Visit School of Code Github page"
						>
						<GitHubIcon />
					</IconButton>
				</Link>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
