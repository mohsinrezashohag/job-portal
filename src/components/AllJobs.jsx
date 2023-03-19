import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setSalaryCondition } from '../rtk/features/filter/filterSlice';
import { getAllJobsThunk } from '../rtk/features/jobs/jobsSlice';
import Loading from './Loading';
import SingleJob from './SingleJob';

const AllJobs = () => {
    const { isLoading, isError, error, allJobs } = useSelector(state => state.jobs)

    const { searchText, jobTypeCondition, salaryCondition } = useSelector(state => state.filter)

    // getting all jobs
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllJobsThunk())
    }, [dispatch])


    // handle salary sorting condition
    const [selection, setSelection] = useState(salaryCondition)
    const handleSalaryCondition = (e) => {
        setSelection(e.target.value)
    }
    useEffect(() => {
        dispatch(setSalaryCondition(selection))
    }, [selection])



    let jobsToMap = jobTypeCondition === 'Remote' ? allJobs.filter(job => job.type === 'Remote')
        : jobTypeCondition === 'Full Time' ? allJobs.filter(job => job.type === 'Full Time')
            : jobTypeCondition === 'Internship' ? allJobs.filter(job => job.type === 'Internship')
                : allJobs

    //making a copy for avoid manipulation
    let JobsCopy = [...jobsToMap]
    jobsToMap = salaryCondition === 'Salary (Low to High)' ? JobsCopy.sort((a, b) => a.salary - b.salary) : salaryCondition === 'Salary (High to Low)' ? JobsCopy.sort((a, b) => b.salary - a.salary) : jobsToMap



    let content
    if (isLoading) {
        content = <Loading></Loading>
    }

    if (!isLoading && !isError && jobsToMap.length === 0) {
        content = <h5 style={{ color: 'white' }}>no jobs available at this moment</h5>
    }



    // handle search condition & error or loading condition
    if (!isLoading && !isError && jobsToMap.length > 0) {
        if (searchText) {
            const searchFilteredJobs = jobsToMap.filter(job => job.title.toLowerCase().includes(searchText.toLowerCase()))
            content = searchFilteredJobs.length <= 0 ? <h5 style={{ color: 'white' }}>no result matched</h5> : searchFilteredJobs.map(job => <SingleJob job={job} key={job.id}></SingleJob>)
        }
        else {
            content = jobsToMap.map(job => <SingleJob job={job} key={job.id}></SingleJob>)
        }
    }



    if (!isLoading && isError) {
        content = <h5 style={{ color: 'red' }}>something is wrong</h5>
    }



    // handling search function
    const [inputText, setInputText] = useState(searchText)
    const handleSearchFunction = (e) => {
        setInputText(e.target.value)

    }
    useEffect(() => {
        dispatch(setSearchText(inputText))
    }, [inputText])

    return (
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">
            <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">


                <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">

                    <h1 className="my-section-title">{jobTypeCondition} Jobs</h1>


                    <div className="flex gap-4">

                        <div className="search-field group flex-1">
                            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>

                            <input
                                onChange={handleSearchFunction}
                                type="text"
                                placeholder="Search Job"
                                className="search-input"
                                id="my-searchJob" />

                        </div>


                        <select onChange={(e) => handleSalaryCondition(e)} value={selection} id="my-sort" name="sort" autoComplete="sort" className="flex-1">
                            <option>Default</option>
                            <option>Salary (Low to High)</option>
                            <option>Salary (High to Low)</option>
                        </select>


                    </div>



                </div>


                {/*  all jobs */}


                <div className="jobs-list">
                    {/* <!-- Single Job 1--> */}
                    {content}
                    {/* <!-- Single Job 1--> */}
                </div>




            </main >
        </div >
    );
};

export default AllJobs;