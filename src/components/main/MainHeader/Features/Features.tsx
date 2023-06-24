import { Grid } from "@mui/material";
import {
	DiscountsIcon,
	GuaranteeIcon,
	SupportIcon,
	TrustAndSafetyIcon,
} from "components";
import { Feature } from "./Feature/Feature";

export const Features = () => {
	return (
		<Grid container rowSpacing={2.5} columnSpacing={7}>
			<Feature
				icon={<TrustAndSafetyIcon />}
				title="Trust & Safety"
				subTitle="Velit euismod pellentes"
			/>

			<Feature
				icon={<DiscountsIcon />}
				title="Discounts "
				subTitle="Bibendum ut tristique "
			/>

			<Feature
				icon={<SupportIcon />}
				title="Support"
				subTitle="Egestas quis ipsum velit "
			/>

			<Feature
				icon={<GuaranteeIcon />}
				title="Guarantee"
				subTitle="Convallis tellus id interdum "
			/>
		</Grid>
	);
};
