
export const API_ROUTES = {
  // Example resource groups, adjust based on your backend
  contact: {
    submit: "/contact/submit",
  },
  blogs: {
    list: "/blogs",
    detail: (id: string | number) => `/blogs/${id}`,
  },
  services: {
    list: "/services",
  },
};

