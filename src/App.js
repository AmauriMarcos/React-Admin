import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { Navigate, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./styles/dark.scss";
import { useSelector } from "react-redux";
import { selectTheme } from "./features/adminSettings/adminSlice";

function App() {
  const isDarkMode = useSelector(selectTheme);

  const ProtectedRoute = ({ children }) => {
    const user = useSelector((state) => state.auth.entities);

    if (user?.length === 0) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={isDarkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="users">
            <Route
              index
              element={
                <ProtectedRoute>
                  <List table='userTable' title="Add User" url="/users/new" />
                </ProtectedRoute>
              }
            />
            <Route
              path=":userId"
              element={
                <ProtectedRoute>
                  <Single info="userInfo"/>
                </ProtectedRoute>
              }
            />
            <Route
              path="new"
              element={
                <ProtectedRoute>
                  <New inputs={userInputs} title="Add New User" />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="products">
            <Route
              index
              element={
                <ProtectedRoute>
                  <List table="propertyTable" title="Add Product" url="/products/new" />
                </ProtectedRoute>
              }
            />
            <Route path=":productId" element={<Single info="propertyInfo" />} />
            <Route
              path="new"
              element={
                <ProtectedRoute>
                  <New inputs={productInputs} title="Add New Product" />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="rooms">
            <Route
              index
              element={
                <ProtectedRoute>
                  <List table="roomTable" title="Add Room" url="/rooms/new" />
                </ProtectedRoute>
              }
            />
            <Route path=":productId" element={<Single info="propertyInfo" />} />
            <Route
              path="new"
              element={
                <ProtectedRoute>
                  <New inputs={productInputs} title="Add New Room" />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
