import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

axiosWithCredentials.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      return Promise.reject(error);
    }
    console.error('Axios error:', error);
    return Promise.reject(error);
  }
);

export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
export const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get(USERS_API);
  return response.data;
};

export const findUserById = async (userId: string) => {
  const response = await axiosWithCredentials.get(`${USERS_API}/${userId}`);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axiosWithCredentials.post(USERS_API, user);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/${user._id}`,
    user
  );
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}`);
  return response.data;
};

export const findUsersForCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
  return data;
};

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/${userId}/courses/${courseId}`);
  return response.data;
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}/courses/${courseId}`);
  return response.data;
}; 