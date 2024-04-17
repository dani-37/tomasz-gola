import React from 'react';
import BlogPost from './Template.tsx'
import './blog.css'

import a1 from './images/language/a1.webp'
import a2 from './images/language/a2.webp'
import a3 from './images/language/a3.webp'
import b1 from './images/language/b1.webp'
import b2 from './images/language/b2.webp'
import b3 from './images/language/b3.webp'
import c1 from './images/language/c1.webp'



const Content = () => (
    <div className='mt-5 max-w-[100%] mx-auto'>
        <div className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 justify-center items-center mb-5'>
            <img src={a1} className="max-w-[80%] sm:max-w-[30%] rounded-[4px]" alt="Frame 1 of Polish Language Campaign posters" />
            <img src={a2} className="max-w-[80%] sm:max-w-[30%] rounded-[4px]" alt="Frame 2 of Polish Language Campaign posters"/>
            <img src={a3} className="max-w-[80%] sm:max-w-[30%] rounded-[4px]" alt="Frame 3 of Polish Language Campaign posters"/>
        </div>
        <div className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 justify-center items-center mb-5'>
            <img src={b1} className="max-w-[80%] sm:max-w-[30%] rounded-[4px]" alt="Frame 4 of Polish Language Campaign posters"/>
            <img src={b2} className="max-w-[80%] sm:max-w-[30%] rounded-[4px]" alt="Frame 5 of Polish Language Campaign posters"/>
            <img src={b3} className="max-w-[80%] sm:max-w-[30%] rounded-[4px]" alt="Frame 6 of Polish Language Campaign posters"/>
        </div>
        <div className='flex items-center mb-5 space-y-5 flex-col'>
            <div className="w-full sm:w-3/5 relative pb-[56%] sm:pb-[34%]"> 
                <iframe 
                    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FPolishEmbassyUK%2Fvideos%2F1561465191289450%2F&show_text=false&width=560&t=0"
                    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                    allowFullScreen={false}
                    title='Facebook video'
                />
            </div>
            <img src={c1} className="max-w-full sm:max-w-[60%] rounded-[4px]"  alt="Hi! If you're reading this, I hope you're having a wonderful day!"/>
        </div>
    </div>
)

const Description = () => (
    <>
        <p className='font-aptos font-thin text-sm'>
        While at the Embassy, I worked on a social media campaign promoting the Polish language and the benefits of learning it for social relationships, career, and personal development. 
        </p>
        <p className='font-aptos font-thin text-sm'>
        It was six weeks long and included long and short-form videos, as well as infographics. Throughout its run, it achieved an organic reach of 400,000 (including views, reactions, and shares) between Facebook and X. 
        </p>
        <p className='font-aptos font-thin text-sm -mb-10'>
        While working on it, we got to look for vintage pictures in the Polish National Digital Archives, which I found fascinating. Going through photos of normal people living in communist times while making a campaign for the contemporary audience was surprisingly emotional. As a Pole living in the UK, the search brought forth thoughts about how much Poland has since changed, how different our lives are, and how many opportunities we now have. 
        </p>
    </>
)

const Language = () => {
    return(<BlogPost title='Polish language campaign' 
                     description={<Description/>}
                     image='language'
                     content={<Content/>}
                     />
            )
}

export default Language