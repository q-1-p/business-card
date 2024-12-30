import { useParams } from "react-router";

export default function Cards() {
  const { id } = useParams();

  return (
    <button className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600">
      {id}
    </button>
  );
}
