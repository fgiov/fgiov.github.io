/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import ArticleCard from '../src/components/ArticleCards/ArticleCard';
import { SORTED_ARTICLES_BY_DATE } from '../BLOG_CONSTANTS/_ARTICLES_LIST';
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";
import Seperator from "../src/components/Seperator"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Home = () => {
  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      {/* <section className='w-full md:pt-[50px] md:pb-[50px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200'> */}
      <section className='w-full md:pt-[50px] md:pb-[0px] pt-[100px] pb-0 mb-10'>
        <div className="container text-center px-3">
          <Text title className='text-3xl'>
          <img src="/favicon.ico" className="inline w-11" /> felixgiov
          </Text>

          <Text p className="mt-3 text-lg pt-2 pb-0">
            Write things related to AI/ML and tech.
          </Text>

          {/* <div className='flex justify-center mt-5 flex-wrap '>

            <a href="https://github.com/felixgiov" target="_blank" rel="noopener noreferrer" className="px-2 pb-2">
              <FiGithub className="text-2xl" />
            </a>

            <a href="https://www.linkedin.com/in/felixgiovanni/" target="_blank" rel="noopener noreferrer" className="px-2 pb-2">
              <FiLinkedin className="text-2xl" />
            </a>

          </div> */}
        </div>
      </section>

      <Seperator />

      <div className="container mx-auto lg:px-[15px] px-0">
        <div className={'flex flex-wrap'}>
          {/* <FeaturedArticleSection /> */}
          {/* <h1 className='px-3 w-full mb-5 text-xl md:text-3xl font-medium'>Checkout the below articles on how to use different layouts and components</h1> */}
          {/* <hr className='border-1 mb-5 w-[98%] mx-auto' /> */}
          <HomeNonFeatureArticles />
        </div>
      </div>
    </PageLayout>
  )
}

export default Home