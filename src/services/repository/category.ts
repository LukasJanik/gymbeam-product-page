import { useQuery } from 'react-query';
import { GET_CATEGORY } from '@gymbeam/services/repository/keys';
import axios from 'axios';

export const useGetCategory = () => {
    return useQuery([GET_CATEGORY], async () => {
        return axios.get('/api', { headers: { 'Content-Type': 'application/json' } });
    });
};
