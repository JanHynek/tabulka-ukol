import { Grid, TextField, Typography } from "@mui/material";

interface ICustomTableFilters {
  value: string;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

const CustomTableFilters = ({ value, onChange }: ICustomTableFilters) => {
  return (
    <Grid container gap={3} alignItems="center" pb={2}>
      <Typography variant="h4" fontWeight={700}>
        Klienti
      </Typography>
      <Grid item xs={6} md={3}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Fulltextové hledání"
          value={value}
          onChange={onChange}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default CustomTableFilters;
