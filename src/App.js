import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.css"; // Import the CSS file

const SearchApp = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setData(response.data);
      setFilteredData(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch data.");
      setLoading(false);
    }
  };

  const handleSearch = (values) => {
    const searchQuery = values.query.toLowerCase();

    if (searchQuery === "") {
      // Reset to the original data if query is empty
      setFilteredData(data);
    } else {
      const results = data.filter((item) =>
        item.title.toLowerCase().includes(searchQuery)
      );
      setFilteredData(results);
    }
  };

  const handleChange = (e, handleChangeFn) => {
    const searchQuery = e.target.value.toLowerCase();
    handleChangeFn(e);

    if (searchQuery === "") {
      setFilteredData(data);
    }
  };

  const validationSchema = Yup.object({
    query: Yup.string().required("Search query is required"),
  });

  return (
    <div className="container">
      <h1 className="heading">Todo Search App</h1>

      <Formik
        initialValues={{ query: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSearch}
      >
        {({ isSubmitting, handleChange: formikHandleChange }) => (
          <Form className="form">
            <Field
              name="query"
              placeholder="Search todos..."
              className="input"
              onChange={(e) => handleChange(e, formikHandleChange)}
            />
            <ErrorMessage name="query" component="div" className="error" />
            <button type="submit" disabled={isSubmitting} className="button">
              Search
            </button>
          </Form>
        )}
      </Formik>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && filteredData.length === 0 && (
        <p className="no-results">No results found.</p>
      )}

      <div className="scrollable-list">
        <ul className="list">
          {filteredData.map((item, index) => (
            <li key={item.id} className="list-item">
              {index + 1}. {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchApp;
