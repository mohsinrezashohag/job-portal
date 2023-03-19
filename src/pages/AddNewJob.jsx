import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { setJobTypeCondition } from '../rtk/features/filter/filterSlice';
import { addNewJobThunk } from '../rtk/features/jobs/jobsSlice';

const AddNewJob = () => {

    const [input, setInput] = useState({ title: "", type: '', salary: '', deadline: '', })
    // reset form
    const reset = () => {
        setInput({ title: "", type: '', salary: '', deadline: '', })
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(input);
        dispatch(addNewJobThunk({ ...input, salary: Number(input.salary) }))
        reset()
        dispatch(setJobTypeCondition('All Available'))
        navigate('/')
    }



    return (
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">


            <Sidebar></Sidebar>


            <div className="lg:pl-[14rem] mt-[5.8125rem]">
                <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                    <h1 className="mb-10 text-center my-section-title">Add New Job</h1>

                    <div className="max-w-3xl mx-auto">


                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="fieldContainer">
                                <label htmlFor="my-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>


                                <select
                                    onChange={(e) => setInput({ ...input, title: e.target.value })}
                                    value={input.title}
                                    id="my-JobTitle"
                                    name="lwsJobTitle"
                                    required>

                                    <option value="" hidden defaultChecked>Select Job</option>
                                    <option>Software Engineer</option>
                                    <option>Software Developer</option>
                                    <option>Full Stack Developer</option>
                                    <option>MERN Stack Developer</option>
                                    <option>DevOps Engineer</option>
                                    <option>QA Engineer</option>
                                    <option>Product Manager</option>
                                    <option>Social Media Manager</option>
                                    <option>Senior Executive</option>
                                    <option>Junior Executive</option>
                                    <option>Android App Developer</option>
                                    <option>IOS App Developer</option>
                                    <option>Frontend Developer</option>
                                    <option>Frontend Engineer</option>
                                </select>


                            </div>

                            <div className="fieldContainer">
                                <label htmlFor="my-JobType">Job Type</label>
                                <select
                                    onChange={(e) => setInput({ ...input, type: e.target.value })}
                                    value={input.type}
                                    id="my-JobType"
                                    name="lwsJobType"
                                    required>

                                    <option value="" hidden defaultChecked>Select Job Type</option>
                                    <option>Full Time</option>
                                    <option>Internship</option>
                                    <option>Remote</option>
                                </select>
                            </div>



                            <div className="fieldContainer">
                                <label htmlFor="my-JobSalary">Salary</label>
                                <div className="flex border rounded-md shadow-sm border-slate-600">
                                    <span className="input-tag">BDT</span>

                                    <input
                                        onChange={(e) => setInput({ ...input, salary: e.target.value })}
                                        value={input.salary}
                                        type="number"
                                        name="lwsJobSalary"
                                        id="my-JobSalary"
                                        required
                                        className="!rounded-l-none !border-0"
                                        placeholder="20,00,000" />

                                </div>
                            </div>




                            <div className="fieldContainer">
                                <label htmlFor="my-JobDeadline">Deadline</label>
                                <input
                                    onChange={(e) => setInput({ ...input, deadline: e.target.value })}
                                    value={input.deadline}
                                    type="date"
                                    name="lwsJobDeadline"
                                    id="my-JobDeadline"
                                    required />
                            </div>

                            <div className="text-right">
                                <button type="submit" id="my-submit" className="cursor-pointer btn btn-primary w-fit">
                                    Add Job
                                </button>
                            </div>
                        </form>


                    </div>
                </main>
            </div >
        </div >
    );
};

export default AddNewJob;