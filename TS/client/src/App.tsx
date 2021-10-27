import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { ErrorBoundary } from "react-error-boundary";
import Employees from "./components/Employees/Employees";
import Form from "./components/Form/Form";
import Pagination from "./components/Pagination/Pagination";
// import Fallback from "./components/Fallback/Fallback";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { State } from "./state/reducers/index";
import { EmployeeActions } from "./state/index";
import { bindActionCreators } from "redux";

const App: React.FC = () => {
  const currId = useSelector((state: State) => (state.ids ? state.ids : null));
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(8);
  const { getEmployees } = bindActionCreators(EmployeeActions, dispatch);

  useEffect(() => {
    getEmployees();
    setLoading(false);
  }, [currId, dispatch]);

  // Change Page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const length = useSelector((state: State) => state.employees).length;

  return (
    // <ErrorBoundary FallbackComponent={Fallback}>
    <Router>
      <Nav />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Fragment>
              <Employees
                currentPage={currentPage}
                employeesPerPage={employeesPerPage}
                loading={loading}
              />
              <Pagination
                employeesPerPage={employeesPerPage}
                totalEmployees={length}
                paginate={paginate}
              />
            </Fragment>
          )}
        />
        <Route path="/form" component={Form} />
      </Switch>
    </Router>
    // </ErrorBoundary>
  );
};

export default App;
