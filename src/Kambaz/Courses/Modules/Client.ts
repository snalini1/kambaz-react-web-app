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
export const MODULES_API = `${REMOTE_SERVER}/api/modules`;

export const findAllModules = async () => {
  const response = await axiosWithCredentials.get(MODULES_API);
  return response.data;
};

export const findModuleById = async (moduleId: string) => {
  const response = await axiosWithCredentials.get(`${MODULES_API}/${moduleId}`);
  return response.data;
};

export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/courses/${courseId}/modules`);
  return response.data;
};

export const createModule = async (module: any) => {
  const response = await axiosWithCredentials.post(`${REMOTE_SERVER}/api/courses/${module.course}/modules`, module);
  return response.data;
};

export const deleteModule = async (moduleId: string) => {
  const response = await axiosWithCredentials.delete(
    `${MODULES_API}/${moduleId}`
  );
  return response.data;
}; 

export const updateModule = async (module: any) => {
  const { data } = await axiosWithCredentials.put(
    `${MODULES_API}/${module._id}`,
    module
  );
  return data;
};