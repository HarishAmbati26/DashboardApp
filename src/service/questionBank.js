import axiosInstance from './setupAPI';

export function getAllQuestions() {
    return axiosInstance.get('v1/questions');
}

export function getAllQuestionsByLevel(level) {
    return axiosInstance.get(`v1/questions/level/${level}`);
}