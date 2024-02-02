import image from '../../assets/inforsa.png'

function Article(){
    return(
    <div className="container">
        <div className="text-center text-4xl font-bold">Publikasi Kegiatan</div>
        <div className='flex justify-center grid gap-5 lg:grid-cols-3 md:grid-cols-2 my-3'>
        <div className='mx-3 sm:mx-0 bg-gray-500 w-96 rounded-lg'>
            <div className='rounded-lg h-72 w-96 bg-gray-500 flex justify-center items-center'>
                <img width={150} src={image} alt="" />
            </div>
            <div className='rounded-b-lg pl-2 pt-2 min-h-16 w-96 bg-gray-300'>
                <div className='text-lg font-semibold'>Title</div>
                <div className='text-md font-light'>Deskripsi</div>
            </div>
        </div>
        <div className='mx-3 sm:mx-0 bg-gray-500 w-96 rounded-lg'>
            <div className='rounded-lg h-72 w-96 bg-gray-500 flex justify-center items-center'>
                <img width={150} src={image} alt="" />
            </div>
            <div className='rounded-b-lg pl-2 pt-2 min-h-16 w-96 bg-gray-300'>
                <div className='text-lg font-semibold'>Title</div>
                <div className='text-md font-light'>Deskripsi</div>
            </div>
        </div>
        <div className='mx-3 sm:mx-0 bg-gray-500 w-96 rounded-lg'>
            <div className='rounded-lg h-72 w-96 bg-gray-500 flex justify-center items-center'>
                <img width={150} src={image} alt="" />
            </div>
            <div className='rounded-b-lg pl-2 pt-2 min-h-16 w-96 bg-gray-300'>
                <div className='text-lg font-semibold'>Title</div>
                <div className='text-md font-light'>Deskripsi</div>
            </div>
        </div>
        </div>
        <div className='flex justify-center'>
            <div className='border border-black w-fit p-2 rounded-md text-black'>More</div>
        </div>
    </div>
    )
}
export default Article;