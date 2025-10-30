import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function TestimonialCard({ testimonial, avatar, name, carrer }) {
    return (
        <div className='flex-col-center py-6 gap-4 sm:h-56 h-45 w-120 border border-gray-50 rounded-xl'>
            <div className='flex gap-2 justify-center'>
                <StarIcon fill="#FFCF33" className='text-[#FFCF33]' />
                <StarIcon fill="#FFCF33" className='text-[#FFCF33]' />
                <StarIcon fill="#FFCF33" className='text-[#FFCF33]' />
                <StarIcon fill="#FFCF33" className='text-[#FFCF33]' />
                <StarHalfIcon fill="#FFCF33" className='text-[#FFCF33]' />
            </div>

            <p className='w-100 text-center sm:text-m text-s text-gray-950'>
                {testimonial}
            </p>

            <div className='flex gap-4 p-0'>
                <Image src={avatar} height={54} width={54} alt={name} className='rounded-full sm:size-14 size-12 object-center object-cover'/>
                <div className='flex flex-col'>
                    <div className='sm:text-m text-s text-gray-500'>{name}</div>
                    <div className='sm:text-s text-xs text-gray-400'>{carrer}</div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
