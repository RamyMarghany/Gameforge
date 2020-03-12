import React, {useState, useEffect} from 'react';
import {BodyWrapper} from './style.css'
import TabController from '../tab'
import Acc from '../acc'

const Wrapper = () => {

    const [posts, setPosts] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch(
            "https://jsonplaceholder.typicode.com/posts"
        )
        .then(res=>{
            if(res.ok){
                return res.json()
            }
            else {
                throw new Error("something went wrong!");
            }
        })
        .then(res=>{
            setPosts(res)
        })

        fetch(
            "https://jsonplaceholder.typicode.com/albums"
        )
        .then(res=>{
            if(res.ok){
                return res.json()
            }
            else {
                throw new Error("something went wrong!");
            }
        })
        .then(res=>{
            setAlbums(res)
        })

        fetch(
            "https://jsonplaceholder.typicode.com/comments"
        )
        .then(res=>{
            if(res.ok){
                return res.json()
            }
            else {
                throw new Error("something went wrong!");
            }
        })
        .then(res=>{
            setComments(res)
        })
        
    },[])

    return(
        <BodyWrapper>
            <TabController/>
            <Acc 
                title='Post'
                body={
                    posts.map((post, index)=>{
                        return(
                            <p key={index}>{post.body}</p>  
                        )
                    })
                }
            />
            <Acc 
                title='Albums'
                body={
                    albums.map((album, index)=>{
                        return(
                            <p key={index}>{album.title}</p>  
                        )
                    })
                }
            />

            <Acc 
                title='Comments'
                body={
                    comments.map((comment, index)=>{
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
