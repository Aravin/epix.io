import Layout from "../../component/layout/layout";
import React, { useState } from "react";
import { useForm, SubmitHandler, ChangeHandler } from "react-hook-form";

let amountInvested = 0;
let sipValue = 0;
let wealthGained = 0;
let overallReturnPercent = 0;
let overallReturnAbs = 0;
const numFormat = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });


export default function SipCalculator() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue 
  } = useForm();
  // const onSubmit = (data: any) => console.log(data);
  const onChange = (data: any) => {
   
    const amount = watch("amount");
    const returns = watch("returns") / 12 / 100;
    const tenure = watch("period");
    const frequency = watch("frequency");

    sipValue =
      amount *
      ((Math.pow(1 + returns, frequency * tenure) - 1) / returns) *
      (1 + returns);
    sipValue = parseFloat(sipValue.toFixed(2));
    amountInvested = amount * tenure * frequency;
    wealthGained = sipValue - amountInvested;
    overallReturnAbs = ((amountInvested - sipValue) * -1) / amountInvested;
    overallReturnPercent = parseFloat((overallReturnAbs * 100).toFixed(2));

    console.log({ amount, returns, tenure, frequency });
    console.log({ sipValue, amountInvested, wealthGained });
  };
  
  console.log({ errors });

  return (
    <Layout title="SIP Calculator" subTitle="Systematic Investment Plan">
      <div className="flex flex-row gap-x-5">
        <div className="flex-1 shadow-md drop-shadow-md p-4">
          <h3 className="text-xl pb-4 text-green-600"> Calculate </h3>

          <form className="space-y-5" onChange={handleSubmit(onChange)}>
            <label className="block">
              <span className="text-gray-700">Investment Amount*</span>
              <input
                defaultValue="5000"
                className="form-input mt-1 block w-full"
                type="number"
                placeholder="Investment Amount"
                {...register("amount", {
                  required: true,
                  max: 9999999999,
                  min: 500,
                  maxLength: 80,
                })}
              />
            </label>

            <div className="block">
              <span className="text-gray-700">Investment Frequency*</span>
              <div className="mt-2 space-x-5">
                <label className="inline-flex items-center">
                  <input
                    className="form-radio"
                    type="radio"
                    {...register("frequency", { required : true })}
                    value="12"
                    
                    
                    // defaultChecked={tenureRadio ==="12"}
                    // onClick={(e) => { e.preventDefault();setTenureRadio('12')}}
                    // onChange={(e) => props.onChange(e.target.checked)} checked={props.value || false}
                    // onChange={() => setValue("frequency", '12')}
                  />
                  <span className="ml-2">Monthly</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    className="form-radio"
                    {...register("frequency")}
                    type="radio"
                    value="4"
                    // defaultChecked={tenureRadio === '4'}
                    // onClick={(e) => { e.preventDefault();setTenureRadio('4')}}
                    // onChange={(e) => props.onChange(e.target.checked)} checked={props.value || false}
                    // onChange={() => setValue("frequency", '4')}
                  />
                  <span className="ml-2">Quarterly</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    className="form-radio"
                    {...register("frequency")}
                    type="radio"
                    value="1"
                    // defaultChecked={tenureRadio === '1'}
                    // onClick={(e) => { e.preventDefault();setTenureRadio('1')}}
                    // onChange={(e) => props.onChange(e.target.checked)} checked={props.value || false}
                    // onChange={() => setValue("frequency", '1')}
                  />
                  <span className="ml-2">Yearly</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block">
                <span className="text-gray-700">
                  Expected Annual Returns ({watch("returns")}%)*
                </span>
                <input
                  defaultValue="12"
                  className="form-range mt-1 w-5/6"
                  type="range"
                  min="5"
                  max="40"
                  step="0.5"
                  placeholder="Expected Annual Returns"
                  {...register("returns", {
                    max: 40,
                    min: 5,
                  })}
                />

                <input
                  defaultValue="12"
                  className="form-input mt-1 w-1/6"
                  type="number"
                  placeholder="12%"
                  value={watch("returns")}
                  {...register("returnsText", {
                    required: true,
                    max: 40,
                    min: 5,
                    maxLength: 5,
                  })}
                />
              </label>
            </div>

            <div>
              <label className="block">
                <span className="text-gray-700">
                  Investment Period (in {watch("period")} Years)*
                </span>
                <input
                  defaultValue="10"
                  className="form-range mt-1 w-5/6"
                  type="range"
                  min="5"
                  max="50"
                  step="0.5"
                  placeholder="10"
                  {...register("period", { required: true })}
                />
                <input
                  defaultValue="10"
                  className="form-input mt-1 w-1/6"
                  type="number"
                  value={watch("period")}
                  {...register("periodText", {
                    required: true,
                    max: 50,
                    min: 0.5,
                    maxLength: 80,
                  })}
                />
              </label>
            </div>
          </form>
        </div>
        <div className="flex-1 shadow-md drop-shadow-md p-4">
          <h3 className="text-xl pb-4 text-green-600"> Result </h3>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="w-1/3"></th>
                <th className="w-1/3"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amount Invested</td>
                <td>{numFormat.format(amountInvested)}</td>
              </tr>
              <tr className="text-green-600">
                <td>Value of Investment</td>
                <td>{numFormat.format(sipValue)}</td>
              </tr>
              <tr>
                <td>Wealth Gain</td>
                <td>{numFormat.format(wealthGained)}</td>
              </tr>
              <tr>
                <td>Overall Return Percentage</td>
                <td>{overallReturnPercent}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-row mt-8">
        <div className="flex-1 p-2 shadow-md">
          <h3 className="text-xl pb-4 text-green-600"> About SIP </h3>
          <p>
            Systematic Investment Plan (SIP) is an investment route offered by
            Mutual Funds wherein one can invest a fixed amount in a Mutual Fund
            scheme at regular intervals– say once a month or once a quarter,
            instead of making a lump-sum investment. The installment amount
            could be as little as INR 500 a month and is similar to a recurring
            deposit. It’s convenient as you can give your bank standing
            instructions to debit the amount every month. more details can be
            found here:{" "}
            <a
              href="https://www.mutualfundssahihai.com/en/what-is-sip#"
              target="_blank"
            >
              https://www.mutualfundssahihai.com/en/what-is-sip#
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
