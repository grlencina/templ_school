import React from 'react'
import Job from "./Job"
export default class JobsList extends React.Component {
    render() {
        const { currentUser, jobs } = this.props;
        if (jobs.length === 0) {
            return (
                <div className="container mt-4">
                <div className="alert alert-warning">There are no jobs yet.</div>
                </div>
            )
        } else {
            return jobs.map(job => <Job key={job.id} currentUser={currentUser} job={job} />);
        }
    }
}