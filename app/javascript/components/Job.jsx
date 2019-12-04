import React from 'react'
export default class Job extends React.Component {
    render() {
        const { currentUser, job } = this.props;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-4 mt-4 shadow-sm">
                        <h5 className="card-header">{job.title}</h5>
                        <div className="card-body">
                            <p className="card-text">{job.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <a className="btn btn-sm btn-outline-secondary" href={`/jobs/${job.id}`}>Show</a>
                            {currentUser && job.user.id === currentUser.id &&
                            <>
                            <a className="btn btn-sm btn-outline-secondary"
                            href={`/jobs/${job.id}/edit`}>Edit</a>
                            <a className="btn btn-sm btn-outline-danger" href={`/jobs/${job.id}`}
                            data-method="delete" data-confirm="Are you sure?">Destroy</a>
                            </>
                            }
                            {currentUser && job.user.id !== currentUser.id && !job.applicantIds.find(x => x
                            === currentUser.id) &&
                            <a className="btn btn-sm btn-outline-primary" href={`/jobs/${job.id}/apply`}
                            data-method="post" data-confirm="Are you sure?">Apply</a>
                            }
                            </div>
                            <small className="text-muted"><strong>{job.category.name}</strong> by
                            {job.user.email}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}