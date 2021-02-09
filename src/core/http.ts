import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { store } from '@/store';

function mutateLoadingModuleOnRequest(config: AxiosRequestConfig): AxiosRequestConfig|Promise<AxiosRequestConfig> {
	store.dispatch('loading/SET_LOADING', true);
	return config;
}

function handleHttpResponse(value: AxiosResponse): (AxiosResponse<any> | Promise<AxiosResponse<any>>) {
	store.dispatch('loading/SET_LOADING', false);
	return value;
}
axios.interceptors.request.use(mutateLoadingModuleOnRequest);
axios.interceptors.response.use(handleHttpResponse);
