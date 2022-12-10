import { memo } from "react";

export const CounterItem = memo(({ count, label }) => {
  console.log(`${label}がレンダリング`);
  console.log("stateが更新されたよ");
  return (
    <div>
      {label}: {count}
    </div>
  );
});
