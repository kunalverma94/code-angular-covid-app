export interface StatContext {
  subtitle?: string;
  title?: string;
  chartCols?: ChartCols[];
  exclude?: string[];
  data?: any[];
}
export interface ChartCols {
  type: string;
  property: string;
}
