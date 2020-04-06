/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Clusters from "components/Dashboard";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Map3 from "views/MyMap.js"
import App from "views/App.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import MyMap from "views/MyMap";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/clusters",
    name: "Clusters",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: Clusters,
    layout: "/admin"
  },
  {
    path: "/worldmap",
    name: "World Map",
    rtlName: "الرموز",
    icon: "tim-icons icon-world",
    component: App,
    layout: "/admin"
  },
  {
    path: "/usmap",
    name: "US Statewise Map",
    rtlName: "خرائط",
    icon: "tim-icons icon-bank",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/countymap",
    name: "countywise map",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-pin",
    component: MyMap,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-align-center",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/about",
    name: "About",
    rtlName: "إخطارات",
    icon: "tim-icons icon-single-02",
    component: Notifications,
    layout: "/admin"
  }
];
export default routes;
