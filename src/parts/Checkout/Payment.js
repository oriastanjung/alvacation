import { InputText, InputFile } from "elements/Form";
import React from "react";
import { Fade } from "react-reveal";
import logoBCA from "assets/images/logoBCA.jpeg";
import logoBNI from "assets/images/logoBNI.jpeg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;
  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran:</p>
              <p>Tax: {tax}%</p>
              <p>Sub Total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBCA} alt="bank central asia " style={{width: 80}}/>
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2002 1903</dd>
                    <dd>O. Riastanjung</dd>
                  </dl>
                </div>
              </div>
              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoBNI} alt="bank negara Indonesia " style={{width: 80}} />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Nasional Indonesia</dd>
                    <dd>2002 1903</dd>
                    <dd>O. Riastanjung</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
                <label htmlFor="proofPayment">Upload Bukti Transfer</label>
                <InputFile 
                    accept="image/*"
                    id="proofPayment"
                    name="proofPayment"
                    value={data.proofPayment}
                    onChange={props.onChange}
                />
                <label htmlFor="bankName">Asal Bank</label>
                <InputText 
                    id="bankName"
                    name="bankName"
                    type="text"
                    value={data.bankName}
                    onChange={props.onChange}
                />
                <label htmlFor="bankHolder">Nama Pengirim</label>
                <InputText 
                    id="bankHolder"
                    name="bankHolder"
                    type="text"
                    value={data.bankHolder}
                    onChange={props.onChange}
                />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
