import React from "react";

class JobDataForm extends React.Component {
  render() {
    const {
      values: { resume, job, jobDescription },
      handleChanges,
    } = this.props;
    return (
      <fieldset>
        <div>
          <label>Resume</label>
          <textarea
            required
            maxLength={1000}
            name="resume"
            value={resume}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label>Job</label>
          <input
            required
            maxLength={40}
            type="text"
            name="job"
            value={job}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label>Job Description</label>
          <textarea
            required
            maxLength={500}
            name="jobDescription"
            value={jobDescription}
            onChange={handleChanges}
          />
        </div>
      </fieldset>
    );
  }
}

export default JobDataForm;
