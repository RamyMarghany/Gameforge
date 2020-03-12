import React, {useState, useEffect} from 'react';
import Tab from './tab';
import Card from '../card'
import {TabContainer, TabsButtonsWrapper, TabsButton, TabsContent, TabLayout} from './style.css'

const TabController = () =>{
    const [currentTab, setCurrentTab] = useState(1);
    const [users, setUsers] = useState([]);

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
                    Tab 2
                </TabsButton>
                <TabsButton
                    className={checkIfCurrent(3) ? "tab-btn btnActive" : "tab-btn"}
                    onClick={() => setCurrentTab(3)}
                >
                    Tab 3
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
                                        name={user.name}
                                        email={user.email}
                                    />
                                )
                            })
                            ):(<p>loading...!</p>)
                        }
                    </TabLayout>
                </Tab>
                <Tab tabID={2} isActive={checkIfCurrent(2)}>
                    <>
                        <p>Tab 2</p>
                        <p>
                            <span role="img" aria-label="party-emoji">
                            🎉
                            </span>
                        </p>
                    </>
                </Tab>
                <Tab tabID={3} isActive={checkIfCurrent(3)}>
                    <>
                        <p>Tab 3</p>
                        <p>
                            <span role="img" aria-label="party-emoji">
                            🎉
                            </span>
                        </p>
                    </>
                </Tab>
            </TabsContent>
        </TabContainer>
        </>
    )
}

export default TabController