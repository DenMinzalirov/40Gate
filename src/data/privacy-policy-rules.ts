import { Rule } from '@/types/rules'

export const privacyPolicyRules: Rule[] = [
    {
        id: "1",
        title: "Introduction",
        content: `This Privacy Policy explains how PAYBRIDGE LTD, trading as 40Gate ("40Gate", "we", "us", or "our"), collects, uses, stores, and protects your personal information when you use our payment gateway platform and related services.<br />This Privacy Policy applies to all users of our services, including merchants, customers, and website visitors. By using our services, you consent to the collection and use of information in accordance with this policy.`
    },
    {
        id: "2",
        title: "DEFINITIONS",
        content: `<strong>"Personal Data"</strong> means any information relating to an identified or identifiable natural person<br /><br />
        <strong>"Processing"</strong> means any operation performed on personal data, including collection, storage, use, and disclosure<br /><br />
        <strong>"Data Subject"</strong> means the individual to whom personal data relates<br /><br />
        <strong>"Controller"</strong> means the entity that determines the purposes and means of processing personal data<br /><br />
        <strong>"Processor"</strong> means an entity that processes personal data on behalf of the controller<br /><br />
        <strong>"Services"</strong> means 40Gate's payment gateway platform and related technology services<br /><br />
        <strong>"Website"</strong> means our online platform and any associated mobile applications`,
    },
    {
        id: "3",
        title: "INFORMATION WE COLLECT",
        subRules: [
            {
                id: "3.1",
                title: "Information You Provide Directly",
                content: `<strong>Account Registration Information:</strong><br />
                Full name and business name<br />
                Email address and phone number<br />
                Business address and contact details<br />
                Business registration documents<br />
                Identification documents (passport, ID card, driver's license)<br />
                Bank account and financial information<br />
                Tax identification numbers<br /><br />
                <strong>Transaction Information:</strong><br />
                Payment card details (processed securely and not stored by us)<br />
                Transaction amounts and descriptions<br />
                Currency and payment method information<br />
                Billing and shipping addresses<br />
                Customer purchase history<br /><br />
                <strong>Communication Information:</strong><br />
                Support tickets and correspondence<br />
                Survey responses and feedback<br />
                Marketing preferences`
            },
            {
                id: "3.2",
                title: "Information We Collect Automatically",
                content: `<strong>Technical Information:</strong><br />
                IP address and geolocation data<br />
                Device information (type, operating system, browser)<br />
                Log files and usage data<br />
                Cookies and similar tracking technologies<br />
                Website navigation patterns<br /><br />
                <strong>Transaction Data:</strong><br />
                Processing timestamps and status<br />
                Fraud detection signals<br />
                Risk assessment data<br />
                Performance metrics`
            },
            {
                id: "3.3",
                title: "Information from Third Parties",
                content: `<strong>We may receive information from:</strong><br />
                Credit bureaus and identity verification services<br />
                Payment processors and financial institutions<br />
                Government databases and sanctions lists<br />
                Social media platforms (if you connect your accounts)<br />
                Our business partners and service providers`
            }
        ]
    },
    {
        id: "4",
        title: "HOW WE USE YOUR INFORMATION",
        subRules: [
            {
                id: "4.1",
                title: "Primary Purposes",
                content: `We process your personal data for the following purposes:<br /><br />
                <strong>Service Provision:</strong><br />
                Operating our payment gateway platform<br />
                Processing and facilitating transactions<br />
                Account management and customer support<br />
                Technical integration and API access<br /><br />
                <strong>Compliance and Legal Requirements:</strong><br />
                Know Your Customer (KYC) verification<br />
                Anti-Money Laundering (AML) compliance<br />
                Fraud detection and prevention<br />
                Regulatory reporting obligations<br />
                Legal proceedings and investigations<br /><br />
                <strong>Business Operations:</strong><br />
                Risk assessment and management<br />
                Service improvement and development<br />
                Analytics and performance monitoring<br />
                Financial accounting and reporting`
            },
            {
                id: "4.2",
                title: "Marketing and Communications",
                content: `With your consent, we may use your information for:<br />
                Sending service updates and announcements<br />
                Marketing communications about new features<br />
                Industry news and educational content<br />
                Event invitations and webinars<br />
                You can opt out of marketing communications at any time.`
            },
            {
                id: "4.3",
                title: "Legal Basis for Processing",
                content: `We process your personal data based on:<br />
                Contractual necessity for providing our services<br />
                Legal compliance with regulatory requirements<br />
                Legitimate interests for business operations and security<br />
                Consent for marketing and optional features`
            }
        ]
    },
    {
        id: "5",
        title: "INFORMATION SHARING AND DISCLOSURE",
        subRules: [
            {
                id: "5.1",
                title: "When We Share Information",
                content: `We may share your personal data in the following circumstances:<br /><br />
                <strong>Service Providers and Partners:</strong><br />
                Payment processors and acquiring banks<br />
                Identity verification services<br />
                Cloud hosting and IT service providers<br />
                Customer support platforms<br />
                Analytics and monitoring tools<br /><br />
                <strong>Legal and Regulatory Authorities:</strong><br />
                Law enforcement agencies<br />
                Financial intelligence units<br />
                Regulatory bodies and supervisors<br />
                Courts and legal proceedings<br />
                Government agencies as required by law`
            },
            {
                id: "5.2",
                title: "Data Processing Agreements",
                content: `All third-party service providers are bound by data processing agreements that require them to:<br />
                Process data only for specified purposes<br />
                Implement appropriate security measures<br />
                Comply with applicable data protection laws<br />
                Return or delete data when services end`
            }
        ]
    },
    {
        id: "6",
        title: "DATA RETENTION",
        subRules: [
            {
                id: "6.1",
                title: "Retention Periods",
                content: `We retain personal data for as long as necessary to fulfill the purposes for which it was collected:<br />
                Account Information: 7 years after account closure<br />
                Transaction Records: 7 years from transaction date<br />
                Identity Verification Documents: 7 years after relationship ends<br />
                Marketing Data: Until you withdraw consent<br />
                Technical Logs: 2 years from creation<br />
                Legal Hold Data: Until legal matter resolves`
            },
            {
                id: "6.2",
                title: "Retention Criteria",
                content: `Our retention periods are based on:<br />
                Legal and regulatory requirements<br />
                Limitation periods for legal claims<br />
                Business operational needs<br />
                Data minimization principles`
            }
        ]
    },
    {
        id: "7",
        title: "DATA SECURITY",
        subRules: [
            {
                id: "7.1",
                title: "Security Measures",
                content: `We implement comprehensive security measures to protect your personal data:<br /><br />
                <strong>Technical Safeguards:</strong><br />
                End-to-end encryption for sensitive data<br />
                Secure transmission protocols (TLS/SSL)<br />
                Multi-factor authentication<br />
                Regular security assessments and penetration testing<br />
                Intrusion detection and monitoring systems<br /><br />
                <strong>Organizational Measures:</strong><br />
                Access controls and role-based permissions<br />
                Employee background checks and training<br />
                Confidentiality agreements<br />
                Incident response procedures<br />
                Regular security policy updates<br /><br />
                <strong>Physical Security:</strong><br />
                Secure data centers with restricted access<br />
                Environmental controls and monitoring<br />
                Backup and disaster recovery systems`
            },
            {
                id: "7.2",
                title: "Data Breach Response",
                content: `In the event of a data breach, we will:<br />
                Assess the risk and impact<br />
                Notify relevant authorities within 72 hours<br />
                Inform affected individuals without undue delay<br />
                Implement remedial measures<br />
                Conduct thorough investigation and review`
            }
        ]
    },
    {
        id: "8",
        title: "Your Rights",
        content: "Under applicable data protection laws, you have the following rights:",
        subRules: [
            {
                id: "8.1",
                title: "Access Rights",
                content: `Request copies of your personal data<br />
                Information about how we process your data<br />
                Details of data sharing and transfers`
            },
            {
                id: "8.2",
                title: "Correction and Updates",
                content: `Correct inaccurate personal data<br />
                Complete incomplete information<br />
                Update your account information`
            },
            {
                id: "8.3",
                title: "Deletion Rights",
                content: `Request deletion of your personal data<br />
                Right to be forgotten (where applicable)<br />
                Automatic deletion after retention periods`
            },
            {
                id: "8.4",
                title: "Processing Restrictions",
                content: `Object to certain types of processing<br />
                Restrict processing in specific circumstances<br />
                Withdraw consent for consent-based processing`
            },
            {
                id: "8.5",
                title: "Data Portability",
                content: `Receive your data in a structured format<br />
                Transfer data to another service provider<br />
                Direct transfer where technically feasible`
            },
            {
                id: "8.6",
                title: "Exercising Your Rights",
                content: `To exercise your rights, please contact us at:<br />
                Email: privacy@forty.gate<br />
                Address: 28 Oktovriou, 1 ENGOMI BUSINESS CENTER, 1st floor, Flat/Office 111, Egkomi, 2414, Nicosia, Cyprus<br />
                We will respond to your request within 30 days and may require identity verification.`
            }
        ]
    },
    {
        id: "9",
        title: "COOKIES AND TRACKING TECHNOLOGIES",
        subRules: [
            {
                id: "9.1",
                title: "Types of Cookies We Use",
                content: `<strong>Essential Cookies:</strong><br />
                Authentication and security<br />
                Session management<br />
                Load balancing<br />
                Fraud prevention<br /><br />
                <strong>Performance Cookies:</strong><br />
                Website analytics<br />
                Performance monitoring<br />
                Error tracking<br />
                Usage statistics<br /><br />
                <strong>Functional Cookies:</strong><br />
                User preferences<br />
                Language settings<br />
                Customization features<br /><br />
                <strong>Marketing Cookies:</strong><br />
                Advertising and remarketing<br />
                Social media integration<br />
                Campaign tracking`
            },
            {
                id: "9.2",
                title: "Cookie Management",
                content: `You can control cookies through:<br />
                Browser settings and preferences<br />
                Our cookie consent tool<br />
                Third-party opt-out mechanisms<br />
                Industry preference centers<br />
                For detailed information, please see our separate Cookie Policy.`
            }
        ]
    },
    {
        id: "10",
        title: "CHANGES TO THIS PRIVACY POLICY",
        content: `We may update this Privacy Policy from time to time to reflect:<br />
        Changes in our practices<br />
        Legal or regulatory requirements<br />
        New features or services<br />
        Feedback from users<br /><br />
        When we make material changes, we will:<br />
        Notify you via email or platform notification<br />
        Post the updated policy on our website<br />
        Provide at least 30 days' notice for significant changes`
    },
    {
        id: "11",
        title: "Contact Information",
        content: `For questions about this Privacy Policy or our data practices:<br />
        Email: support@forty.gate`
    }
] 