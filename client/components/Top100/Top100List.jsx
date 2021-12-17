import ListRow from "./ListRow";

export default function Top100List({ top100 }) {
  console.log(top100);
  return (
    <div>
      {top100.map((item) => (
        <ListRow key={item.short_code} item={item} />
      ))}
    </div>
  );
}
