import React, {useState, useEffect} from 'react';
import Tab from './tab';
import Card from '../card'
import FetchingData from '../../utility/fetching'
import { APIConfig } from '../../config'
import {
        TabContainer, 
        TabsButtonsWrapper, 
        TabsButton, 
        TabsContent, 
        TabLayout, 
        Loading
    } from './style.css'

const TabController = () =>{
    const [currentTab, setCurrentTab] = useState(1);
    const [users, setUsers] = useState([]);
    const [todos, setTodos] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        FetchingData(APIConfig.USERS_URL, setUsers)
        FetchingData(APIConfig.TODOS_URL, setTodos)
        FetchingData(APIConfig.POSTS_URL, setPosts)    
    },[])

    const checkIfCurrent = tabID => (currentTab === tabID ? true : false);
    
    return(
        <>
        <TabsButtonsWrapper>
                <TabsButton
                    className={checkIfCurrent(1) ? "tab-btn btnActive" : "tab-btn"}
                    onClick={() => setCurrentTab(1)}
                >
                    Users
                </TabsButton>
                <TabsButton
                    className={checkIfCurrent(2) ? "tab-btn btnActive" : "tab-btn"}
                    onClick={() => setCurrentTab(2)}
                >
                    Todos
                </TabsButton>
                <TabsButton
                    className={checkIfCurrent(3) ? "tab-btn btnActive" : "tab-btn"}
                    onClick={() => setCurrentTab(3)}
                >
                    Posts
                </TabsButton>
            </TabsButtonsWrapper>
        <TabContainer className="tab-wrapper">
            <TabsContent className="tabs-content">
                <Tab tabID={1} isActive={checkIfCurrent(1)}>
                    <TabLayout>
                        { users.length > 0 ?(
                            users.map((user, index)=>{
                                return(
                                    <Card 
                                        key={index}
                                        firstLabel='Name: '
                                        secondLabel='Email: '
                                        mainInfo={user.name}
                                        secondaryInfo={user.email}
                                    />
                                )
                            })
                            ):(<Loading>Loading the all users...!</Loading>)
                        }
                    </TabLayout>
                </Tab>
                <Tab tabID={2} isActive={checkIfCurrent(2)}>
                <TabLayout>
                        {todos.length > 0 ?(
                            todos.slice(0,20).map((todo, index)=>{
                                return(
                                    <Card 
                                        key={index}
                                        firstLabel='Todo Title: '
                                        secondLabel='Completed: '
                                        mainInfo={todo.title}
                                        secondaryInfo={todo.completed.toString()}
                                    />
                                )
                            })
                            ):(<Loading>Loading the first <b>20</b> todo items...!</Loading>)
                        }
                    </TabLayout>
                </Tab>
                <Tab tabID={3} isActive={checkIfCurrent(3)}>
                <TabLayout>
                        { posts.length > 0 ?(
                            posts.slice(0,20).map((post, index)=>{
                                return(
                                    <Card 
                                        key={index}
                                        firstLabel='Title: '
                                        secondLabel='Body: '
                                        mainInfo={post.title}
                                        secondaryInfo={post.body}
                                    />
                                )
                            })
                            ):(<Loading>Loading the first <b>20</b> posts...!</Loading>)
                        }
                    </TabLayout>
                </Tab>
            </TabsContent>
        </TabContainer>
        </>
    )
}

export default TabController