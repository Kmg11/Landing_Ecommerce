import {
	Box,
	Container,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { Service } from "./Service/Service";
import GroomingImage from "assets/images/services/grooming.png";
import HealthImage from "assets/images/services/health.png";
import HotelImage from "assets/images/services/hotel.png";
import TaxiImage from "assets/images/services/taxi.png";
import TrainingImage from "assets/images/services/training.png";
import WalkingImage from "assets/images/services/walking.png";

export const Services = () => {
	const theme = useTheme();
	const isXS = useMediaQuery(theme.breakpoints.only("xs"));

	return (
		<Box component="section" py={5} mb="1.875rem">
			<Container maxWidth="xl">
				<Box component="header" textAlign="center" mb="30px">
					<Typography
						variant="subtitle1"
						component="h6"
						textTransform="uppercase"
						fontSize="16px"
						fontWeight={700}
						lineHeight="19px"
						letterSpacing={0}
						mb="15px"
						sx={{ color: theme.palette.primary.main }}
					>
						OUR SERVICES
					</Typography>

					<Typography
						sx={{ color: "#0B0417" }}
						component="h2"
						fontSize={!isXS ? "46px" : "35px"}
						fontWeight={800}
						lineHeight="46px"
						letterSpacing={0}
					>
						All Pet Care Services
					</Typography>
				</Box>

				<Box component="section">
					<Grid container spacing="1.875rem">
						<Service
							image={WalkingImage}
							title="Walking & Sitting"
							description="Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi"
							price={{ amount: 15, type: "hour" }}
						/>

						<Service
							image={GroomingImage}
							title="Pet Grooming"
							description="Et odio pellentesque diam volutpat commodo sed egestas egestas  pellentesque nec nam "
							price={{ amount: 39, type: "complex" }}
						/>

						<Service
							image={TrainingImage}
							title="Pet Training"
							description="Aliquam ut porttitor leo a diam sollicitudin tempor  sit amet est placerat"
							price={{ amount: 27, type: "hour" }}
						/>

						<Service
							image={TaxiImage}
							title="Pet Taxi"
							description="Maecenas ultricies mi eget mauris pharetra et ultrices consectetur adipiscing elit"
							price={{ amount: 22, type: "trip" }}
						/>

						<Service
							image={HealthImage}
							title="Health & Wellness"
							description="Amet porttitor eget dolor morbi non arcu risus quis varius blandit aliquam etiam"
							price={{ amount: 39, type: "visit" }}
						/>

						<Service
							image={HotelImage}
							title="Pet Hotel"
							description="Turpis massa sed elementum tempus egestas sed sed risus aliquam  urna cursus eget n"
							price={{ amount: 15, type: "night" }}
						/>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};
