import cafes from "@/data/cafes.json";
import { Icon } from '@iconify/react';
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from 'next/link';







export default function CafePage({ params }) {
    const cafe = cafes[params.cafe];

    if (!cafe) return <div>کافه پیدا نشد</div>;

    return (
        <div style={{ backgroundColor: cafe.theme.primary, color: cafe.theme.textPrimary }}>
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


            <div className="max-w-[1280px] mx-auto " >




                <div className="my-24 ">
                    <div className="grid grid-cols-1 justify-items-center  md:flex md:justify-between ">
                        <div className='order-1 md:order-2 mx-4 md:mx-0 mb-8 md:mb-0'>
                            <Image src={cafe.heroImage} className="rounded-3xl" alt="hirosection" width="600" height="600" />
                        </div>


                        <div className="w-11/12 order-2  md:order-1 grid grid-cols-1 gap-8 md:gap-0  md:mt-6  md:w-6/12  ">
                            <h1 className=" text-4xl font-bold m-0">به کافه « {cafe.name} » خوش آمدید</h1>
                            <h1 className=" text-2xl font-bold ">
                                {cafe.name}؛ همون جایی که حس خوب قهوه شروع می‌شه.
                            </h1>
                            <h1 className=" text-[16px] md:text-[19px] font-bold leading-loose  ">یه فضای ساده و دنج برای وقت‌هایی که می‌خوای از شلوغی روز فاصله بگیری.
                                ما قهوه‌هامون رو با دقت انتخاب می‌کنیم، تازه برشته‌شده و خوش‌طعم،<br></br>
                                تا هر فنجونش حس خوبی از کیفیت و آرامش بده.</h1>

                            <div className="flex gap-2 md:gap-6 ">
                                <Link href={`/${params.cafe}/menu`}>
                                    <Button variant="outline" style={{ backgroundColor: cafe.theme.surface, color: cafe.theme.textPrimary, borderColor: cafe.theme.textPrimary }} className="px-12 md:px-16 py-5   text-base border-[2px]    transition-all duration-300 ease-out hover:-translate-y-1   ">مشاهده منو</Button>
                                </Link>
                                <Link href="#about">
                                    <Button variant="outline" style={{ backgroundColor: cafe.theme.textPrimary, color: cafe.theme.surface, borderColor: cafe.theme.surface }} className="px-12 md:px-16 py-5  font-bold   text-base border-[2px]   transition-all duration-300 ease-out hover:-translate-y-1   ">دربـــاره ما</Button>
                                </Link>


                            </div>
                        </div>

                    </div>

                </div>



                <div id="about" className="flex justify-center  items-center my-32 mx-4 md:mx-0 md:my-40 ">

                    <div style={{ backgroundColor: cafe.theme.surface }} className=" p-4 md:p-10 text-center leading-10 rounded-3xl md:w-1/2 grid grid-cols-1 gap-2">
                        <h2 className="text-xl">کافه « {cafe.name} »</h2>
                        <h3>در «کافه {cafe.name}»، هر جزئی با عشق کنار هم نشسته تا فضایی بسازیم گرم، دل‌نشین و واقعی؛ جایی که عطر قهوهٔ تازه، نور ملایم و حال‌وهوای آرامِ کافه، یک نفسِ عمیق را مهمان دلت می‌کند. باور ما این است که قهوه فقط طعم ندارد؛ قصه دارد. قصه‌ای از مکث، از آرام گرفتن میان هیاهو، از پیدا کردن لحظه‌ای برای خودت.  جایی برای فکر کردن، لبخند زدن و ساختن لحظه‌هایی که ارزش ماندن دارند.</h3>

                    </div>

                </div>





                <div className='grid grid-cols-1 gap-28 justify-items-center md:flex md:justify-between my-40'>
                    <div className='grid grid-cols-1 justify-items-center md:justify-items-start gap-6 md:gap-0 mx-4 md:mx-0 md:w-1/3'>
                        <h3 className=' font-bold text-2xl '>منوی کافه ما</h3>
                        <h3 className=' font-semibold text-lg text-center md:text-start'>از منوی متنوع و خوش‌طعم ما دیدن کنید؛ نوشیدنی‌ها و خوراکی‌هایی که با عشق و دقت تهیه شده‌اند تا لحظه‌های شما خاص‌تر شوند.</h3>
                        <Link href={`/${params.cafe}/menu`}>
                            <Button style={{ backgroundColor: cafe.theme.textPrimary, color: cafe.theme.surface, borderColor: cafe.theme.surface }} className="px-16 py-5  font-bold   text-base border-[2px] ">مشـــاهده منــــو</Button>
                        </Link>


                    </div>
                    <div className='grid items-center'>
                        <Image src="/images/19.png" className='rotate-90' alt='coffe' width="300" height="300" />
                    </div>
                    <div className='mx-4'>
                        <Image src={cafe.homeImage} className="rounded-3xl" alt='cofe' width={500} height={500} />
                    </div>
                </div>


                <div className='my-10 md:my-32 grid grid-cols-1   mx-3 md:mx-0 md:grid-cols-4 gap-6'>
                    <div className='grid grid-cols-1 gap-2  border-2  p-3 rounded-3xl' style={{ borderColor: cafe.theme.border }}>
                        <Icon icon="streamline-plump:coffee-bean-remix" className='text-2xl' />
                        <h3 className='text-xl font-bold'>قهوه تازه و باکیفیت</h3>
                        <h3 className='leading-relaxed'>ما دانه‌های قهوه را با دقت انتخاب و تازه‌برشته می‌کنیم تا هر فنجون، طعمی خاص و ماندگار داشته باشد.</h3>

                    </div>
                    <div className='grid grid-cols-1 gap-2 border-2  p-3 rounded-3xl' style={{ borderColor: cafe.theme.border }}>
                        <Icon icon="simple-icons:ticktick" className='text-2xl' />
                        <h3 className='text-xl font-bold'>طراحی ساده و مدرن</h3>
                        <h3 className='leading-relaxed'>فضای کافه با الهام از سادگی و جزئیات ظریف طراحی شده تا تجربه‌ای آرام، تمیز و دلپذیر و صمیمی بسازد.</h3>

                    </div>
                    <div className='grid grid-cols-1 gap-2 border-2  p-3 rounded-3xl' style={{ borderColor: cafe.theme.border }}>
                        <Icon icon="cib:buy-me-a-coffee" className='text-2xl' />
                        <h3 className='text-xl font-bold'>لحظه‌هایی برای خودت</h3>
                        <h3 className='leading-relaxed'>کافه کاریبو جایی‌ست برای رهایی از شلوغی روز، نوشیدن قهوه، فکر کردن و لذت بردن از لحظه‌های کوچک اما واقعی.</h3>

                    </div>
                    <div className='grid grid-cols-1 gap-2 border-2  p-3 rounded-3xl' style={{ borderColor: cafe.theme.border }}>
                        <Icon icon="ep:dessert" className='text-2xl' />
                        <h3 className='text-xl font-bold'>طعم‌های خاص و متفاوت</h3>
                        <h3 className='leading-relaxed'>در کنار قهوه، نوشیدنی‌ها و دسرهایی سرو می‌کنیم که با عشق و دقت آماده شده‌اند تا لحظه‌ات را خاص‌تر کنند.</h3>

                    </div>

                </div>



                <div className='flex justify-center'>
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
    );
}
