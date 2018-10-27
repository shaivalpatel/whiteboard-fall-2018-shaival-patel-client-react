const API_URL='http://localhost:8080/api/user/uid/course/cid/module/'

export default class ModuleService{




   static  findAllModules (userId,courseId){
        return fetch(API_URL.replace('cid',courseId).replace('uid',userId).then(response=> response.json()));
    }

    static createModule(courseID,userId,module){
       return fetch(API_URL.replace('cid',courseID).replace('uid',userId),{
           body:JSON.stringify(module),
           method:"POST",
           headers:{
               'Content-Type':'application/json'
           }
        }).then(response=>response.json())
    }


    static editModule(moduleId,courseId,userId,module){
       return fetch(API_URL.replace('cid',courseId).replace('uid',userId)+moduleId,{
           body:JSON.stringify(module),
           method:'PUT',
           headers:{
               'Content-Type':'application/json'
           }
       }).then(response=>response.json())
    }

    static deleteModule(moduleId,courseId,userId){
        return fetch(API_URL.replace('cid',courseId).replace('uid',userId)+moduleId,{
            body:JSON.stringify(module),
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response=>response.json())
    }

    static findModuleById(moduleId,courseId,userId){
        return fetch(API_URL.replace('cid',courseId).replace('uid',userId)+moduleId,{


        }).then(response=>response.json())
    }
}