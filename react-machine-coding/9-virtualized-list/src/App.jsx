// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const data = Array.from(nums, (value) => value);

import { VirtualizedList } from "./components/virtualized-list";

const data = Array.from({ length: 1000 }, (_, index) => index);

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Virtualized List</h1>
      <VirtualizedList
        data={data}
        renderRow={(row) => {
          return row;
        }}
      />
    </div>
  );
}

//  {data.map((item, index) => renderRow(item, index))}
//  renderRow={(row) => {
//      return <div className="row">Item: {row}</div>;
//  }}
