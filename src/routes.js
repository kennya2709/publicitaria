/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Inicio from "views/Inicio";
import Nosotros from "views/Nosotros.js";
import Servicios from "views/Servicios";

import TableList from "views/Tables.js";
import Contacto from "views/Contacto.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";

var routes = [
  {
    path: "/Inicio",
    name: "Inicio",
    icon: "nc-icon nc-bank",
    component: Inicio,
    layout: "/admin"
  },
  {
    path: "/Servicios",
    name: "Servicios",
    icon: "nc-icon nc-html5",
    component: Servicios,
    layout: "/admin"
  },
  {
    path: "/Contacto",
    name: "Contacto",
    icon: "nc-icon nc-badge",
    component: Contacto,
    layout: "/admin"
  },
  {
    path: "/Nosotos",
    name: "Sobre nosotros",
    icon: "nc-icon nc-circle-10",
    component: Nosotros,
    layout: "/admin"
  },
  
];
export default routes;
