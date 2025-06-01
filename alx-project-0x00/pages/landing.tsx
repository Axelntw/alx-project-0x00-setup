import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      
      <div className="flex gap-4 p-4">
        <Button title="Small" size="small" shape="rounded-sm" />
        <Button title="Medium" size="medium" shape="rounded-md" />
        <Button title="Large" size="large" shape="rounded-full" />
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
