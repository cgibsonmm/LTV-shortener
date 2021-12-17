import { useState, useEffect } from "react";
import { BACKEND_URL } from "../../services/endpoint";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function ListRow({ item, index, length }) {
  const [copied, setCopied] = useState(false);
  const { full_url, click_count, short_code } = item;

  useEffect(() => {
    const copyTimeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 2000);
    return () => {
      window.clearTimeout(copyTimeout);
    };
  }, [copied]);

  return (
    <tr
      data-testid="top-item"
      className={
        length === index - 1
          ? "border-t-2 border-x-2 border-gray-400"
          : "border-t-2 border-b-2 border-x-2 border-gray-400"
      }
    >
      <td className="text-center">{index + 1}</td>
      <td className=" text-center overflow-hidden">
        <a className="hover:text-blue-500" href={full_url}>
          {full_url}
        </a>
      </td>
      <td className="hidden md:block text-center">{short_code}</td>
      <td className="text-center">{click_count}</td>
      <td className="text-center">
        <CopyToClipboard
          text={`${BACKEND_URL}/${short_code}`}
          onCopy={() => setCopied(true)}
        >
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon="clipboard"
              className="text-blue-400 hover:text-blue-500 hover:cursor-pointer mx-2"
            />
            {copied && (
              <span className="text-xs text-blue-500">Copied to clipboard</span>
            )}
          </div>
        </CopyToClipboard>
      </td>
    </tr>
  );
}
