const Home = () => {
  return (
    <div className=" flex  justify-around items-center font-bellefair mb-10">
      <div className="flex flex-col gap-6 w-1/4">
        <p className="uppercase text-2xl">so, you want to travel to</p>
        <h1 className=" text-9xl uppercase">space</h1>
        <p>
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          eligendi sit non, nam, eius, ducimus facere error provident molestias
          id omnis modi voluptates atque debitis repellat quia! Deleniti, non?
          Facilis?  
        </p>
      </div>
      <div className="bg-slate-100 rounded-full w-52 h-52 flex items-center justify-center">
        <span className="uppercase text-slate-900 text-2xl">explore</span>
      </div>
    </div>
  )
}

export default Home
