import axios from 'axios';

export function applyTenant(data) {
    return axios.post('https://your-platform-api.com/apply', data);
}