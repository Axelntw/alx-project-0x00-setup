import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      
      <div className="flex gap-4 p-4">
        <Button title="Small" size="small" shape="rounded-sm" styles="bg-blue-500" />
        <Button title="Medium" size="medium" shape="rounded-md" styles="bg-green-500" />
        <Button title="Large" size="large" shape="rounded-lg" styles="bg-red-500" />
        <Button title="Full" size="medium" shape="rounded-full" styles="bg-purple-500" />
      </div>

      <div className="flex flex-wrap gap-4 p-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Landing
