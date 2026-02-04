// Central place to manage API endpoint paths
// Example usage:
// import { API_ROUTES } from "@/app/constants/apiRoutes";
// getRequest<User[]>(API_ROUTES.users.list);

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

