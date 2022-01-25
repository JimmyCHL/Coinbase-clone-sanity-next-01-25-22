import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "4auw4lgw",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skfjhRlUw7r14MXo7OZcyOLpKMqrnFy1A7zSymhqbIwb717Bf39d0aKhi8bGwSLJFgPBTJ4Unn7W0xEuRnyMx5APqmvEFM6zGJo4NGG04vMrvtHDCkJXut8ci5zkAxFD14Wc8nxrqDmNKy6Uz8AsU6mM3gexfglWs0J0meCVqObdpq3u1iFV",
  useCdn: false,
});
