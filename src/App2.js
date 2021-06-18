import React from 'react';
import ClassEventHandling from './components/ClassEventHandling';
import ConditionalRendering from './components/ConditionalRendering';
import EventBinding from './components/EventBinding';
import FormHandlingInReact from './components/FormHandlingInReact';
import FunctionalEventHandling from './components/FunctionalEventHandling';
import LifeCycleA from './components/LifeCycleA';
import ListRendering from './components/ListRendering';
import MethodAsPropsParent from './components/MethodAsPropsParent';
import ReactStyling from './components/ReactStyling';

function App2(){
    return (
        <div id ='App2'>
            <FunctionalEventHandling />
            <ClassEventHandling />
            <EventBinding />
            <MethodAsPropsParent />
            <ConditionalRendering />
            <ListRendering />
            <ReactStyling primary={true}/>
            <FormHandlingInReact />
            <LifeCycleA />
        </div>
    )
}

export default App2