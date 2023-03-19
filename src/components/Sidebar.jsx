import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeJobTypeCondition, setJobTypeCondition } from '../rtk/features/filter/filterSlice';

const Sidebar = () => {
    const dispatch = useDispatch()


    return (
        <div className="sidebar">
            <nav>
                <ul className="space-y-4">
                    <li>

                        <Link to="/" className="main-menu menu-active" id="my-alljobs-menu">
                            <i className="fa-solid fa-briefcase"></i>
                            <span onClick={() => dispatch(setJobTypeCondition('All Available'))}> All Available Jobs</span>
                        </Link>


                        <ul className="space-y-6 lg:space-y-2 ">

                            <li onClick={() => dispatch(setJobTypeCondition('Internship'))}>
                                <a className="sub-menu" href="#" id="my-internship-menu">
                                    <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                    Internship
                                </a>
                            </li>

                            <li onClick={() => dispatch(setJobTypeCondition('Full Time'))}>
                                <a className="sub-menu" href="#" id="my-fulltime-menu">
                                    <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                    Full Time
                                </a>
                            </li>

                            <li onClick={() => dispatch(setJobTypeCondition('Remote'))}>
                                <a className="sub-menu" href="#" id="my-remote-menu">
                                    <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                                    Remote
                                </a>
                            </li>


                        </ul>
                    </li>
                    <li>
                        <Link to="/add-new-job" href="/jobs" className="main-menu" id="my-addJob-menu">
                            <i className="fa-solid fa-file-circle-plus"></i>
                            <span>Add NewJob</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div >
    );
};

export default Sidebar;