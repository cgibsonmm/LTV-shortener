import { useState } from "react";
import { post } from "../../services/axios";
import FormErrors from "./FormErrors";

import FormInput from "./FormInput";

export default function UrlInputForm({ setShortURLData }) {
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (event, input) => {
    event.preventDefault();
    const payload = { full_url: input };
    const res = await post(payload);
    if (res.errors) {
      setErrors(res.errors);
    } else {
      setShortURLData(res);
    }
  };

  return (
    <div className="bg-blue-600 mt-4 mx-2 rounded min-h-20 p-4 flex flex-col items-center justify-center md:w-3/4 md:mx-auto">
      <FormInput handleSubmit={handleSubmit} />
      <FormErrors errors={errors} />
    </div>
  );
}
