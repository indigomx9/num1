import React from 'react';
import { connect } from 'react-redux';
import NControl from '../components/NControl/NControl';
import NOutput from '../components/NOutput/NOutput';
import { 
    INCREMENT, DECREMENT, ADD, SUBTRACT,
    STORE_RESULT, DELETE_RESULT
 } from '../actions/actionTypes';

 class Number extends React.Component {
     render() {
         return (
             <div>
                 <NOutput value={this.props.ctr} />
                 <NControl label="Increment" clicked={this.props.onIncrementNumber} />
                 <NControl label="Decrement" clicked={this.props.onDecrementNumber} />
                 <NControl label="Add 10" clicked={this.props.onAddNumber} />
                 <NControl label="Subtract 15" clicked={this.props.onSubtractNumber} />
                 <hr/>
                 <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                 <ul>
                     {this.props.storedResults.map(strResult => (
                         <li
                            key={strResult.id}
                            onClick={() => this.props.onDeleteResult(strResult.id)}
                            >{strResult.value}
                        </li>
                     ))}
                 </ul>
             </div>
         );
     }
 };

 let mapStateToProps = (state) => {
     return {
         ctr: state.ctr.number,
         storedResults: state.res.results
     }
 };

 let mapDispatchToProps = (dispatch) => {
     return {
         onIncrementNumber: () => dispatch({ type: INCREMENT }),
         onDecrementNumber: () => dispatch({ type: DECREMENT }),
         onAddNumber: () => dispatch({ type: ADD, payload: 10 }),
         onSubtractNumber: () => dispatch({ type: SUBTRACT, payload: 15 }),
         onStoreResult: (result) => dispatch({ type: STORE_RESULT, payload: result }),
         onDeleteResult: (id) => dispatch({ type: DELETE_RESULT, payload: id })
     }
 };

 export default connect(mapStateToProps, mapDispatchToProps)(Number);

