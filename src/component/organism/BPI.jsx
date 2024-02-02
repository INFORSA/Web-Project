function BadanInti() {
  return (
    <div className="lg:min-h-screen bg-bpi mt-5 rounded-lg shadow-xl p-5">
      <h1 className="text-3xl lg:text-4xl text-center font-bold my-2">Badan Pengurus Inti <br /> 2024</h1>
      
      <div className="flex lg:flex-row justify-between">
        <div className="lg:w-1/2 text-left h-60 mb-4 lg:mb-0">
          <div className="text-sm lg:text-2xl font-semibold">
            Ketua Umum
          </div>
          <div className="title-bpi text-xs lg:text-md">Zaki Fauzan Rabbani</div>
          <div className="title-bpi text-xs lg:text-md font-thin">2109116028</div>
        </div>

        <div className="lg:w-1/2 text-right">
          <div className="text-sm lg:text-2xl font-semibold">
            Wakil Ketua Umum
          </div>
          <div className="title-bpi text-xs lg:text-md">Bayu Purnama Aji</div>
          <div className="title-bpi text-xs lg:text-md font-thin">2209116050</div>
        </div>
      </div>

      <div className="flex lg:flex-row justify-between">
        <div className="lg:w-1/2 text-left mb-4 lg:mb-0">
          <div className="text-sm lg:text-2xl font-semibold">
            Bendahara Umum
          </div>
          <div className="title-bpi text-xs lg:text-md">Angelia Christin</div>
          <div className="title-bpi text-xs lg:text-md font-thin">2209116015</div>
        </div>

        <div className="lg:w-1/2 text-right">
          <div className="text-sm lg:text-2xl font-semibold">
            Sekretaris Umum
          </div>
          <div className="title-bpi text-xs lg:text-md">Nurul Vita Azizah</div>
          <div className="title-bpi text-xs lg:text-md font-thin">2209116038</div> 
        </div>
      </div>
    </div>
  );
}

export default BadanInti;