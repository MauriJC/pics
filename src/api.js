import axios from "axios";

/**
 * Access key for unsplash
 * i6rrl8jB47meL3ie9TwN1f8IEEdJFGYNnie99ZbcaHs
 * 
 */


const searchImages = async (term)=>{

    const response = await axios.get('https://api.unsplash.com/search/photos',{
    headers:{
        Authorization: 'Client-ID i6rrl8jB47meL3ie9TwN1f8IEEdJFGYNnie99ZbcaHs'

    },
    params:{
        query: term
    }

    })

    //console.log(response.data.results);
    return response.data.results;

};

export default searchImages;