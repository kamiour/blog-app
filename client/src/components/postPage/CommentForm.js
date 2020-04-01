import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";

const CommentForm = props => {
  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address format";
    }

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.comment) {
      errors.comment = "Comment field cannot be empty";
    }

    return errors;
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", comment: "" }}
        isInitialValid={false}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          console.log("submitting");
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form className="uk-comment-form uk-margin-medium-top">
            <fieldset className="uk-fieldset">
              <legend className="uk-legend">Add Comment</legend>
              <div className="uk-margin">
                <Field
                  type="text"
                  name="name"
                  className="uk-input"
                  placeholder="Name"
                />
                <ErrorMessage name="name" component="div" />
              </div>
              <div className="uk-margin">
                <Field
                  type="email"
                  name="email"
                  className="uk-input"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="uk-margin">
                <Field
                  type="text"
                  name="comment"
                  className="uk-textarea"
                  placeholder="Comment"
                  as="textarea"
                />
                <ErrorMessage name="comment" component="div" />
              </div>
              <div className="uk-margin">
                <button
                  className="uk-button uk-button-primary"
                  type="submit"
                  disabled={!isValid}
                >
                  Post Comment
                </button>
              </div>
            </fieldset>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// const CommentForm = props => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [comment, setComment] = useState("");

//   const handleNameChange = value => {
//     setName(value);
//   };

//   const handleEmailChange = value => {
//     setEmail(value);
//   };

//   const handleCommentChange = value => {
//     setComment(value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     props.setComments([
//       ...props.comments,
//       {
//         postId: props.id,
//         id: Date.now(),
//         name: name,
//         email: email,
//         body: comment
//       }
//     ]);

//     setName("");
//     setEmail("");
//     setComment("");
//   };

//   return (
//     <form
//       action="#"
//       className="uk-comment-form uk-margin-medium-top"
//       onSubmit={handleSubmit}
//     >
//       <fieldset className="uk-fieldset">
//         <legend className="uk-legend">Add Comment</legend>
//         <div className="uk-margin">
//           <input
//             className="uk-input"
//             type="text"
//             placeholder="Name"
//             required
//             value={name}
//             onChange={event => handleNameChange(event.target.value)}
//           />
//         </div>
//         <div className="uk-margin">
//           <input
//             className="uk-input"
//             type="email"
//             placeholder="Email"
//             required
//             value={email}
//             onChange={event => handleEmailChange(event.target.value)}
//           />
//         </div>
//         <div className="uk-margin">
//           <textarea
//             className="uk-textarea"
//             rows="5"
//             placeholder="Comment"
//             required
//             value={comment}
//             onChange={event => handleCommentChange(event.target.value)}
//           />
//         </div>
//         <div className="uk-margin">
//           <button className="uk-button uk-button-primary" type="submit">
//             Post Comment
//           </button>
//         </div>
//       </fieldset>
//     </form>
//   );
// };

// CommentForm.propTypes = {
//   id: PropTypes.number,
//   comments: PropTypes.arrayOf(
//     PropTypes.exact({
//       postId: PropTypes.number,
//       id: PropTypes.number,
//       name: PropTypes.string,
//       email: PropTypes.string,
//       body: PropTypes.string
//     })
//   ),
//   setComments: PropTypes.func
// };

export default CommentForm;
