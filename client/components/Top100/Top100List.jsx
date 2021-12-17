import ListRow from "./ListRow";

export default function Top100List({ top100 }) {
  console.log(top100);
  return (
    <div className="w-full px-2">
      <table className="mt-4 w-full table-auto">
        <thead>
          <tr className="mx-2">
            <th>Full URL</th>
            <th className="hidden md:block">Short URL</th>
            <th>Click Count</th>
            <th>Copy Link</th>
          </tr>
        </thead>
        <tbody>
          {top100.map((item) => (
            <ListRow key={item.short_code} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
