import React, { Fragment } from 'react';
import ClassCompoRefDemo from './components/ClassCompoRefDemo';
import ClickCounterHOC from './components/ClickCounterHOC';
import ClickCounterRenderRefs from './components/ClickCounterRenderRefs';
import ErrorBoundry from './components/ErrorBoundry';
import FragmentDemo from './components/FragmentDemo';
import Hero from './components/Hero';
import HoverCounterRenderRefs from './components/HoverCounterRenderRefs';
import HoverCountHOC from './components/HoverCountHOC';
import ParentCompo from './components/ParentCompo';
import PortalDemo from './components/PortalDemo';
import PureCompo from './components/PureCompo';
import RefForwardingParent from './components/RefForwardingParent';
import RefsDemo from './components/RefsDemo';
import ContextComponentC from './ContextComponentC';
import { UserProvider } from './ContextUser';
import WithRenderProps from './WithRenderProps';

function AdvanceConceptApp(props) {
    return (
        <div id='advanceConceptApp'>
           <FragmentDemo />
           <PureCompo />  
           <ParentCompo />
           <RefsDemo />    
           <ClassCompoRefDemo />  
           <RefForwardingParent />    
           <PortalDemo />
           <ErrorBoundry>
             <Hero heroName="Batman" />
           </ErrorBoundry>
           <ErrorBoundry>
           <Hero heroName="Superman" />
           </ErrorBoundry>
           <ErrorBoundry>
           <Hero heroName="joker" />
           </ErrorBoundry>
          <ClickCounterHOC name='Sujeet'/>
          <HoverCountHOC name='Rakesh'/>
          {/* <ClickCounterRenderRefs />
          <HoverCounterRenderRefs />
          <WithRenderProps name={(isLoggedIn) => isLoggedIn ? 'Sujeet' :'Guest'}/> */}
          {/* <WithRenderProps render={ (count, incrementCount) => (
            <ClickCounterRenderRefs count={count} incrementCount={incrementCount}/>
          )} />
          <WithRenderProps render={ (count, incrementCount) => (
            <HoverCounterRenderRefs count={count} incrementCount={incrementCount}/>
          )} /> */} 
          {/* above two are Render prop, Children prop can also be used. is is below */}

          <WithRenderProps>
            { (count, incrementCount) => (
            <ClickCounterRenderRefs count={count} incrementCount={incrementCount}/>
          )} 
          </WithRenderProps>
          <WithRenderProps>{ (count, incrementCount) => (
            <HoverCounterRenderRefs count={count} incrementCount={incrementCount}/>
          )} 
          </WithRenderProps> 

          {/* <UserProvider value="Sujeet"> */}
            <ContextComponentC />
          {/* </UserProvider>   */}
          <UserProvider value="Sujeet">
            <ContextComponentC />
          </UserProvider> 
        </div>
    );
}

export default AdvanceConceptApp;