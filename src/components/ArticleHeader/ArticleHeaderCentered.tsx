import Link from "next/link"
import { IArticleHeaderData } from "../../shared/interfaces"
import { combineClasses } from "../../utils/utils"
import ArticleTags from "../Misc/ArticleTags"
import Seperator from '../../components/Seperator';
import classes from './ArticleHeader.module.scss'
interface IProps {
    headerData: IArticleHeaderData
}
const ArticleHeaderCenter = ({ headerData }: IProps) => {
    return (
        <div className="mb-[35px]">
            <h1 className={combineClasses(classes.articleTitle, "text-center text-2xl md:text-4xl font-bold md:mt-[40px] mb-[15px]")}>
                {headerData.articleTitle}
            </h1>
            <div className={"flex items-center"}>
                <p className={combineClasses(classes.featured_article__date, "font-normal text-sm pt-3 mb-0")}>{headerData.date}</p>
                <p className={combineClasses(classes.featured_article__date, "font-normal text-sm pt-3 mb-0 pl-1 pr-1")}>{" • "}</p>
                <p className={combineClasses(classes.featured_article__date, "font-normal text-sm pt-3 mb-0")}>{headerData.author.name}</p>
            </div>
            <ArticleTags tags={headerData.tags}/>
            <Seperator />
            
            {/* <div className={combineClasses("mb-[10px] mt-[15px] text-[14px] font-medium", classes.centered_article_header_author)}>
                <p className={'my-0 mx-[30px] font-medium'}>
                    {headerData.author.name}
                    {
                        headerData.category && <>
                            <span className="px-1 font-light">in</span>
                            <Link href={"/blog?category=" + headerData.category} passHref={true}>
                                {headerData.category}
                            </Link>
                        </>
                    }
                </p>

                <p className="my-0">{headerData.date}</p>
            </div> */}
            {/* <ArticleTags tags={headerData.tags} center />  */}
        </div>
    )
}

export default ArticleHeaderCenter