import React from 'react'

const ModuleListItem = ({module, deleteModule, selectModule, selected, getModuleName}) =>

    <li  onClick={() => selectModule(module)}className={(selected ? 'list-group-item active': 'list-group-item ')}>
        <div className="row nav-item ">
            <div className="col-sm-7">{module.title} </div>
            <div className="col-sm-2">


                <button  onClick={() => getModuleName(module)} className="btn btn-dark">
                    <i className="fa fa-pencil"></i>
                </button>
            </div>
            <div className="col-sm-2">
                <button  onClick={() => deleteModule(module)} className="btn btn-dark">
                    <i className="fa fa-times"></i>
                </button>
            </div>



        </div>
    </li>









export default ModuleListItem