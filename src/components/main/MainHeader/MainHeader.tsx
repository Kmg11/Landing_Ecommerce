import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Navbar } from "../Navbar/Navbar";
import HeaderBackground from "assets/images/header/header_background.png";
import HeaderDogImage from "assets/images/header/header_dog.png";
import { Info } from "./Info/Info";
import { Features } from "./Features/Features";

export const MainHeader = () => {
	const theme = useTheme();
	const isDownLG = useMediaQuery(theme.breakpoints.down("lg"));

	return (
		<Box
			component="header"
			sx={{
				minHeight: "100vh",
				backgroundImage: `url(${HeaderBackground})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "contain",
				backgroundPosition: !isDownLG ? "100% 100%" : "0% 0",
			}}
		>
			<Navbar />

			<Container maxWidth="xl">
				<Grid container>
					<Grid
						item
						xs={12}
						lg={6}
						display="flex"
						flexDirection="column"
						justifyContent={{ xs: "center", lg: "flex-start" }}
						pt={10}
						order={{ xs: 2, lg: 1 }}
					>
						<Info />
						<Features />
					</Grid>

					<Grid
						item
						xs={12}
						lg={6}
						order={{ xs: 1, lg: 2 }}
						display="flex"
						justifyContent="center"
					>
						<img
							src={HeaderDogImage}
							alt="header dog"
							style={{ display: "block", maxWidth: "100%" }}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
