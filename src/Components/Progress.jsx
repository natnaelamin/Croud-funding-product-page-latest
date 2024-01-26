import {motion} from "framer-motion"

function Progress({backed, backers, progressPercentile}) {

    const formattedBacked = backed.toLocaleString();
    const formattedBackers = backers.toLocaleString();

  return (
    <div className='md:flex justify-center  mb-10 '>
        <div className=' rounded-xl w-full bg-white md:px-20 px-5 py-10 text-center'>
            <div className='md:flex justify-between'>
                <div className=' md:border-r md:border-b-0 border-b py-2 px-5 md:mb-0 mb-5'>
                    <h1 className='text-4xl font-bold'>${formattedBacked}</h1>
                    <h1 className='text-slate-500'>of $100,000 backed</h1>
                </div>
                <div className='md:border-r md:border-b-0 border-b  px-5 py-2 md:mb-0 mb-5'>
                    <h1 className='text-4xl font-bold'>{formattedBackers}</h1>
                    <h1 className='text-slate-500'>total backers</h1>
                </div>
                <div className=' px-5 py-2 md:mb-0 mb-5'>
                    <h1 className='text-4xl font-bold'>56</h1>
                    <h1 className='text-slate-500'>days left</h1>
                </div>
            </div>
            <motion.div animate={{ scale:1}} initial={{scale: 0}} transition={{type:"tween", duration:1}} className='h-4 bg-slate-300 rounded-xl w-full relative mt-5'>
                <motion.div animate={{ scale:1}} initial={{scale: 0}} transition={{type:"tween", duration:1}} 
                className='absolute top-0 left-0 h-full bg-cyan-500 rounded-xl' 
                style={{ width: `${progressPercentile<= 100? progressPercentile: 100}%` }}></motion.div>
            </motion.div>    
        </div>
    </div>
)
}

export default Progress
