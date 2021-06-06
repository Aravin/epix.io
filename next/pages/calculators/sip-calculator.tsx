import Layout from "../../component/layout/layout";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Bar, Doughnut } from "react-chartjs-2";

const numFormat = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

let chartData = {};

const options = {
  responsive: false,
  maintainAspectRatio: false,
  legend: { display: false },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export default function SipCalculator() {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: 5000,
      returns: 12,
      period: 10,
      frequency: "12",
    },
  });
  // const onSubmit = (data: any) => console.log(data);

  let data = watch();

  const [amountInvested, setAmountInvested] = useState(0);
  const [sipValue, setSipValue] = useState(0);
  const [wealthGained, setWealthGained] = useState(0);
  const [overallReturnPercent, setOverallReturnPercent] = useState(0);
  const [overallReturnsAbs, setOverallReturnAbs] = useState(0);

  useEffect(() => {
    const amount = data.amount;
    const tenure = data.period;
    const frequency = parseInt(data.frequency, 10) || 12;
    const returns = data.returns / 12 / 100;

    let sipValue =
      amount *
      ((Math.pow(1 + returns, frequency * tenure) - 1) / returns) *
      (1 + returns);
    setSipValue(parseFloat(sipValue.toFixed(2)));
    setAmountInvested(amount * tenure * frequency);
    setWealthGained(sipValue - amountInvested);
    setOverallReturnAbs(((amountInvested - sipValue) * -1) / amountInvested);
    setOverallReturnPercent(parseFloat((overallReturnsAbs * 100).toFixed(2)));

    console.log({ amount, returns, tenure, frequency });
    console.log({ sipValue, amountInvested, wealthGained });

    chartData = {
      labels: ["Investment", "Returns"],

      datasets: [
        {
          label: "",
          data: [amountInvested, sipValue],
          backgroundColor: ["rgba(209, 213, 219)", "rgba(110, 231, 183)"],
          hoverOffset: 4,
        },
      ],
    };
  }, [data]);

  console.log({ errors });

  return (
    <Layout title="SIP Calculator" subTitle="Systematic Investment Plan">
      <div className="flex flex-row flex-wrap gap-x-5">
        <div className="flex-1 shadow-md drop-shadow-md p-4 sm:p-2">
          <h3 className="text-xl pb-4 text-green-600"> Calculate </h3>

          <form className="space-y-5">
            <label className="block">
              <span className="text-gray-700">Investment Amount*</span>
              <input
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
                    {...register("frequency", {
                      required: true,
                    })}
                    className="form-radio ring-color-green-500"
                    type="radio"
                    value="12"
                  />
                  <span className="ml-2">Monthly</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    {...register("frequency", {
                      required: true,
                    })}
                    className="form-radio"
                    type="radio"
                    value="4"
                  />
                  <span className="ml-2">Quarterly</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    {...register("frequency", {
                      required: true,
                    })}
                    className="form-radio"
                    type="radio"
                    value="1"
                  />
                  <span className="ml-2">Yearly</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block">
                <span className="text-gray-700">
                  Expected Annual Returns ({data.returns}%)*
                </span>
                <input
                  className="form-range mt-1 w-11/12"
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
                <span className="bg-green-300 rounded-full inline-flex mt-1 w-1/12 items-center justify-center">
                  {data.returns}
                </span>
                {/* <input
                  className="form-input mt-1 w-1/6"
                  type="number"
                  placeholder="12%"
                  {...register("returns", {
                    required: true,
                    max: 40,
                    min: 5,
                    maxLength: 5,
                  })}
                /> */}
              </label>
            </div>

            <div>
              <label className="block">
                <span className="text-gray-700">
                  Investment Period (in {data.period} Years)*
                </span>
                <input
                  className="form-range mt-1 w-11/12"
                  type="range"
                  min="5"
                  max="50"
                  step="0.5"
                  placeholder="10"
                  {...register("period", { required: true })}
                />
                <span className="bg-green-300 rounded-full inline-flex mt-1 w-1/12 items-center justify-center ">
                  {data.period}
                </span>
                {/* <input
                  className="form-input mt-1 w-1/6"
                  type="number"
                  {...register("period", {
                    required: true,
                    max: 50,
                    min: 0.5,
                    maxLength: 80,
                  })}
                /> */}
              </label>
            </div>
          </form>
        </div>

        <div className="flex-1 shadow-md drop-shadow-md p-4 sm:p-2">
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

        <div className="flex-1 shadow-md drop-shadow-md p-4 sm:p-2">
          <h3 className="text-xl pb-4 text-green-600">
            {" "}
            Amount Invested vs Returns{" "}
          </h3>
          <div className="w-full">
            <Doughnut className="w-full" type="" data={chartData} />
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex-1 shadow-md drop-shadow-md p-4 sm:p-2">
          <h3 className="text-xl pb-4 text-green-600"> About SIP </h3>

          <p className="text-justify overflow-ellipsis overflow-hidden">
              Systematic Investment Plan (SIP) is an investment route offered by
              Mutual Funds wherein one can invest a fixed amount in a Mutual
              Fund scheme at regular intervals– say once a month or once a
              quarter, instead of making a lump-sum investment. The installment
              amount could be as little as INR 500 a month and is similar to a
              recurring deposit. It’s convenient as you can give your bank
              standing instructions to debit the amount every month. more
              details can be found here: { " " }
              <a className="overflow-ellipsis"
                href="https://www.mutualfundssahihai.com/en/what-is-sip#"
                target="_blank"
              >mutualfundssahihai</a>
            </p>
        </div>
      </div>


    </Layout>
  );
}
