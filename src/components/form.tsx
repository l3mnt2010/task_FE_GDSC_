import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  name_task: string;
}

const MyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input
          type="text"
          {...register("name_task", { required: "This field is required" })}
        />
        {errors.name_task && <span>{errors.name_task.message}</span>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
