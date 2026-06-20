import Api from "../api.js";

export default false
  ? {
      message: "You are Offline. Please turn on the internet",
    }
  : {
      getAllFranchisesApi: (
        search,
        category,
        city,
        investment_min,
        investment_max,
      ) => {
        const params = {};

        if (search) params.search = search;
        if (category) params.category = category;
        if (city) params.city = city;
        if (investment_min) params.investment_min = investment_min;
        if (investment_max) params.investment_max = investment_max;

        return Api.get("/franchises", { params });
      },
      getFranchiseByIdApi: (slug) => {
        return Api.get(`/franchises/${slug}`);
      },
      submitEnquiryApi: (values) => {
        return Api.post(`/franchises/enquiry`, values);
      },
    };
