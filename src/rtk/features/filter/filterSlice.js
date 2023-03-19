import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    jobTypeCondition: "All Available",
    searchText: "",
    salaryCondition: ""
}
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setJobTypeCondition: (state, action) => {
            state.jobTypeCondition = action.payload
        },

        // removeJobTypeCondition: (state, action) => {
        //     state.jobTypeCondition = ""
        // },

        setSearchText: (state, action) => {
            state.searchText = action.payload
        },
        setSalaryCondition: (state, action) => {
            state.salaryCondition = action.payload
        }
    }
})

export const { setJobTypeCondition, setSearchText, setSalaryCondition, removeJobTypeCondition } = filterSlice.actions
export default filterSlice.reducer