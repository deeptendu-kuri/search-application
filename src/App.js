// // import "./App.css";
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Formik, Form, Field, ErrorMessage } from "formik";
// // import * as Yup from "yup";

// // const SearchApp = () => {
// //   const [data, setData] = useState([]);
// //   const [filteredData, setFilteredData] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await axios.get(
// //         "https://jsonplaceholder.typicode.com/todos"
// //       );
// //       setData(response.data);
// //       setFilteredData(response.data);
// //       setLoading(false);
// //     } catch (error) {
// //       setError("Failed to fetch data.");
// //       setLoading(false);
// //     }
// //   };

// //   const handleSearch = (values) => {
// //     const searchQuery = values.query.toLowerCase();
// //     const results = data.filter((item) =>
// //       item.title.toLowerCase().includes(searchQuery)
// //     );
// //     setFilteredData(results);
// //   };

// //   const validationSchema = Yup.object({
// //     query: Yup.string().required("Search query is required"),
// //   });

// //   return (
// //     <div>
// //       <h1>Todo Search App</h1>
// //       <Formik
// //         initialValues={{ query: "" }}
// //         validationSchema={validationSchema}
// //         onSubmit={handleSearch}
// //       >
// //         {({ isSubmitting }) => (
// //           <Form>
// //             <Field name="query" placeholder="Search todos..." />
// //             <ErrorMessage
// //               name="query"
// //               component="div"
// //               style={{ color: "red" }}
// //             />
// //             <button type="submit" disabled={isSubmitting}>
// //               Search
// //             </button>
// //           </Form>
// //         )}
// //       </Formik>

// //       {loading && <p>Loading...</p>}
// //       {error && <p>{error}</p>}
// //       {!loading && !error && filteredData.length === 0 && (
// //         <p>No results found.</p>
// //       )}
// //       <ul>
// //         {filteredData.map((item) => (
// //           <li key={item.id}>{item.title}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default SearchApp;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const SearchApp = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
//       setData(response.data);
//       setFilteredData(response.data);
//       setLoading(false);
//     } catch (error) {
//       setError('Failed to fetch data.');
//       setLoading(false);
//     }
//   };

//   const handleSearch = (values) => {
//     const searchQuery = values.query.toLowerCase();
//     const results = data.filter(item =>
//       item.title.toLowerCase().includes(searchQuery)
//     );
//     setFilteredData(results);
//   };

//   const validationSchema = Yup.object({
//     query: Yup.string().required('Search query is required'),
//   });

//   return (
//     <div className="container">
//       <h1 className="heading">Todo Search App</h1>

//       <Formik
//         initialValues={{ query: '' }}
//         validationSchema={validationSchema}
//         onSubmit={handleSearch}
//       >
//         {({ isSubmitting }) => (
//           <Form className="form">
//             <Field
//               name="query"
//               placeholder="Search todos..."
//               style={styles.input}
//             />
//             <ErrorMessage
//               name="query"
//               component="div"
//               style={styles.error}
//             />
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               style={styles.button}
//             >
//               Search
//             </button>
//           </Form>
//         )}
//       </Formik>

//       {loading && <p style={styles.loading}>Loading...</p>}
//       {error && <p style={styles.error}>{error}</p>}
//       {!loading && !error && filteredData.length === 0 && (
//         <p style={styles.noResults}>No results found.</p>
//       )}
//       <ul style={styles.list}>
//         {filteredData.map(item => (
//           <li key={item.id} style={styles.listItem}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: '400px',
//     margin: '0 auto',
//     padding: '20px',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '8px',
//     boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//   },
//   heading: {
//     textAlign: 'center',
//     fontSize: '24px',
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//   },
//   input: {
//     padding: '8px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #ddd',
//   },
//   button: {
//     padding: '10px',
//     fontSize: '16px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   error: {
//     color: 'red',
//     fontSize: '12px',
//     marginBottom: '10px',
//   },
//   loading: {
//     textAlign: 'center',
//     fontSize: '16px',
//     color: '#555',
//   },
//   noResults: {
//     textAlign: 'center',
//     fontSize: '16px',
//     color: '#555',
//   },
//   list: {
//     listStyleType: 'none',
//     padding: '0',
//     marginTop: '20px',
//   },
//   listItem: {
//     padding: '10px',
//     backgroundColor: '#fff',
//     marginBottom: '8px',
//     borderRadius: '4px',
//     boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
//   },
// };

// export default SearchApp;

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
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery)
    );
    setFilteredData(results);
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
        {({ isSubmitting }) => (
          <Form className="form">
            <Field
              name="query"
              placeholder="Search todos..."
              className="input"
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
      <ul className="list">
        {filteredData.map((item) => (
          <li key={item.id} className="list-item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchApp;
