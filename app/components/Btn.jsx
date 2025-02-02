import Button from "@mui/material/Button";

export default function Btn({
  onCLick,
  click = "Click Here",
  variant = "outlined",
  disabled,
}) {
  return (
    <div>
      <Button onClick={onCLick} variant={variant} disabled={disabled}>
        {click}
      </Button>
    </div>
  );
}
