import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseUrl = 'https://api.hgbrasil.com/weather?format=json&key=e05dcdac';


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getweatherByIP: builder.query({
            query: () =>  `user_ip=remote`

        })
    })
})

export const {
    useGetweatherByIPQuery
} = weatherApi