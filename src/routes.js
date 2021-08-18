import HomePage from "./views/HomePage";
import StockDetailPage from "./views/StockDetailPage";

export const routes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    strict: true,
    component: HomePage
  },
  {
    path: "/stock/:symbol",
    name: "Stock Details",
    exact: true,
    strict: true,
    component: StockDetailPage
  }
];
