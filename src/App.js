import "./App.css";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Routing/navbar";
import OrganizationSetting from "./Organisation-Settings/organisation-setting";
import Login from "../src/Login/login";
import SignUp from "./SignUp/sign-up";
import UserList from "./User-Dashboard/user-list";
import VerificationCode from "./SignUp/verification-code";
import OrganizationDetails from "./SignUp/organizaton-details";
import ConfirmDetails from "./SignUp/confirm-details";
import Home from "../src/Home/home";
//Itr
import ITRAddFilling from "./ITR-Filling/itr-add-filling";
import ITRDashboard from "./ITR-Filling/itr-dashboard";
import ITRList from "./ITR-Filling/itr-list";
import ItrViewAcknowledge from "./ITR-Filling/itr-view-acknowledge";
import ItrAcknowledgementShared from "./ITR-Filling/itr-acknowledgement-shared";
//Clients
import Clients from "./Clients/clients-dashboard";
import AddClient from "./Clients/add-clients";
import ClientList from "./Clients/client-list";
import EditClient from "./Clients/edit-client";
//Vendors
import Vendors from "./Vendors/vendor-dashboard";
import ConfirmVendorList from "./Vendors/confirm-vendors-list";
// import AddVendor from "./Vendors/add-vendors";
import VendorList from "./Vendors/vendor-list";
import VendorDetails from "./Vendors/vendor-details";

function App() {
  return (
    <div className="flex-auto h-screen">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/verification">
            <VerificationCode />
          </Route>
          <Route path="/orgdetails">
            <OrganizationDetails />
          </Route>
          <Route path="/confirmDetails">
            <ConfirmDetails />
          </Route>
          <Route path="/users">
            <UserList></UserList>
          </Route>
          <Route path="/organisation-setting">
            <OrganizationSetting />
          </Route>

          {/* Itr Filing */}
          <Route path="/itrAddFiling">
            <ITRAddFilling></ITRAddFilling>
          </Route>
          <Route path="/itrDashboard">
            <ITRDashboard></ITRDashboard>
          </Route>
          <Route path="/itrList">
            <ITRList></ITRList>
          </Route>
          <Route path="/itrViewAck">
            <ItrViewAcknowledge></ItrViewAcknowledge>
          </Route>
          <Route exact path="/itrAcknowlegmentShared">
            <ItrAcknowledgementShared></ItrAcknowledgementShared>
          </Route>

          {/* Client */}
          <Route path="/clientAdd">
            <AddClient></AddClient>
          </Route>
          <Route path="/clients">
            <Clients></Clients>
          </Route>
          <Route path="/clientList">
            <ClientList></ClientList>
          </Route>
          <Route path="/clientEdit">
            <EditClient></EditClient>
          </Route>

          {/* VENDOR */}
          <Route path="/vendors">
            <Vendors></Vendors>
          </Route>
          <Route path="/vendorConfirmList">
            <ConfirmVendorList></ConfirmVendorList>
          </Route>
          {/* <Route path="/vendorAdd">
            <AddVendor></AddVendor>
          </Route> */}
          <Route path="/vendorList">
            <VendorList></VendorList>
          </Route>
          <Route path="/vendorDetails">
            <VendorDetails></VendorDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
