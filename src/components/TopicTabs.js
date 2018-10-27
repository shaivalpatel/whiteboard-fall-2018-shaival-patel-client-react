import React from 'react'
import TopicTab from "./TopicTab";

const TopicTabs = ({topics, selectTopic, selectedTopic,deleteTopic,getTopicName ,topicChanged,addNewTopic}) =>
    <ul className="nav nav-tabs ">

        {
            topics.map((topic, index) =>
                <TopicTab
                    selected={selectedTopic === topic}
                    selectTopic={selectTopic}
                    topic={topic}
                    key={index}
                    topicChanged={this.topicChanged}
                    addNewTopic={this.addNewTopic}
                    deleteTopic={deleteTopic}
                getTopicName={getTopicName}/>
            )
        }
        <li>
            <input onChange={topicChanged} className="form-control"/>
            <button onClick={addNewTopic} className="btn btn-primary form-inline">Add</button>
        </li>
    </ul>

export default TopicTabs