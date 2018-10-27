import React from 'react'
import LessonTab from "./LessonTab";

const LessonTabs = ({lessons, selectLesson, selectedLesson,deleteLesson,getLessonName,lessonChanged,addNewLesson}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map((lesson, index) =>
                <LessonTab
                    selected={selectedLesson === lesson}
                    selectLesson={selectLesson}
                    lesson={lesson}
                    key={index}
                deleteLesson={deleteLesson}
            getLessonName={getLessonName}/>
            )
        }
        <li>
            <input onChange={lessonChanged} className="form-control"/>
            <button onClick={addNewLesson} className="btn btn-primary">Add</button>
        </li>
    </ul>

export default LessonTabs