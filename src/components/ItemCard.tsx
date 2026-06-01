type ItemCardProps = {
  name: string
  category: string
  color: string
  image: string
}

export default function ItemCard({
  name,
  category,
  color,
  image,
}: ItemCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-3">
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover rounded-xl"
      />

      <h2 className="font-bold text-lg mt-3">
        {name}
      </h2>

      <p className="text-gray-500">
        {category}
      </p>

      <p className="text-sm">
        {color}
      </p>
    </div>
  )
}