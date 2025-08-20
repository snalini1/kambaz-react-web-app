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
export const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${courseId}`);
  return response.data;
};

export const findAllAssignments = async () => {
  const response = await axiosWithCredentials.get(ASSIGNMENTS_API);
  return response.data;
};

export const findAssignmentById = async (assignmentId: string) => {
  const response = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

export const createAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.post(ASSIGNMENTS_API, assignment);
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
}; 