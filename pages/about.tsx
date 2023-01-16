/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";
import { FiGithub, FiLinkedin, FiBookOpen } from "react-icons/fi";

const AboutUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'About',
        description: `Hello! This is Felix. I started this blog as a way to document my journey learning AI and Machine Learning.`,
        keywords: 'blog, technology, tech blog, AI, ML, artificial intelligence, machine learning, NLP, natural language processing, CV, computer vision, data science',
        author: 'Felix Giovanni Virgo'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                    <a className="block md:w-[15%] w-[50%] ">
                        <img src="/images/profile.jpg" className="rounded-full overflow-hidden" />
                    </a>
                    <Text title className='mb-5 mt-10 dark:text-slate-400 text-slate-800'>
                        Hello. This is Felix.
                    </Text>
                    {/* <Text subtitle className='text-xl mb-5'>
                        This is an open source blog template which can help you start a simple static blog.
                    </Text> */}

                    <Text p className='text-lg'>
                        I started this blog as a way to document my journey learning AI and Machine Learning.
                        I obtained my Master’s degree in Informatics from Kyoto University in Japan.
                        During my studies, I worked on various Natural Language Processing research projects as a member of the NLP Research Lab.
                    </Text>

                    <div className='flex justify-center mt-5 flex-wrap '>
                        <a href="https://github.com/felixgiov" target="_blank" rel="noopener noreferrer" className="px-2 pb-2">
                        <FiGithub className="text-2xl" />
                        </a>

                        <a href="https://www.linkedin.com/in/felixgiovanni/" target="_blank" rel="noopener noreferrer" className="px-2 pb-2">
                        <FiLinkedin className="text-2xl" />
                        </a>

                        <a href="https://scholar.google.com/citations?user=LrxCnNgAAAAJ" target="_blank" rel="noopener noreferrer" className="px-2 pb-2">
                        <FiBookOpen className="text-2xl" />
                        </a>
                    </div>

                    {/* <div className="flex flex-wrap justify-between">
                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Features
                            </Text>
                            <List type={ListType.disc}>
                                <li>Minimilist Template</li>
                                <li>Light and Dark theme</li>
                                <li>Default and Centered Layout</li>
                                <li>Maximize lighthouse score</li>
                                <li>Privacy Policy, Terms and Conditions page template</li>
                                <li>Integrate with <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS </a></li>
                                <li>Type checking TypeScript</li>
                                <li>SEO metadata, Open Graph tags with Next SEO</li>
                            </List>
                        </div>

                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Philosophy
                            </Text>
                            <List type={ListType.disc}>
                                <li>Minimal code</li>
                                <li>SEO-friendly</li>
                                <li>Production-ready</li>
                                <li>Easy to use</li>
                                <li>Sould be faster than Wordpress or any other CMS</li>
                            </List>
                        </div>

                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Requirements
                            </Text>
                            <List type={ListType.disc}>
                                <li>Node.js</li>
                                <li>NPM</li>
                                <li>Firebase for hosting</li>
                                <li>VS Code for editing</li>
                                <li>Imp VS Code plugins: <br /> <a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense" target="_blank" rel="noopener noreferrer">Path Intellisense</a> , <br /> <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank" rel="noopener noreferrer">Tailwind CSS IntelliSense</a> </li>
                            </List>
                        </div>
                    </div> */}
                    <Seperator />
                    {/* <Text subtitle className='text-3xl font-medium'>
                        License
                    </Text>
                    <Text p className='text-lg'>
                        Licensed under the MIT License, Copyright © {CURRENT_YEAR}
                    </Text>
                    <Text p className='text-lg'>
                        This is an open source project everyone is welcome to contribute. Feel free to open an issue, if you have any questions or incase you find a bug. Create your versions of this template and help the community, also if you are using our template a little credit will be much appreciated.
                    </Text>
                    <Seperator />
                    <Text p className='text-lg'>
                        Created by <LinkTo href="https://www.linkedin.com/in/rupali-yadav-087bb4112/" external className="font-semibold">Rupali Yadav</LinkTo> and <LinkTo href="https://www.linkedin.com/in/mayur-nalwala/" external className="font-semibold">Mayur Nalwala</LinkTo> from <a href="https://webexpe.com/" target="_blank" rel="noopener noreferrer" className="font-medium tracking-widest">WebExpe</a> with ♥
                    </Text>
                    <a href="https://www.buymeacoffee.com/webexpe13z" target="_blank" rel="noopener noreferrer">
                        <img src="/images/bmc.png" className="ml-0" alt="webexpe.com" />
                    </a> */}
                    <div className="px-4 py-3 dark:bg-slate-800 bg-slate-200 rounded my-5">
                        <Text p className="!text-lg leading-relaxed mb-0">
                            If you have any questions or find something incorrect in this blog, feel free to reach out to me: <u>felixgiov [at] gmail [dot] com</u>.
                        </Text>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default AboutUs