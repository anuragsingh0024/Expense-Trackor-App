import React from "react";
import { useForm } from "react-hook-form";

const AddTransaction = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },  
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    props.clicked(true);
    props.onTxnBtn(false);
    props.transactions({
      amount: Number(data.amount),
      des: data.description,
      type: data.type,
      id: Date.now(),
    });
  };

  return (
    <>
      <div className="flex flex-col border rounded-md w-full px-3 py-2 items-center mt-3 gap-2 mb-5">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-2">
          {/* Amount Input */}
          <input
            {...register("amount", { 
              required: "Amount is required", 
              min: { value: 1, message: "Amount must be at least 1" }
            })}
            className="border outline-none px-2 py-1 rounded-sm w-full"
            type="number"
            placeholder="Amount"
          />
          {errors.amount && <b className="text-red-500">{errors.amount.message}</b>}

          {/* Description Input */}
          <input
            {...register("description", { 
              required: "Description is required",
              minLength: { value: 3, message: "Description must be at least 3 characters" }
            })}
            className="border outline-none px-2 py-1 rounded-sm w-full"
            type="text"
            placeholder="Description"
          />
          {errors.description && <b className="text-red-500">{errors.description.message}</b>}

          {/* Transaction Type (Radio Buttons) */}
          <div className="flex gap-2 mt-3">
            <input
              {...register("type", { required: "Transaction type is required" })}
              type="radio"
              value="EXPENSE"
              id="expense"
            />
            <label htmlFor="expense">EXPENSE</label>

            <input
              {...register("type")}
              type="radio"
              value="INCOME"
              id="income"
            />
            <label htmlFor="income">INCOME</label>
          </div>
          {errors.type && <b className="text-red-500">{errors.type.message}</b>}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white rounded-md px-3 py-1 font-semibold mt-3 mb-3"
          >
            Add Transaction
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTransaction;
