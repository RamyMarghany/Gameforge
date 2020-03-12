import React, {useState, useEffect} from 'react';
import {BodyWrapper} from './style.css'
import TabController from '../tab'
import Accordion from '../accordion'
import FetchingData from '../../utility/fetching'
import { displayConfig, APIConfig } from '../../config'

const Wrapper = () => {

    const [posts, setPosts] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [comments, setComments] = useState([]);
    const { NUMBER_OF_POSTS, NUMBER_OF_ALBUMS, NUMBER_OF_COMMENTS} = displayConfig
    
    useEffect(() => {
        FetchingData(APIConfig.POSTS_URL, setPosts)
        FetchingData(APIConfig.ALBUMS_URL, setAlbums)
        FetchingData(APIConfig.COMMENTS_URL, setComments)
    }, [])

    
    return(
        <BodyWrapper data-testid='wrapper'>
            <TabController/>
            <Accordion 
                title='Post'
                body={
                    posts.slice(0, NUMBER_OF_POSTS).map((album, index)=>{
                    return(
                        <p key={index}>{album.title}</p>  
                    )
                })}
            />
            <Accordion            
                title='Albums'
                body={
                    albums.slice(0, NUMBER_OF_ALBUMS).map((album, index)=>{
                        return(
                            <p key={index}>{album.title}</p>  
                        )
                    })
                }
            />

            <Accordion            
                title='Comments'
                body={
                    comments.slice(0, NUMBER_OF_COMMENTS).map((comment, index)=>{
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
