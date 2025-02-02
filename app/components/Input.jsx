import { TextField } from "@mui/material";

export default function Input({ label = "*", type = "text", value, onChange }) {
  return (
    <div className="mb-2 mt-2">
      <TextField
        className="w-full"
        label={label}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
