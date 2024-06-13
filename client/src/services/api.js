import axios from 'axios';

const API_BASE_URL = '/api/issues';

export const getAllIssues = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const getIssueById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const createIssue = async (issue) => {
  const response = await axios.post(API_BASE_URL, issue);
  return response.data;
};

export const updateIssue = async (id, issue) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, issue);
  return response.data;
};

export const deleteIssue = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};
