import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import "../style.css";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  renderField = field => {
    const className = `form-control ${
      field.meta.touched && field.meta.error ? "border-danger" : ""
    }`;
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className={className}
          type="text"
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className="text-danger">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    );
  };

  onSubmit = async values => {
    await this.props.createPost(values);
    this.props.history.push("/");
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="container" onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="title"
          label="Title"
          placeholder="Enter title..."
          component={this.renderField}
        />
        <Field
          name="categories"
          label="Categories"
          placeholder="Add tags for searching..."
          component={this.renderField}
        />
        <Field
          name="content"
          label="Content"
          placeholder="Write your post!"
          component={this.renderField}
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  }

  if (!values.categories) {
    errors.categories = "Please add at least one tag!";
  }

  if (!values.content) {
    errors.content = "You gotta write something!";
  }

  return errors;
};

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { createPost })(PostsNew));
