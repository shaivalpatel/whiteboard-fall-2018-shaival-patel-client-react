const API_URL='http://localhost:8080/api/user/uid/course/cid/module/mid/lesson/'


export default class LessonService{
    static findAllLessons=(userId,courseId,moduleId)=>{
        return fetch(API_URL.replace('uid',userId).replace('cid',courseId).replace('mid',moduleId))
            .then(resposne=>respoinse.json())
    }


    static findLessonById=(userId,courseId,moduleId,lessonId)=>{
        fetch(API_URL.replace('uid',userId).replace('cid',courseId).replace('mid',moduleId)+lessonId).then(response=>response.json())
    }

    static updateLesson =(userId,courseId,moduleId,lessonId,lesson)=>{
        fetch(API_URL.replace('uid',userId).replace('cid',courseId).replace('mid',moduleId)+lessonId,{
            body:JSON.stringify(lesson),
            headers:{'content-type':'application/json'},
            method:"PUT"
        }).then(resposne=>response.json())
    }
    static deleteLesson= (userId,courseId,moduleId,lessonId)=>{
        fetch(API_URL.replace('uid',userId).replace('cid',courseId).replace('mid',moduleId)+lessonId,{

            headers:{'content-type':'application/json'},
            method:"DELETE"
        }).then(resposne=>response.json())
    }

    static createLesson= (userId,courseId,moduleId,lessonId,lesson)=>{
        fetch(API_URL.replace('uid',userId).replace('cid',courseId).replace('mid',moduleId)+lessonId,{
            body:JSON.stringify(lesson),
            headers:{'content-type':'application/json'},
            method:"POST"
        }).then(resposne=>response.json())

}