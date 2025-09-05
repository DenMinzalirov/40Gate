import { Rule } from '@/types/rules'

export const cookiePolicyRules: Rule[] = [
    {
        id: "1",
        title: "Introduction",
        content: `This Cookie Policy explains how PAYBRIDGE LTD, trading as 40Gate ("we", "us", or "our"), uses cookies and similar tracking technologies on our website and platform. This policy should be read alongside our Privacy Policy and Terms of Service.<br /><br />By continuing to use our website and services, you consent to our use of cookies as described in this policy.`,
    },
    {
        id: "2",
        title: "What are Cookies",
        content: `Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.`,
        subRules: [
            {
                id: "2.1",
                title: "Types of Cookies",
                content: `<strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser<br /><br /><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until manually deleted<br /><br /><strong>First-Party Cookies:</strong> Cookies set by the website you are visiting<br /><br /><strong>Third-Party Cookies:</strong> Cookies set by domains other than the one you are visiting`
            }
        ]
    },
    {
        id: "3",
        title: "Why we use cookies",
        content: `We use cookies for several important reasons:`,
        subRules: [
            {
                id: "3.1",
                title: "Essential Functionality",
                content: `Authenticating users and preventing fraud<br />Maintaining session state and security<br />Balancing website load across servers<br />Remembering items in your shopping cart<br />Enabling core platform features`
            },
            {
                id: "3.2",
                title: "Performance and Analytics",
                content: `Understanding how visitors use our website<br />Identifying popular content and features<br />Monitoring website performance and errors<br />Optimizing user experience<br />Generating usage reports`
            },
            {
                id: "3.3",
                title: "Personalization",
                content: `Remembering your preferences and settings<br />Customizing content based on your interests<br />Providing personalized recommendations<br />Maintaining language and regional settings`
            },
            {
                id: "3.4",
                title: "Marketing and Advertising",
                content: `Delivering relevant advertisements<br />Measuring advertising campaign effectiveness<br />Preventing duplicate ad displays<br />Understanding user interests and behavior<br />Enabling social media features`
            }
        ]
    },
    {
        id: "4",
        title: "Cookies we Use",
        subRules: [
            {
                id: "4.1",
                title: "Essential Cookies",
                content: `These cookies are necessary for our website to function properly and cannot be disabled.<br /><br /><div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0">
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Cookie Name</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">session_id</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">csrf_token</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">load_balancer</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">security_check</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">cookie_consent</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Purpose</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">User authentication and session management</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Security protection against cross-site request forgery</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Server load balancing</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Fraud prevention and security monitoring</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Records your cookie preferences</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Duration</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Session</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Session</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Session</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">24 hours</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">1 year</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Type</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">First-party</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">First-party</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">First-party</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">First-party</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">First-party</p>
                        </div>
                    </div>
                </div>`
            },
            {
                id: "4.2",
                title: "Performance Cookies",
                content: `These cookies help us understand how visitors interact with our website.<br /><br /><div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0">
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Cookie Name</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">_ga</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">_ga_*</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">_gid</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">_gat</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">performance_monitor</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Purpose</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Google Analytics - distinguishes users</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Google Analytics - session tracking</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Google Analytics - distinguishes users</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Google Analytics - throttle request rate</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Website performance tracking</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Duration</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">2 years</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">2 years</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">24 hours</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">1 minute</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">30 days</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Type</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Third-party</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Third-party</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Third-party</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Third-party</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">First-party</p>
                        </div>
                    </div>
                </div>`
            },
            {
                id: "4.3",
                title: "Functional Cookies",
                content: `These cookies enable enhanced functionality and personalization.<br /><br /><div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0">
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Cookie Name</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">user_preferences</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">language_setting</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">timezone</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">dashboard_layout</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Purpose</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Stores user interface preferences</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Remembers selected language</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Stores user's timezone setting</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Customized dashboard configuration</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Duration</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">1 year</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">1 year</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">1 year</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">6 months</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Type</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">First-party</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">First-party</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">First-party</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">First-party</p>
                        </div>
                    </div>
                </div>`
            },
            {
                id: "4.4",
                title: "Marketing Cookies",
                content: `These cookies are used for advertising and marketing purposes.<br /><br /><div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0">
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Cookie Name</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">_fbp</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">fr</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">IDE</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">marketing_campaign</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Purpose</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Facebook Pixel - tracks conversions</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Facebook - advertising and measurement</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Google DoubleClick - advertising</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Campaign tracking and attribution</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Duration</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">90 days</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">90 days</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">2 years</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">30 days</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start items-start flex-grow">
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1e1e]">Type</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Third-party</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Third-party</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">Third-party</p>
                        </div>
                        <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 border border-[#c7d0cf]">
                            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1e1e]">First-party</p>
                        </div>
                    </div>
                </div>`
            }
        ]
    },
    {
        id: "5",
        title: "Managing your cookies preferences",
        subRules: [
            {
                id: "5.1",
                title: "Cookie Consent Tool",
                content: `When you first visit our website, you'll see a cookie consent banner allowing you to:<br />Accept all cookies<br />Reject non-essential cookies<br />Customize your preferences by category<br />Learn more about each type of cookie<br />You can change your preferences at any time by clicking the "Cookie Settings" link in our website footer.`
            },
            {
                id: "5.2",
                title: "Browser Controls",
                content: `Most web browsers allow you to control cookies through their settings. You can:<br />View Cookies: See what cookies are stored on your device<br />Delete Cookies: Remove existing cookies<br />Block Cookies: Prevent new cookies from being set<br />Set Preferences: Choose which types of cookies to allow.`
            },
            {
                id: "5.3",
                title: "Browser-Specific Instructions",
                content: `<strong>Google Chrome:</strong><br />Go to Settings > Privacy and security > Cookies and other site data<br />Choose your preferred cookie settings<br />Manage exceptions for specific sites<br /><br /><strong>Mozilla Firefox:</strong><br />Go to Options > Privacy & Security<br />Under Cookies and Site Data, choose your settings<br />Manage data for individual websites<br /><br /><strong>Safari:</strong><br />Go to Preferences > Privacy<br />Choose how you want to handle cookies<br />Manage website data<br /><br /><strong>Microsoft Edge:</strong><br />Go to Settings > Cookies and site permissions<br />Configure cookie settings<br />Manage permissions per site`
            },
            {
                id: "5.4",
                title: "Mobile Devices",
                content: `<strong>iOS Safari:</strong> Settings > Safari > Privacy & Security > Block All Cookies<br /><br /><strong>Android Chrome:</strong> Chrome app > Settings > Site settings > Cookies`
            }
        ]
    },
    {
        id: "6",
        title: "CONSEQUENCES OF DISABLING COOKIES",
        subRules: [
            {
                id: "6.1",
                title: "Essential Cookies",
                content: `If you disable essential cookies, you may experience:<br />Inability to log into your account<br />Loss of security features<br />Website functionality issues<br />Incomplete transaction processing`
            },
            {
                id: "6.2",
                title: "Performance Cookies",
                content: `Disabling these cookies means:<br />We cannot improve website performance<br />Limited ability to diagnose technical issues<br />Reduced personalization of your experience`
            },
            {
                id: "6.3",
                title: "Marketing Cookies",
                content: `Blocking marketing cookies will:<br />Reduce personalized advertising<br />Limit social media integration<br />Affect campaign effectiveness measurement<br />May still show generic advertisements`
            }
        ]
    },
    {
        id: "7",
        title: "COOKIE UPDATES AND CHANGES",
        subRules: [
            {
                id: "7.1",
                title: "Policy Updates",
                content: `We may update this Cookie Policy to reflect:<br />Changes in our cookie usage<br />New third-party services<br />Legal or regulatory requirements<br />User feedback and improvements`
            },
            {
                id: "7.2",
                title: "Notification of Changes",
                content: `When we make significant changes, we will:<br />Notify you through our website banner<br />Send email notifications for major changes<br />Provide updated consent options`
            }
        ]
    },
    {
        id: "8",
        title: "Contact Information",
        subRules: [
            {
                id: "8.1",
                title: "Cookie-Related Inquiries",
                content: `For questions about our use of cookies:<br />Email: sales@40gate.io`
            }
        ]
    }
] 