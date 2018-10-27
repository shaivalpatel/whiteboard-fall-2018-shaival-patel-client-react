const API_URL='http://localhost:8080/api/user/uid/course/cid/module/mid/lesson/lid/topic/'


export default class LessonService{
    static findAllTopics=(userId,courseId,moduleId,lessonId)=>{
        return fetch(API_URL.replace('uid',userId).replace('cid',courseId).replace('mid',moduleId).replace('lid',lessonId))
            .then(resposne=>respoinse.json())
    }


    static findTopicById=(userId,courseId,moduleId,lessonId,topicId)=>{
        fetch(API_URL.replace('uid',userId).replace('cid',courseId).replace('mid',moduleId).replace('lid',lessonId)+topicId).then(response=>response.json())
    }

    static updateTopic =(userId,courseId,moduleId,lessonId,topicid,topic)=>{
        fetch(API_URL.replace('uid',userId).replace('cid',courseId).replace('mid',moduleId).replace('lid',lessonId)+topicId,{
            body:JSON.stringify(topic),
            headers:{'content-type':'application/json'},
            method:"PUT"
        }).then(resposne=>response.json())
    }
    static deleteTopic= (userId,courseId,moduleId,lessonId,topicId,topic)=>{
        fetch(API_URL.replace('uid',userId).replace('cid',courseId).replace('mid',moduleId).replace('lid',lessonId)+topicId,{

            headers:{'content-type':'application/json'},
            method:"DELETE"
        }).then(resposne=>response.json())
    }

    static createTopic= (userId,courseId,moduleId,lessonId,topic)=>{
        fetch(API_URL.replace('uid',userId).replace('cid',courseId).replace('mid',moduleId).replace('lid',lessonId),{
            body:JSON.stringify(topic),
            headers:{'content-type':'application/json'},
            method:"POST"
        }).then(resposne=>response.json())

    }