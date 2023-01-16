
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { combineClasses } from "../../utils/utils";
// import { Pre } from './style';
import { Pre, Line, LineNo, LineContent } from "./style_new";

const CodeBlock = ({ code, className }: { code: string, className?: string }) => {
    return (
        <div className={combineClasses("md:p-5 p-2", className)}>
            <div className="shadow-lg">
                <Highlight {...defaultProps} theme={theme} code={code} language="python">
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <Pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })} key={Math.random()}>
                                    <LineNo>{i + 1}</LineNo>
                                    <LineContent>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} key={Math.random()} />
                                    ))}
                                    </LineContent>
                                </div>
                            ))}
                        </Pre>
                    )}
                </Highlight>
            </div>
        </div>
    )
}

export default CodeBlock