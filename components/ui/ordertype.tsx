
import type { OrderType } from "@/lib/types/orderType";

interface OrderTypeSelectorProps {
  value: OrderType;
  onChange: (type: OrderType) => void;
}

const orderTypes: { value: OrderType; label: string }[] = [
  { value: "TAKEOUT", label: "外帶" },
  { value: "DINE_IN", label: "內用" },
];

export default function OrderTypeSelector({
  value,
  onChange,
}: OrderTypeSelectorProps) {
  return (
    <fieldset>
      <legend>選擇用餐方式</legend>
      {orderTypes.map((type) => (
        <label key={type.value}>
          <input
            type="radio"
            name="orderType"
            value={type.value}
            checked={value === type.value}
            onChange={() => onChange(type.value)}
          />
          {type.label}
        </label>
      ))}
    </fieldset>
  );
}
