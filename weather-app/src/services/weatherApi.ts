import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.BASE_URL_TWO;

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getweatherByIP: builder.query({
            query: () =>  `&user_ip=remote`

        }),
        getWeatherByCityName: builder.query({
            query: (cityName) => `&city_name=${cityName}`
        })
    })
})

export const {
    useGetweatherByIPQuery,
    useGetWeatherByCityNameQuery
} = weatherApi