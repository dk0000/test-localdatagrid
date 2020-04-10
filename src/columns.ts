import {
  AggregateFunctions,
  ColumnDataType,
  ColumnModel,
  ColumnSortDirection
} from "tubular-common";

const columns = [
  new ColumnModel("CPRID", {
    dataType: ColumnDataType.Numeric,
    filterable: true,
    isKey: true,
    label: "Id",
    sortDirection: ColumnSortDirection.Ascending,
    sortOrder: 1,
    sortable: true
  }),
  new ColumnModel("PartnerID", {
    aggregate: AggregateFunctions.Count,
    filterable: true,
    searchable: true,
    sortable: true
  }),
  new ColumnModel("DebtReliefFirm", {
    filterable: true,
    sortable: true
  }),
  new ColumnModel("ConsolPlusNo", {
    filterable: true,
    searchable: true,
    sortable: true
  }),
  new ColumnModel("Status"),
  new ColumnModel("CPRNo"),
  new ColumnModel("RecordType"),
  new ColumnModel("FundingSource"),
  new ColumnModel("LoanAmount", {
    dataType: ColumnDataType.Numeric,
    sortable: true
  }),
  new ColumnModel("Duplicate", {
    dataType: ColumnDataType.Boolean,
    filterable: true,
    sortable: true
  }),
  new ColumnModel("DuplicateOverride", {
    dataType: ColumnDataType.Boolean,
    filterable: true,
    sortable: true
  })
];
export default columns;
