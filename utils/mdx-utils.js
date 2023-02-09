import { api } from '../services/api'

export const 
getPosts = async () => {
    const {data} = await api.get('/posts'); 
    console.log(data)
    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    const data = posts.map(post => post.id === id);

    if (data){
        return data
    }
        return {title: 'Encontramos algum problema na requisição dos dados!'}

    }