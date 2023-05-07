// import { Button, CircularProgress } from "@material-ui/core";
// import React from "react";
// import LogService from "./LogService.js";
// import { FaCheckCircle } from "react-icons/fa";
// import { NavLink, withRouter } from "react-router-dom";
// import { connect } from "react-redux";

// /**
//  * IntersectionObserver API에 대한 래퍼 구성 요소 네트워크입니다.
//  */

// const mapStateToProps = (state) => {
//   return {
//     Rescode2:state.AccountReducer.Rescode2
//   }
// }

// class Logtail extends React.Component {
//   state = {
//     logs: [],
//     logs2: [],
//     target: null,
//     text: '설치중',
//     result:true,
//     page:true,
//   };
//   /**
//    * 구성 요소가 마운트되면 로그 폴링을 시작합니다
//    */
//   componentDidMount() {
//     setInterval(() => {
//       LogService.poll(this.handleNewLog)
//     }, 5000);
//   }
//   /**
//    * 콜백은 상태의 'logs' 배열에 새 로그 메시지를 추가합니다.
//    */ 
  
//   handleNewLog = (log) => {
//     this.setState(state => ({
//       logs: state.logs.concat([log]),
     
//     }));
//     const logs = this.state.logs;
//     const logs2 = this.state.logs2;
//     if(this.props.Rescode2 === '0000' || this.props.Rescode2==='E001' || this.props.Rescode2==='E002' || this.props.Rescode2 === 'E003'){
//       this.setState({
//        result: false
//       })
//      }
//     const target = this.state.target;
//     if (target) {
//       target.scrollIntoView();
//     }
//   };
//   render() {
//     const { logs, text, result} = this.state;
//     const Rescode2 = this.props.Rescode2;

//     return (
//       <div>
//       <div style={{overflow:"scroll",height:"370px"}}>
//         <div className="logs">
//           {logs.map((log, index) => (
//             <pre key={index}>
//               <code style={{fontSize:"3px"}}>{log}</code>
//             </pre>
//           ))}
//         </div>
 
//           <div className="intersection-target">
//             {/* <code>{text}</code> */}
//           </div>
      
//       </div>
//       <br></br>
      
   

// {/* {(Rescode2==='0000') ? ( 
//                     <NavLink to="/step3"><Button disabled={false}  type="submit"
//                     variant="contained"
//                     color="primary" style={{float:"right"}} >완료</Button></NavLink>
//                   ):(Rescode2==='E001' || Rescode2==='E002' || Rescode2==='E003' || Rescode2==='E004' ? (<NavLink to="/step4"><Button disabled={false}  type="submit"
//                   variant="contained"
//                   color="primary" style={{float:"right"}} >완료</Button></NavLink>):(<NavLink to="/step4"><Button disabled={true}  type="submit"
//                   variant="contained"
//                   color="primary" style={{float:"right"}} >완료</Button></NavLink>))} */}
//       {(Rescode2==='0000') ? ( 
//                     <NavLink to="/step3"><Button disabled={result}  type="submit"
//                     variant="contained"
//                     color="primary" style={{float:"right"}} >다음</Button></NavLink>
//                   ):(<NavLink to="/step4"><Button disabled={result}  type="submit"
//                   variant="contained"
//                   color="primary" style={{float:"right"}} >다음</Button></NavLink>)}

//       {Rescode2==='0000' || Rescode2 ==='E001' || Rescode2 === 'E002' || Rescode2 ==='E003' ? (  <FaCheckCircle size={24} style={{color:"rgb(91,209,215)"}} > Succeed</FaCheckCircle>):(<CircularProgress
//                         size={24} 
//                       />)
//                     }
//       {/* <Button style={{background:"#00bcd4",color:"black", display:"flex", position:"absolute",top:"72.3%",left:"66%"}} >마침</Button> */}
//       <br></br>
//       </div>
//     );
//   }
// }
// export default connect(mapStateToProps)(Logtail);
