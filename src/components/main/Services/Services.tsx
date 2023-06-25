import {
	Box,
	Container,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { Service } from "./Service/Service";
import { useQuery } from "@tanstack/react-query";
import { ServiceType } from "types";

export const Services = () => {
	const theme = useTheme();
	const isXS = useMediaQuery(theme.breakpoints.only("xs"));

	const { data: services } = useQuery<ServiceType[]>({
		queryKey: ["services"],
		queryFn: async () => {
			const response = await fetch("/data/services.json");
			const data = await response.json();

			return data;
		},
	});

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
						{services?.map((service, i) => (
							<Service key={i} {...service} />
						))}
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};
