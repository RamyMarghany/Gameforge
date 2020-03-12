import React, {useState, useEffect} from 'react';
import {BodyWrapper} from './style.css'
import TabController from '../tab'
import Accordion from '../accordion'
import FetchingData from '../../utility/fetching'

const Wrapper = () => {

    const [posts, setPosts] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [comments, setComments] = useState([]);
    
    useEffect( () => {
        FetchingData('https://jsonplaceholder.typicode.com/posts', setPosts)
        FetchingData('https://jsonplaceholder.typicode.com/albums', setAlbums)
        FetchingData('https://jsonplaceholder.typicode.com/comments', setComments)
    },[])

    return(
        <BodyWrapper>
            <TabController/>
            <Accordion            title='Post'
                body={
                    posts.slice(0,10).map((post, index)=>{
                        return(
                            <p key={index}>{post.body}</p>  
                        )
                    })
                }
            />
            <Accordion            title='Albums'
                body={
                    albums.slice(0,10).map((album, index)=>{
                        return(
                            <p key={index}>{album.title}</p>  
                        )
                    })
                }
            />

            <Accordion            title='Comments'
                body={
                    comments.slice(0,10).map((comment, index)=>{
                        return(
                            <p key={index}>{comment.body}</p>  
                        )
                    })
                }
            />
        </BodyWrapper>
    )
}

export default Wrapper
