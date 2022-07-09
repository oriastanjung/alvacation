import React, { Component, useState } from "react";
import { InputDate } from "elements/Form";
import Breadcrumb from "elements/Breadcrumb";
export default function Example() {
  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-auto">
          <Breadcrumb data={breadcrumb} />
        </div>
      </div>
    </div>
  );
}

// export default function Example() {
//   const [isivalue, setValue] = useState({
//     startDate: new Date(),
//     endDate: new Date(),
//     key: "selection",
//   });

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };
//   console.log(isivalue);
//   return (
//     <div className="container">
//       <div
//         className="row align-items-center justify-content-center"
//         style={{ height: "100vh" }}
//       >
//         <div className="col-auto">
//           <InputDate
//             max={30}
//             onChange={handleChange}
//             name="value"
//             value={isivalue}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Example(){
//     const [isivalue, setValue] = useState("1");
//     const handleChange = e =>{
//         setValue(e.target.value);
//     };
//     console.log(isivalue);
//     return (
//         <div className="container">
//                 <div className="row align-items-center justify-content-center" style={{height: "100vh"}}>
//                     <div className="col-auto">
//                         <InputNumber suffix=" night" isSuffixPlural max={30} onChange={handleChange} name="value" value={isivalue}/>
//                     </div>
//                 </div>
//             </div>
//     );
// }

// export default class Example extends Component {
//     state= {
//         value: "1"
//     };
//     handleChange = e =>{
//         this.setState({ [e.target.name] : e.target.value});
//     };

//     render(){
//         console.log(this.state.value)
//         return (
//             <div className="container">
//                 <div className="row align-items-center justify-content-center" style={{height: "100vh"}}>
//                     <div className="col-auto">
//                         <InputNumber suffix=" night" isSuffixPlural max={30} onChange={this.handleChange} name="value" value={this.state.value}/>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
