import React, { useCallback, useState } from "react";
import ChilComp1 from "./ChilComp1";

function MemoComp() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const updateCount = useCallback(() => {
    return count;
  }, [count]);
  return (
    <div>
      <h2>MemoComp {updateCount()}</h2>
      <h3>data{data}</h3>
      <ChilComp1 updateCount={updateCount} />
      <button onClick={() => setCount(count + 1)}>count</button>
      <button onClick={() => setData(data + 1)}>data</button>
    </div>
  );
}

export default MemoComp;
