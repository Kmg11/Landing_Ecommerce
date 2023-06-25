import { Button, useTheme, ButtonProps } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type AppButtonProps = Omit<ButtonProps, "endIcon"> & {
	children: React.ReactNode;
};

export const AppButton = ({ children, sx, ...rest }: AppButtonProps) => {
	const theme = useTheme();

	return (
		<Button
			endIcon={<ArrowForwardIcon sx={{ fontSize: "14px" }} />}
			sx={{
				color: theme.palette.primary.main,
				fontSize: "20px",
				fontWeight: 800,
				lineHeight: "30px",
				letterSpacing: 0,
				p: 0,
				textTransform: "none",
				transition: "none",
				...sx,
			}}
			{...rest}
		>
			{children}
		</Button>
	);
};
