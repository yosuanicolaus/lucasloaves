import { useCart } from "../cart";

export function BreadMakingClassPage() {
  const { addProduct } = useCart();

  return (
    <div className="flex-grow p-5">
      <div className="border p-5 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center">Bread Making Class</h1>
        <div className="w-96 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio vero
          consequatur veritatis, debitis obcaecati labore beatae aliquid sit
          magnam culpa cupiditate animi iure repellat nostrum. Adipisci nam
          optio soluta sapiente praesentium placeat porro odit laudantium
          eligendi aut, illum quae similique a officiis reiciendis? Veritatis
          dolore velit non. Autem, blanditiis reiciendis?
        </div>
        <button
          className="bg-blue-500 rounded p-2 m-2 text-white"
          onClick={() => {
            addProduct({
              name: "Bread Making Class",
              price: 35,
              description:
                "Get access to the bread making class on the first saturday of every month.",
            });
          }}
        >
          Join Now
        </button>
      </div>
      <div className="border p-5 flex justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/FfsUm7qbC7o"
          title="Bread Making Class Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          width={560}
          height={315}
          frameBorder={0}
        />
      </div>
    </div>
  );
}
