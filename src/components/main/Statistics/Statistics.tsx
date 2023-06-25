import { Box, Container, Grid } from "@mui/material";
import StatisticsBackground from "assets/images/statistics/statistics_background.png";
import SutisfideCliensImage from "assets/images/statistics/sutisfide_cliens.png";
import YearsExperienceImage from "assets/images/statistics/years_experience.png";
import BrandsAvailableImage from "assets/images/statistics/brands_available.png";
import ProductsForPetsImage from "assets/images/statistics/products_for_pets.png";
import { StatisticsItem } from "./StatisticsItem/StatisticsItem";

export const Statistics = () => {
	return (
		<Box component="section" py={8}>
			<Container maxWidth="xl">
				<Box
					sx={{
						backgroundColor: "#000000",
						backgroundImage: `url(${StatisticsBackground})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						borderRadius: "10px",
						py: "4.6875rem",
					}}
				>
					<Grid
						container
						rowSpacing={7}
						columnSpacing={5}
						justifyContent="center"
						alignItems="center"
					>
						<StatisticsItem
							image={SutisfideCliensImage}
							title="Sutisfide cliens"
							value={120}
						/>

						<StatisticsItem
							image={YearsExperienceImage}
							title="Years Experience"
							value={20}
						/>
						<StatisticsItem
							image={BrandsAvailableImage}
							title="Brands Available"
							value={70}
						/>

						<StatisticsItem
							image={ProductsForPetsImage}
							title="Products for pets"
							value={70}
						/>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};
