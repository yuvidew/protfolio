"use client"

import axios, { AxiosResponse } from 'axios';
import { enqueueSnackbar } from 'notistack';

interface ApiResponse {
    msg: string;
    id : string;
}

export interface Item {
    title : string,
    github : string,
    live : string,
}

interface ImgItem {
    image : string | undefined,
}

export interface Skills {
    skills : [string],
}

interface Description {
    description : string,
}


export const useFetch = () => {

    const onCreateProjectTitle = async (url: string, data: any): Promise<void> => {
        console.log(url , data);
        try {
            const res: AxiosResponse<ApiResponse> = await axios.post(url, data);
            if (res.status === 201) {
                enqueueSnackbar(res.data.msg, { variant: 'success' });
                localStorage.setItem("project-id" , res.data.id);
            }
        } catch (error: any) {
            enqueueSnackbar(error.response?.data?.msg || 'An error occurred', { variant: 'error' });
        }
    };

    const onUploadImage = async (url : string , imgUrl:ImgItem) : Promise<void> => {
        try {
            const res: AxiosResponse<ApiResponse> = await axios.post(url, imgUrl);
            if (res.status === 201) {
                enqueueSnackbar(res.data.msg, { variant: 'success' });
            }
        } catch (error: any) {
            enqueueSnackbar(error.response?.data?.msg || 'An error occurred', { variant: 'error' });
        }
    }

    const onAddTechSkills = async (url : string , data : Skills) : Promise<void> => {
        console.log(data);
        try {
            const res: AxiosResponse<ApiResponse> = await axios.post(url, data);
            if (res.status === 201) {
                enqueueSnackbar(res.data.msg, { variant: 'success' });
            }
        } catch (error: any) {
            enqueueSnackbar(error.response?.data?.msg || 'An error occurred', { variant: 'error' });
        }
    }

    const onAddProjectDetail = async (url : string , data : Description) : Promise<void> => {
        try {
            const res: AxiosResponse<ApiResponse> = await axios.post(url, data);
            if (res.status === 201) {
                enqueueSnackbar(res.data.msg, { variant: 'success' });
            }
        } catch (error: any) {
            enqueueSnackbar(error.response?.data?.msg || 'An error occurred', { variant: 'error' });
        }
    }

    const fetchData = async (url: string): Promise<Item[]> => {
        try {
            const res: AxiosResponse<Item[]> = await axios.get(url);
            return res.data;
        } catch (error: any) {
            enqueueSnackbar(error.response?.data?.msg || 'An error occurred', { variant: 'error' });
            return []; 
        }
    };
    

    const deleteById = async (url: string): Promise<void> => {
        try {
            const res: AxiosResponse<ApiResponse> = await axios.delete(url);
            if (res.status === 201) {
                enqueueSnackbar(res.data.msg, { variant: 'success' });
                window.location.reload();
            }
        } catch (error: any) {
            enqueueSnackbar(error.response?.data?.msg || 'An error occurred', { variant: 'error' });
        }
    };

    return { onCreateProjectTitle, fetchData, onUploadImage , onAddProjectDetail , onAddTechSkills ,  deleteById };
};
