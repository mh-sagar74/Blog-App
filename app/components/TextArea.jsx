import { TextField } from "@mui/material";

export default function TextArea({
  label = "Enter here",
  type = "text",
  value,
  onChange,
}) {
  return (
    <div className="mb-2 mt-2">
      <TextField
        className="w-[600px]"
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        multiline
      />
    </div>
  );
}
