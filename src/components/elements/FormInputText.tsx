import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const inputProps = {
  style: { borderTopLeftRadius: "unset" },
};

const FormInputText = ({
  name,
  label,
  required = false,
  focus = false,
}: {
  name: string;
  label: string;
  required?: boolean;
  focus?: boolean;
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          focused={focus}
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value || ""}
          fullWidth
          label={label}
          variant="outlined"
          inputProps={{ ...inputProps }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "unset",
            },
          }}
          required={required}
        />
      )}
    />
  );
};

export default FormInputText;
