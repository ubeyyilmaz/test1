import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout';  
import HomePage from './components/HomePage';
import Login from './LoginPage/Login';
import Employees from './components/Employees';
import Departmans from './components/Departmans';
import Reports from './components/Reports';
import Settings from './components/Settings';
import ControlPanel from './components/ControlPanel';
import EmployeeAdd from './components/EmployeeAdd';
import EmployeeEdit from './components/EmployeeEdit'; 


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/homepage",
    element: <Layout><HomePage /></Layout>
  },
  {
    path: '/employees',
    element: <Layout><Employees /></Layout>
  },
  {
    path: '/departmans',
    element: <Layout><Departmans /></Layout>
  },
  {
    path: '/reports',
    element: <Layout><Reports /></Layout>
  },
  {
    path: '/settings',
    element: <Layout><Settings /></Layout>
  },
  {
    path: '/control-panel',
    element: <Layout><ControlPanel /></Layout>
  },
  {
    path: '/add-employee',
    element: <Layout><EmployeeAdd /></Layout>
  },
  {
    path: '/edit-employee',
    element: <Layout><EmployeeEdit /></Layout>
  },
  {
    path: '/edit-employee/:id',
    element: <Layout><EmployeeEdit /></Layout>
  },
]);
