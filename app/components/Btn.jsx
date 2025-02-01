import Button from "@mui/material/Button";

export default function Btn({
  onCLick,
  click = "Click Here",
  variant = "outlined",
}) {
  return (
    <div>
      <Button onClick={onCLick} variant={variant}>
        {click}
      </Button>
    </div>
  );
}
