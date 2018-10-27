import CourseServiceSingleton from '../services/CourseServiceSingleton'

const widgetReducer = (state = {widgets:[], preview:false}, action) => {

    switch (action.type) {
        case "INIT":
            return {
                widgets: CourseServiceSingleton.findAllWidgetsForTopic(action.topic),
                preview:state.preview,
                selectedTopic: action.topic
            };
        case "FIND_ALL_WIDGETS_FOR_TOPIC":{
            return {
                widgets: CourseServiceSingleton.findAllWidgetsForTopic(action.topic),
                selectedTopic: action.topic,
                preview:state.preview
            }
        }

        case "FIND_ALL_WIDGETS":{
            return{
                widgets:CourseServiceSingleton.findAllWidgetsForTopic(),
                preview:state.preview
            }
        }

        case "CREATE_WIDGET":{

            CourseServiceSingleton.createWidget(state.selectedTopic,action.widget);
            return{
                widgets:CourseServiceSingleton.findAllWidgetsForTopic(state.selectedTopic).slice(0),
                selectedTopic:state.selectedTopic,
                preview:state.preview

            }

        }

        case 'CHANGE_PREVIEW':{

            return {
                widgets:state.widgets,
                preview: !state.preview,
                selectedTopic:state.selectedTopic
            }}


        case "MOVE_UP":{

            CourseServiceSingleton.moveUp(state.selectedTopic, action.widget, action.index);
           return {
                widgets:CourseServiceSingleton.findAllWidgetsForTopic(state.selectedTopic).slice(0),
               selectedTopic:state.selectedTopic,
               preview:state.preview
           }
        }

        case "MOVE_DOWN":{

            CourseServiceSingleton.moveDown(state.selectedTopic, action.widget, action.index);
            return {
                widgets:CourseServiceSingleton.findAllWidgetsForTopic(state.selectedTopic).slice(0),
                selectedTopic:state.selectedTopic,
                preview:state.preview
            }
        }

        case"FIND_WIDGET": {
            return {
                widgets:CourseServiceSingleton.findWidget(action.widget.id),
                selectedTopic:state.selectedTopic,
                preview:state.preview
        }
        }

        case "DELETE_WIDGET":
            CourseServiceSingleton.deleteWidget(state.selectedTopic, action.widget);
            const newWidgets = CourseServiceSingleton.findAllWidgetsForTopic(state.selectedTopic);
            return {
                widgets: newWidgets.slice(0),
                selectedTopic: state.selectedTopic,
                preview:state.preview
            };
        case "UPDATE_WIDGET":
            CourseServiceSingleton.updateWidget(state.selectedTopic, action.widget);
            return {
                widgets: CourseServiceSingleton.findAllWidgetsForTopic(state.selectedTopic).slice(0),
                selectedTopic: state.selectedTopic,
                preview:state.preview

            };

        default:
            return state
    }
};

export default widgetReducer