export default function Home() {
  return (
    <div className="flex w-screen h-screen bg-white justify-center items-center gap-5">
      <div className="w-40 h-40 bg-background text-foreground">
        Light Mode
        <div className="w-full h-5 bg-primary text-secondary">test</div>
      </div>
      <div className="dark w-40 h-40 bg-background text-foreground">
        Dark Mode
        <div className="w-full h-5 bg-primary text-secondary">test</div>
      </div>
    </div>
  );
}
