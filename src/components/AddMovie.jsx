import React, { useState, useRef } from "react";
import { Formik, Field, Form } from "formik";
import { Button } from "react-bootstrap";

const AddMovie = ({ newMovie }) => {
  const submitHandler = (formData) => {
    newMovie(formData);
    console.log(formData);
  };
  return (
    <div
      style={{
        margin: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "5px",
      }}
    >
      <h1>Add Movie</h1>
      <Formik
        initialValues={{
          title: "",
          description: "",
          rating: "",
          posterURL: "",
        }}
        onSubmit={submitHandler}
      >
        <Form>
          <div style={{ display: "flex", marginBottom: "5px", gap: "50px" }}>
            <label htmlFor="title">Name</label>
            <Field name="title" type="text" />
          </div>

          <div style={{ display: "flex", marginBottom: "5px", gap: "15px" }}>
            <label htmlFor="description">Description</label>
            <Field name="description" type="text" />
          </div>

          <div style={{ display: "flex", marginBottom: "5px", gap: "50px" }}>
            <label htmlFor="rating">Rating</label>
            <Field name="rating" type="text" />
          </div>

          <div style={{ display: "flex", marginBottom: "5px", gap: "70px" }}>
            <label htmlFor="posterURL">URL</label>
            <Field name="posterURL" type="text" />
          </div>

          <button type="submit">Add movie</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddMovie;
