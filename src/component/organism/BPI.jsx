
function BadanInti() {
  return (
    <div className="text-white bg-kabinet">
      <h1 className="text-3xl font-serif lg:text-5xl text-center font-bold py-3">Badan Pengurus Inti <br /> 2024</h1>
      <div className="bg-bpi min-h-screen rounded-lg shadow-xl p-5">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 text-left h-40 lg:h-60 mb-4">
          <div className="text-sm lg:text-2xl font-semibold">
            Ketua Umum
          </div>
          <div className="title-bpi text-xs lg:text-lg">Zaki Fauzan Rabbani</div>
          <div className="title-bpi text-xs lg:text-lg font-thin">2109116028</div>
        </div>

        <div className="lg:w-1/2 text-right h-40 lg:h-60">
          <div className="text-sm lg:text-2xl font-semibold">
            Wakil Ketua Umum
          </div>
          <div className="title-bpi text-xs lg:text-lg">Bayu Purnama Aji</div>
          <div className="title-bpi text-xs lg:text-lg font-thin">2209116050</div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 text-left mb-4 h-40 lg:h-60 lg:mb-0">
          <div className="text-sm lg:text-2xl font-semibold">
            Bendahara Umum
          </div>
          <div className="title-bpi text-xs lg:text-lg">Angelia Cristin</div>
          <div className="title-bpi text-xs lg:text-lg font-thin">2209116015</div>
        </div>
        <div className="lg:w-1/2 h-40 lg:h-60 text-right">
          <div className="text-sm lg:text-2xl font-semibold">
            Sekretaris Umum
          </div>
          <div className="title-bpi text-xs lg:text-lg">Nurul Vita Azizah</div>
          <div className="title-bpi text-xs lg:text-lg font-thin">2209116038</div> 
        </div>
      </div>
      </div>
    </div>
  );
}

export default BadanInti;