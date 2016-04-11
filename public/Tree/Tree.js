import React, { Component } from 'react';

import TreeAnimation from './TreeAnimation';
import TreeFunctions from './TreeFunctions';


export default class Tree extends Component {
  render() {
    return <div className="col-md-6">
             <button className="dataStructureTitle">TREE</button>
             <div>
               <TreeAnimation />
               <TreeFunctions />
             </div>
           </div>
  }
}