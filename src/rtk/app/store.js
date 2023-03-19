import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../features/filter/filterSlice";
import jobsSlice from "../features/jobs/jobsSlice";

const store = configureStore({
    reducer: {
        jobs: jobsSlice,
        filter: filterSlice
    }
})

export default store