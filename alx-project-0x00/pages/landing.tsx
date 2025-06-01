import Card from "@/components/Card"

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <div className="flex flex-wrap gap-4 p-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Landing
