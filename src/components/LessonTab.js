import React from 'react'

const LessonTab = ({lesson, selectLesson, selected,deleteLesson,getLessonName}) =>
    <li className="nav-item">
        <a onClick={() => selectLesson(lesson)}
           className={selected ? "nav-link active" : "nav-link"}>
            {lesson.title}
            <a onClick= {()=>getLessonName(lesson)}>
                <i className="fa fa-pencil"></i></a>
            <a onClick= {()=>deleteLesson(lesson)}>
                <i className="fa fa-times"></i></a>
        </a>
    </li>

export default LessonTab