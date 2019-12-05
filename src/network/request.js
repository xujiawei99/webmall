import axios from 'axios'
export function instance(config){
	const instance1 = axios.create({
		timeout:5000
	})
	return instance1(config)
}