import List from "./components/list";
import { add, get } from "./api/todos";
import { useTodoStore } from "./states/todos";

export default function Home() {
  const setTodos = useTodoStore((s) => s.setTodos);
  const addNew = async () => {
    const title = prompt("Başlık");
    const content = prompt("İçerik");
    const result = await add({ title, content });
    console.log(result);
    setTodos(await get());
  };

  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between">
        <h5 className=" mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Yapılacaklar Listesi
        </h5>
        <div>
          <button
            onClick={() => addNew()}
            type="button"
            className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Yeni Ekle
          </button>
        </div>
      </div>
      <List />
    </div>
  );
}
