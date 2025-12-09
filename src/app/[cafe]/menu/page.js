import { Icon } from '@iconify/react';
import cafes from "@/data/cafes.json";



import Image from "next/image";
import Link from 'next/link';


export default function Menu({ params }) {

    const cafe = cafes[params.cafe];
    const categories = Object.keys(cafe.menu);


    if (!cafe) return <div>کافه پیدا نشد</div>;

    return (
        <><div style={{ backgroundColor: cafe.theme.primary, color: cafe.theme.textPrimary }}>


            <div className={`max-w-[1280px] mx-auto `}>

                <div className="flex justify-between items-center md:mx-0 mx-4">
                    <div className="flex items-center gap-4 text-xl font-bold md:font-medium md:gap-12  md:text-2xl">
                        <Image
                            src={cafe.logo}
                            className="rounded-full my-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                            width={80}
                            height={80}
                            alt="logo"
                        />
                        <div className='grid gap-1 md:flex md:gap-8'>
                            <Link href={`/${params.cafe}`}>خــــانــه</Link>

                            <Link href={`/${params.cafe}/menu`}>منـــوی کــافه</Link>
                        </div>

                    </div>
                    <h2 className="font-bold text-2xl md:text-5xl ">{cafe.englishName}</h2>
                </div>
                <div className="h-0 border-[0.1px] " style={{ borderColor: cafe.theme.border }}></div>


            </div>
            <div className="max-w-[1280px] mx-auto">


                <div className='grid grid-cols-1'>
                    <div className='flex justify-center items-center gap-2 my-5'>
                        <div className="h-0 border-[0.1px] w-full " style={{ borderColor: cafe.theme.border }}></div>
                        <h3 className="whitespace-nowrap  font-bold mx-2" style={{ color: cafe.theme.textPrimary }}>دسته بندی ها</h3>

                        <div className="h-0 border-[0.1px] w-full " style={{ borderColor: cafe.theme.border }}></div>
                    </div>
                    <div className='grid mx-4 grid-cols-2 md:grid-cols-5 gap-10 my-10 justify-center items-center justify-items-center text-center'>




                        {Object.entries(cafe.menu).map(([key, category]) => (

                            <Link href="#ge" className='grid grid-cols-1 items-center gap-2 ' style={{ borderColor: cafe.theme.textPrimary }}>
                                <Image src={category.image} className='h-40 w-40 rounded-full border-2 ' alt='coffe' width="100" height="100" />
                                <h3 className='font-semibold text-xl '>{category.title}</h3>

                            </Link>
                        ))}




                    </div>
                </div>


                {Object.entries(cafe.menu).map(([key, category]) => (

                    <div id='sos' className='grid grid-cols-1 '>

                        <div className='flex justify-center items-center gap-2 mt-10'>
                            <div className="h-0 border-[0.1px] w-full" style={{ borderColor: cafe.theme.border }}></div>
                            <h3 className="whitespace-nowrap  text-xl font-semibold mx-2" style={{ color: cafe.theme.textPrimary }}>{category.title}</h3>

                            <div className="h-0 border-[0.1px] w-full" style={{ borderColor: cafe.theme.border }}></div>


                        </div>



                        <div className=" grid mx-3 grid-cols-1 md:grid-cols-2 gap-6 my-8" style={{ color: cafe.theme.textPrimary }}>
                            {category.items.map((item, index) => (


                                <div className="flex  justify-between border-2  rounded-3xl p-2" style={{ borderColor: cafe.theme.border }}>
                                    <div className="grid grid-cols-1 font-semibold ">
                                        <div className="mt-1 flex items-center gap-2"><Icon icon="ph:shopping-bag-bold" width={23} height={23} className='font-bold' /><h3 className='text-xl'>{item.title}</h3></div>
                                        <div className="mt-3 flex items-center gap-2"><Icon icon="solar:dollar-outline" width={23} height={23} className='font-bold' /><h3 className='text-xl'>{item.price} تومان</h3></div>
                                    </div>
                                    <Image src={item.image} alt="cofe" className="rounded-2xl" width={130} height={130} />
                                </div>
                            ))}


                        </div>

                    </div>

                ))}





                <div className='flex justify-center mt-10'>
                    <Image src="/images/19.png" alt='coffe' width="300" height="300" />
                </div>





            </div>
            <div className=' mt-24 py-14' style={{ backgroundColor: cafe.theme.footer }}>
                <div className='max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-start px-5 md:px-0  md:justify-items-center '>

                    <div className='grid grid-cols-1 gap-6'>
                        <Image src={cafe.logo} className='rounded-full' alt='logo' width={85} height={85} />
                        <p className='text-lg'>
                            «کافه {cafe.name}» جایی گرم، دوست‌داشتنی و آرام برای لذت‌بردن از قهوه‌های تازه و لحظه‌های خاص شماست. هر فنجان در کاریبو، ترکیبی از طعم واقعی، حس خوب و آرامشی عمیق را به همراه دارد.
                        </p>
                        <div className="h-0 border-[0.1px] " style={{ borderColor: cafe.theme.border }}></div>
                        <h3 >آدرس : {cafe.address} </h3>
                    </div>

                    <div className='grid grid-cols-1 gap-1 mt-5 md:mt-0'>
                        <h3 className=' text-2xl font-bold'>لینک های سریع</h3>

                         <Link href={`/${params.cafe}/menu`} className='text-xl'>منوی کافه</Link>
                        <Link href={`/${params.cafe}`} className='mb-4  text-xl '>خانه</Link>


                    </div>



                    <div className='grid grid-cols-1 gap-3'>
                        <h3 className='text-2xl font-bold'>تمـــاس باما</h3>
                        <a
                            href={cafe.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h3 className='  text-xl'>اینستاگرام</h3>
                        </a>



                    </div>
                </div>
                <div className='max-w-[1280px] mx-auto mt-10 h-0 border-[0.1px]  text-center ' style={{ borderColor: cafe.theme.border }}>
                    <h3 className='mt-4'>ساخت و توسعه توسط تیم پلاریس</h3>
                </div>

            </div>
        </div>
        </>
    )
}