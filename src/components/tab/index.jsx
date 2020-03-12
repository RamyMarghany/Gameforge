import React, {useState, useEffect} from 'react';
import Tab from './tab';
import Card from '../card'
import {TabContainer, TabsButtonsWrapper, TabsButton, TabsContent, TabLayout} from './style.css'

const TabController = () =>{
    const [currentTab, setCurrentTab] = useState(1);
    const [users, setUsers] = useState([]);
    const [todos, setTodos] = useState([]);
    const [posts, setPosts] = useState([]);


    useEffect(()=>{
        fetch(
            "https://jsonplaceholder.typicode.com/users"
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
            setUsers(res)
          })

          fetch(
            "https://jsonplaceholder.typicode.com/todos"
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
            setTodos(res)
          })

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
                            ):(<p>loading...!</p>)
                        }
                    </TabLayout>
                </Tab>
                <Tab tabID={2} isActive={checkIfCurrent(2)}>
                <TabLayout>
                        {todos.length > 0 ?(
                            todos.map((todo, index)=>{
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
                            ):(<p>loading...!</p>)
                        }
                    </TabLayout>
                </Tab>
                <Tab tabID={3} isActive={checkIfCurrent(3)}>
                <TabLayout>
                        { posts.length > 0 ?(
                            posts.map((post, index)=>{
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
                            ):(<p>loading...!</p>)
                        }
                    </TabLayout>
                </Tab>
            </TabsContent>
        </TabContainer>
        </>
    )
}

export default TabController