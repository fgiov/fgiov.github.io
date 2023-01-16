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
        <PageLayout blogcentered>npm install gh-pages --save-dev
            <Text p>
                The neural speech codec model allows us to operate on <b>discrete</b> audio representations.
                Due to residual quantization in the neural codec model, the tokens have a hierarchical structure: tokens from previous quantizers recover acoustic properties like speaker identity, while the consecutive quantizers learn fine acoustic details. 
                Each quantizer is trained to model the residual from the previous quantizers.
                Motivated by this, we design two conditional language models in a hierarchical manner. 
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

            {/* <Text subtitle className="mt-10 md:text">
                Citation
            </Text>
            <Text p>
                Cited as:
            </Text> */}

            <Text subtitle className="mt-10 md:text">
                References
            </Text>
            [1] Bondarenko et al. “Understanding and overcoming the challenges of efficient transformer quantization” ACL 2021.
            {/* <List>
                <li>
                   Test
                </li>
            </List> */}
            {/* <Seperator />
            <div className="px-4 py-3 dark:bg-slate-900 bg-slate-200 rounded mt-5 !text-lg leading-relaxed mb-0">
                If you have any questions or find something incorrect in this post, feel free to send me an email: <u>felixgiov [at] gmail [dot] com</u>.
            </div> */}
        </PageLayout>
    )
}

export default Article;