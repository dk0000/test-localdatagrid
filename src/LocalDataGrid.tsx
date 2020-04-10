import { DataGrid } from "tubular-react";
import columns from "./columns";
import localData from "./localData";
import * as React from "react";

const LocalDataGrid: React.FunctionComponent = () => {
  return (
    <DataGrid
      gridName="Tubular-React"
      columns={columns}
      dataSource={localData}
    />
  );
};
export default LocalDataGrid;
