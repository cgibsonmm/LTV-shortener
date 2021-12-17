export default function ListRow({ item }) {
  const { full_url, click_count } = item;
  return <div data-testid="top-item">{full_url}</div>;
}
