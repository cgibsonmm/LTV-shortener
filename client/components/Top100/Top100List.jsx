import ListRow from "./ListRow";

export default function Top100List({ top100 }) {
  const length = top100.length;
  return (
    <div className="w-full px-2">
      <table className="mt-4 w-full table-auto">
        <thead>
          <tr className="mx-2">
            <th>Rank</th>
            <th>Full URL</th>
            <th className="hidden md:block">Short URL</th>
            <th>Click Count</th>
            <th>Copy Short URL</th>
          </tr>
        </thead>
        <tbody>
          {top100.map((item, index) => (
            <ListRow
              key={item.short_code}
              item={item}
              index={index}
              length={length}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
