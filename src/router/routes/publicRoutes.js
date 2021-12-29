// Export all the public routes

import Login from "@pages/public/login/Login.js";
import SignUp from "@pages/public/signup/Form";

export const PublicRoutes = [
  { path: "/auth/login", exact: true, component: Login },
  { path: "/auth/signup", exact: true, component: SignUp }
];
