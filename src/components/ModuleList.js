import React from 'react'
import ModuleListItem from "./ModuleListItem";
import ModuleService from "../services/ModuleService";

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            courseId:'',
            module:{title:''},
            modules:[]
        }


        }

        renderModules(modules){
        this.setState({modules:module})
        }

        findAllModules(courseId){
        ModuleService.findAllModules(courseId)


        }



    }
/*

        this.state = {
            newModule:
                {
                    title: 'New Module',
                    lessons:[]
                }
            ,
            modules: this.props.modules,
            lessons: this.props.modules.lessons,
            courseId : this.props.courseId
        }
    }

    formChanged = (event) => {
        this.setState({
            newModule:
                {
                    title: event.target.value,
                    lessons:[]
                }


        })
    }

    findAllCourses() {
        var courses = CourseServiceSingleton.findAllCourses()

        var self = this

        courses.map(course => {
            if(course.id === self.state.courseId){
                this.setState({
                    modules : course.modules,
                    lessons: course.modules.lessons
                })
            }
        })


    }

    addNewModule = () => {
        let modules = this.state.modules;
        modules.push(this.state.newModule
            );
        this.setState({
            modules: modules
        });
        console.log(this.state.modules)
    }

    deleteModule= module =>{

            CourseServiceSingleton.findAllCourses()
            CourseServiceSingleton.deleteModule(module)
            this.setState({
                courses: CourseServiceSingleton.findAllCourses()
            })
            this.findAllCourses()
        }
        getModuleName= (module) => {
            var newModuleName = prompt("Enter new module name", module.title);
            if ( newModuleName != null){
                module.title =  newModuleName ;
            }
            else{
                alert("Module name cannot be empty")
            }
            this.setState({
                courses: CourseServiceSingleton.findAllCourses()
            })
        }







    render() {
        return(
            <h2>
               <ul className="list-group">
                   <li className="list-group-item active">
                       Modules
                   </li>
                   <li className="list-group-item">
                       <input onChange={this.formChanged} className="form-control"/>
                       <button onClick={this.addNewModule} className="btn btn-primary">Add</button>
                   </li>

                   {

                       this.state.modules.map((module, index) => (

                           <ModuleListItem
                               selected={this.props.selectedModule === module}
                               selectModule={this.props.selectModule}
                               deleteModule={this.deleteModule}
                               key={index}
                               title={module.title}
                               module={module}
                           getModuleName={this.getModuleName}/>
                       ))
                   }
               </ul>
            </h2>
        )
    }
}*/
