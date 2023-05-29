import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function FilterDropDown(props) {
  // function makeAlert(value) {
  //   alert(`You clicked ${value}!`);
  // }

  return (
    <Box
      id="filter-dropdown-menu"
      bgcolor={"#FCF7F1"}
      sx={{
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        id="filter-dropdown-menu-title"
        variant="h1"
        component="div"
        sx={{
          flexGrow: 0,
          fontSize: "3rem",
          color: "#004777",
          fontWeight: "800",
          letterSpacing: "0.1em",
        }}
      >
        Resources
      </Typography>
      <FormControl sx={{ mt: 2, width: 0.4 }}>

        <InputLabel id="filter-menu">Select Topic</InputLabel>
        <Select
          sx={{
            borderColor: "red",
            backgroundColor: "white",
          }}
          labelId="filter-menu"
          id="filter-menu"

          value={props.value}
          label="Select Topic"
          aria-label="Click to expand the dropdown menu to select topic"


          onChange={props.onChange}
        >
          <MenuItem value={"all"} id="all-choice" aria-label="Select all topics">All</MenuItem>
          <MenuItem value={"css"} id="css-choice" aria-label="Select CSS topic">CSS</MenuItem>
          <MenuItem value={"react"} id="react-choice" aria-label="Select React topic">React</MenuItem>
          <MenuItem value={"git"} id="git-choice" aria-label="Select Git topic">Git</MenuItem>
          <MenuItem value={"UI/UX"} id="ui-ux-choice" aria-label="Select UI/UX topic">UI/UX</MenuItem>
          <MenuItem value={"testing"} id="testing-choice" aria-label="Select Testing topic">Testing</MenuItem>
          <MenuItem value={"javascript"} id="javascript-choice" aria-label="Select JavaScript topic">Javascript</MenuItem>
          <MenuItem value={"mindset"} id="mindset-choice" aria-label="Select Mindset topic">Mindset</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default FilterDropDown;
