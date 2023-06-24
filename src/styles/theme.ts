import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		primary: { main: "#7C58D3", light: "#9C5BF5" },
		background: { default: "#FFFEFD" },
	},

	typography: {
		fontFamily: "Nunito, sans-serif",
		h1: { fontFamily: "Nunito, sans-serif" },
		h2: { fontFamily: "Nunito, sans-serif" },
		h3: { fontFamily: "Nunito, sans-serif" },
		h4: { fontFamily: "Nunito, sans-serif" },
		h5: { fontFamily: "Nunito, sans-serif" },
		h6: { fontFamily: "Nunito, sans-serif" },
		subtitle1: { fontFamily: "Nunito, sans-serif" },
		subtitle2: { fontFamily: "Nunito, sans-serif" },
		body1: { fontFamily: "Lato, sans-serif" },
		body2: { fontFamily: "Lato, sans-serif" },
		button: { fontFamily: "Nunito, sans-serif" },
	},
});
