import { Container, Box, Grid } from "@mui/material";
import { MainOffer } from "./MainOffer/MainOffer";
import { SideOffer } from "./SideOffer/SideOffer";
import Dog2Image from "assets/images/offers/dog2.png";
import Dog3Image from "assets/images/offers/dog3.png";

export const Offers = () => {
	return (
		<Box component="section" py={9}>
			<Container maxWidth="xl">
				<Grid container columnSpacing="20px" rowSpacing="35px">
					<Grid item xs={12} lg={8}>
						<MainOffer />
					</Grid>

					<Grid item xs={12} lg={4}>
						<Grid container spacing="30px">
							<Grid item xs={12} md={6} lg={12}>
								<SideOffer
									image={Dog2Image}
									title="Luxury Fashion Collection"
									imagePlace="bottom"
								/>
							</Grid>

							<Grid item xs={12} md={6} lg={12}>
								<SideOffer
									image={Dog3Image}
									title="Shop What’s Trending"
									imagePlace="center"
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
