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
    <>
      <FormErrors errors={errors} />
      <FormInput handleSubmit={handleSubmit} />
    </>
  );
}
