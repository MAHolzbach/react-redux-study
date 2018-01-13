import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField = field => {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          placeholder={field.placeholder}
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  };

  onSubmit = values => {
    console.log(values);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
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
        <button className="btn btn-danger">Cancel</button>
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
})(PostsNew);
