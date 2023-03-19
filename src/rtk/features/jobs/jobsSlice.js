import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Axios from '../../../utils/axiosInstance'


const initialState = {
    isLoading: false,
    allJobs: [],
    isError: false,
    error: "",
    editingNow: {}
}

// async thunks
export const getAllJobsThunk = createAsyncThunk('jobs/getAllJobsThunk', async () => {
    const allJobs = await Axios.get('/jobs')
    return allJobs.data
})

// for adding new job
export const addNewJobThunk = createAsyncThunk('jobs/addNewJobThunk', async (data) => {
    const newJob = await Axios.post('/jobs', data)
    return newJob.data
})

// for editing the job
export const editJobThunk = createAsyncThunk('jobs/editJobThunk', async ({ id, updateData }) => {
    const update = await Axios.patch(`/jobs/${id}`, updateData)
    return update.data
})

// for deleting the job
export const deleteJobThunk = createAsyncThunk('jobs/deleteJobThunk', async (id) => {
    const deleteJob = await Axios.delete(`/jobs/${id}`)
    console.log('data getting when delete press :', deleteJob.data);
    return deleteJob.data
})

const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        setEditItem: (state, action) => {
            state.editingNow = action.payload
        },
        removeEditItem: (state, action) => {
            state.editingNow = {}
        }
    },
    extraReducers: (builder) => {
        builder
            // for getting all jobs
            .addCase(getAllJobsThunk.pending, (state, action) => {
                state.isLoading = true
                state.allJobs = []
                state.isError = false
                state.error = ""
            })
            .addCase(getAllJobsThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.allJobs = action.payload
                state.isError = false
                state.error = ""
            })
            .addCase(getAllJobsThunk.rejected, (state, action) => {
                state.isLoading = false
                state.allJobs = []
                state.isError = true
                state.error = action.error.message
            })

            // for adding new job
            .addCase(addNewJobThunk.pending, (state, action) => {
                state.isLoading = true
                state.isError = false
                state.error = ""
            })
            .addCase(addNewJobThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.allJobs.push(action.payload)
                state.isError = false
                state.error = ""
            })
            .addCase(addNewJobThunk.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error.message
            })

            // for edit the job
            .addCase(editJobThunk.pending, (state, action) => {
                state.isLoading = true
                state.isError = false
                state.error = ""
            })
            .addCase(editJobThunk.fulfilled, (state, action) => {
                state.isLoading = false
                const indexToChange = state.allJobs.indexOf(job => job.id === action.payload.id)
                state.allJobs[indexToChange] = action.payload
                state.isError = false
                state.error = ""
            })
            .addCase(editJobThunk.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error.message
            })


            // for deleting job
            .addCase(deleteJobThunk.pending, (state, action) => {
                state.isLoading = true
                state.isError = false
                state.error = ""
            })
            .addCase(deleteJobThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.allJobs = state.allJobs.filter(job => job.id !== action.meta.arg)
                state.isError = false
                state.error = ""
            })
            .addCase(deleteJobThunk.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error.message
            })
    }
})

export const { setEditItem, removeEditItem } = jobSlice.actions
export default jobSlice.reducer