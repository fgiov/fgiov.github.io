/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { HowToUseImageCode, HowToUseList, HowToUseSeperator, HowToUseTextCode } from "../../src/constants/codeBlocks";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const Article = () => {
    return (
        // pass blogcentered as show below for article page centered layout
        <PageLayout blogcentered>
            <Text p>
                This current article is made using <b>blogcentered</b> layout. This layout will be used to write your blog posts or articles. 
                <InlineMath>\int_0^\infty x^2 dx</InlineMath>
            </Text>
            
            <BlockMath>\int_0^\infty x^2 dx</BlockMath>
            <CodeBlock
                code={
`# Setup logging
logging.basicConfig(
    format="%(asctime)s - %(levelname)s - %(name)s -   %(message)s",
    datefmt="%m/%d/%Y %H:%M:%S",
    level=logging.INFO if training_args.local_rank in [-1, 0] else logging.WARN,
)
logger.warning(
    "Process rank: %s, device: %s, n_gpu: %s, distributed training: %s, 16-bits training: %s",
    training_args.local_rank,
    training_args.device,
    training_args.n_gpu,
    bool(training_args.local_rank != -1),
    training_args.fp16,
)
logger.info("Training/evaluation parameters %s", training_args)`}
                className="my-5"
            />
            <Text p>
                The above code snippet gives you a demo on how to use blogcentered layout. The current article that you see is the basic output/example of blogcentered
                layout which will consist of a navbar on the top and the main content area. The author details and more articles by the author will be available at the bottom after the article.
            </Text>
            <Text subtitle className="mt-10 md:text">
                How to use
            </Text>
            <Text p>
                If you want to explore this layout checkout the code for this article in <br />
                <u>blog-with-centered-layout.tsx</u> file inside <u>pages/tutorial</u> folder.
            </Text>

            <Text subtitle className="mt-10 md:text">
                Features
            </Text>
            <List>
                <li>
                    This layout is of contained width and centered, this is to keep the article / blog posts style consistent.
                </li>
                <li>
                    At the bottom, we have author details and more articles from the author.
                </li>
            </List>
            <Seperator />
            <Text subtitle className="mt-10 md:text">
                Components Used to write this article
            </Text>
            <Text p>
                Check <u>blog-with-sidebar-layout.tsx</u> in <u>pages/tutorial</u> file to see all the mentioned components in use.
            </Text>
            <List>
                <li>
                    We have used the <b>{'<PageLayout blogwithsidebar/>'}</b> as shown in the above code block.
                </li>
                <li>
                    <b>{'Image'}</b> tag for displaying images. <br /> To use image we have to import <b>Image</b> from components and <b>ImageSize</b> enum from enums. The Image size will help us to set the size of the image. <br /> Available sizes: <b>ImageSize.DEFAULT, ImageSize.FULL, ImageSize.MEDIUM, ImageSize.SMALL, ImageSize.XS</b>.
                    <CodeBlock code={HowToUseImageCode} className="my-5" />
                </li>
                <li>
                    <b>{'Text'}</b>. <br /> We use this to write content/text. To use image we have to import <b>Text</b> from components. We have different Text types like <b>title, subtitle, p, quote</b> with default styles and by default is paragraph.
                    <CodeBlock code={HowToUseTextCode} className="my-5" />
                </li>
                <li>
                    <b>{'List'}</b> <br />
                    This is used to display lists. We have 3 different types: <b>ListType.disc | ListType.number | ListType.none</b>, by default type is ListType.disc.
                    <CodeBlock code={HowToUseList} className="my-5" />
                </li>
                <li>
                    <b>{'Seperator'}</b><br />
                    This is used to add a section sepertator. We have 2 types: <b>{'<Seperator dots/>'} or {'<Seperator line/>'}</b>, by default it is line.
                    <CodeBlock code={HowToUseSeperator} className="my-5" />
                </li>
            </List>
            <Text p>
                <b>note:</b> all these components are used in <u>blog-with-sidebar-layout.tsx</u> and <u>blog-with-centerd-layout.tsx</u> in <u>pages/tutorial</u>. You can also check <b><LinkTo href="/pages/tutorial/all-components.tsx" passHref>All Components Demo</LinkTo></b>, list of all components, its types and how to use them.
            </Text>
            <div className="px-4 py-3 dark:bg-slate-900 bg-slate-200 rounded mt-5 !text-lg leading-relaxed mb-0">
                If you have any questions or find something incorrect in this post, feel free to send me an email: <u>felixgiov [at] gmail [dot] com</u>.
            </div>
        </PageLayout>
    )
}

export default Article;