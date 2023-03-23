import axiosInstance from './setupAPI';



export function getAllQuestions() {
    return axiosInstance.get('v1/questions', { crossdomain: true });
}