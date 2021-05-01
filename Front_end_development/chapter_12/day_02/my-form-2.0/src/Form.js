import React from "react";
import PersonDataForm from "./PersonDataForm";
import JobDataForm from "./JobDataForm";

class Form extends React.Component {
  render() {
    const { values, handleChanges } = this.props;
    return (
      <form>
        <PersonDataForm values={values} handleChanges={handleChanges} />
        <JobDataForm values={values} handleChanges={handleChanges} />
      </form>
    );
  }
}

export default Form;
