import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteJobThunk, setEditItem } from '../rtk/features/jobs/jobsSlice';
import { numberWithCommas } from '../utils/commaThousand';

const SingleJob = ({ job }) => {
    const { id, title, type, salary, deadline } = job || {}

    const dispatch = useDispatch()
    const handleDeleteJob = (id) => {
        dispatch(deleteJobThunk(id));
    }

    const handleEditIcon = () => {
        dispatch(setEditItem(job))
    }

    return (
        <div className="my-single-job">
            <div className="flex-1 min-w-0">
                <h2 className="my-title">{title}</h2>
                <div className="job-footers">

                    <div className="my-type">

                        {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}

                        <i className={`fa-solid fa-stop ${type === 'Full Time' && '!text-[#FF8A00]'} ${type === 'Internship' && '!text-[#FF5757]'} ${type === 'Remote' && '!text-[#56E5C4]'} text-lg mr-1.5`}></i>
                        {type}

                    </div>


                    <div className="my-salary">
                        <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                        {numberWithCommas(salary)}
                    </div>
                    <div className="my-deadline">
                        <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                        Closing on {deadline}
                    </div>
                </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">



                <Link to="/edit-job">

                    <span onClick={() => handleEditIcon()} className="hidden sm:block">
                        <button type="button" className="my-edit btn btn-primary">
                            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                            Edit
                        </button>
                    </span>

                </Link>



                <span onClick={() => handleDeleteJob(id)} className="sm:ml-3">
                    <button type="button" className="my-delete btn btn-danger ">
                        <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
                        Delete
                    </button>
                </span>
            </div>
        </div>
    );
};

export default SingleJob;