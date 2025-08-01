import { Rule } from '@/types/rules'

export const termsOfServiceRules: Rule[] = [
    {
        id: "1",
        title: "Company Information",
        content: `These Terms of Service explain how PAYBRIDGE LTD, trading as 40Gate ("40Gate", "we", "us", or "our"), provides payment gateway platform and technology services to merchants and businesses. This agreement governs your use of our platform, services, and related technologies when you access our website, create an account, or use any of our payment processing solutions.`,
    },
    {
        id: "2",
        title: "DEFINITIONS AND INTERPRETATION",
        content: `These Terms of Service explain how PAYBRIDGE LTD, trading as 40Gate ("40Gate", "we", "us", or "our"), provides payment gateway platform and technology services to merchants and businesses. This agreement governs your use of our platform, services, and related technologies when you access our website, create an account, or use any of our payment processing solutions.`,
        subRules: [
            {
                id: "2.1",
                title: "Definitions",
                content: `In these Terms of Service, the following definitions apply:<br /><br />
                <strong>"Account"</strong> means a business account opened by Merchant with 40Gate to access the Services<br /><br />
                <strong>"Agreement"</strong> or <strong>"Terms"</strong> means these Terms of Service and any amendments, modifications, or supplements hereto, including specific rules for individual payment methods and any other terms and conditions provided by 40Gate<br /><br />
                <strong>"API"</strong> means the application programming interface provided by 40Gate<br /><br />
                <strong>"Applicable Law"</strong> means the laws of Cyprus and any other applicable jurisdictions<br /><br />
                <strong>"Business Day"</strong> means any day that is not a Saturday, Sunday, or public holiday in Cyprus<br /><br />
                <strong>"Cardholder"</strong> means the person whose name appears on a Payment Card<br /><br />
                <strong>"Chargeback"</strong> means a transaction that is disputed by a Cardholder or issuing bank and charged back to the Merchant<br /><br />
                <strong>"Confidential Information"</strong> means all non-public information disclosed by either party<br /><br />
                <strong>"Customer Data"</strong> means all data provided by Merchants and their customers through the Services<br /><br />
                <strong>"Documentation"</strong> means 40Gate's technical documentation, user guides, and API specifications<br /><br />
                <strong>"Exchange Rate"</strong> means the correlation of value between currencies based on market demand, supply, and other economic variables<br /><br />
                <strong>"Fees"</strong> means the charges payable by Merchants for the Services as set out in the Fee Schedule<br /><br />
                <strong>"Fee Schedule"</strong> means 40Gate's current fee structure as communicated to Merchants<br /><br />
                <strong>"Force Majeure Event"</strong> means circumstances beyond a party's reasonable control, including natural disasters, wars, government actions, and technical failures<br /><br />
                <strong>"Intellectual Property Rights"</strong> means all intellectual property rights including patents, copyrights, trademarks, and trade secrets<br /><br />
                <strong>"Merchant"</strong> or <strong>"you"</strong> means the entity or person entering into this Agreement<br /><br />
                <strong>"Payment Card"</strong> means credit cards, debit cards, and other payment instruments<br /><br />
                <strong>"Payment Data"</strong> means sensitive payment information including card numbers and authentication data<br /><br />
                <strong>"40Gate", "Company", "Platform", "we", "us",</strong> or <strong>"our"</strong> means PAYBRIDGE LTD trading as 40Gate<br /><br />
                <strong>"PCI DSS"</strong> means the Payment Card Industry Data Security Standard<br /><br />
                <strong>"Personal Data"</strong> has the meaning given in applicable data protection laws<br /><br />
                <strong>"Privacy Policy"</strong> means 40Gate's privacy policy governing personal data collection, storage, and use<br /><br />
                <strong>"Prohibited Activities"</strong> means activities listed in Section 9 of this Agreement<br /><br />
                <strong>"Refund"</strong> means the return of funds to a Cardholder<br /><br />
                <strong>"Services"</strong> means the payment processing and related services provided by 40Gate<br /><br />
                <strong>"Settlement"</strong> means the transfer of funds from transactions to Merchant accounts<br /><br />
                <strong>"Transaction"</strong> means a payment processed through the Services<br /><br />
                <strong>"Virtual Currency"</strong> means cryptocurrency, digital assets, and other virtual currencies supported by the Platform<br /><br />
                <strong>"Website"</strong> means the internet website maintained by 40Gate`
            },
            {
                id: "2.2",
                title: "Interpretation",
                content: `References to sections, clauses, and schedules are to sections, clauses, and schedules of this Agreement<br />Words importing the singular include the plural and vice versa<br />References to persons include corporations and other legal entities<br />Headings are for convenience only and do not affect interpretation`
            }
        ]
    },
    {
        id: "3",
        title: "Acceptance and Scope",
        subRules: [
            {
                id: "3.1",
                title: "Agreement Formation",
                content: `By accessing or using 40Gate's Services, registering for an Account, opening an Account on the Website, ticking any acceptance checkbox, or executing a separate agreement referencing these Terms, you acknowledge that you have read, understood, and agree to be bound by this Agreement, including our Privacy Policy.`
            },
            {
                id: "3.2",
                title: "Capacity and Authority",
                content: `You represent and warrant that:<br />You are at least 18 years of age (for individuals) or duly incorporated (for entities)<br />You have the legal capacity and authority to enter into this Agreement<br />If acting on behalf of an entity, you have authority to bind that entity<br />Your use of the Services will not violate any laws or regulations<br />All information provided to 40Gate is accurate, valid, up-to-date, and complete<br />You are residing or incorporated in countries and territories we support`
            },
            {
                id: "3.3",
                title: "Modifications",
                content: `40Gate reserves the right to modify these Terms at any time for any reasons that may arise. Material changes will be communicated via email or through the 40Gate platform at least 30 days prior to taking effect. Continued use of the Services after modifications constitutes acceptance of the updated Terms. If you do not agree to the updated Terms, you must stop using the Services immediately.`
            }
        ]
    },
    {
        id: "4",
        title: "SERVICES PROVIDED",
        subRules: [
            {
                id: "4.1",
                title: "Nature of Services",
                content: `40Gate operates as a technology platform and payment gateway service provider. 40Gate does not provide financial services, investment services, banking services, or act as a financial institution. 40Gate does not hold any financial services licenses and does not engage in regulated financial activities.`
            },
            {
                id: "4.2",
                title: "Technical Platform Services",
                content: `40Gate provides the following technology and gateway services (collectively "Services"):<br />Payment gateway and processing technology platform<br />Technical infrastructure for payment routing and processing<br />API access and technical integration support<br />Transaction routing and technical facilitation services<br />Technical reporting and analytics tools<br />Customer support for technical services<br />Fraud detection and prevention technology tools`
            },
            {
                id: "4.3",
                title: "Third-Party Service Integration",
                content: `40Gate's platform integrates with and facilitates connections to third-party service providers who may provide:<br />Credit and debit card processing services<br />Alternative payment method processing<br />Virtual currency processing services<br />Currency exchange services<br />Banking and settlement services<br />Wallet services for virtual currencies<br />40Gate acts solely as a technical intermediary and does not provide these services directly. All such services are provided by duly licensed third-party providers.`
            },
            {
                id: "4.4",
                title: "Virtual Currency Technology Services",
                content: `When facilitating virtual currency transactions, 40Gate provides technology services that:<br />Enable technical integration with virtual currency networks<br />Facilitate technical communication between Merchants and virtual currency service providers<br />Provide technical tools for transaction monitoring and reporting<br />Offer technical infrastructure for virtual currency transaction routing<br /><br />40Gate does not:<br />Hold, custody, or control virtual currencies on behalf of Merchants<br />Provide virtual currency exchange services directly<br />Operate as a virtual currency exchange or trading platform<br />Provide investment advice or financial advice regarding virtual currencies<br />Act as a virtual currency service provider or money services business`
            },
            {
                id: "4.5",
                title: "Merchant Responsibility for Third-Party Services",
                content: `Merchants acknowledge that:<br />They are responsible for establishing direct relationships with third-party service providers<br />40Gate is not liable for the services provided by third-party providers<br />All financial services are provided by appropriately licensed third-party entities<br />Merchants must comply with all applicable regulations regarding their use of financial services`
            },
            {
                id: "4.6",
                title: "Service Availability",
                content: `While 40Gate strives to maintain continuous platform availability, we do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, updates, technical difficulties, compliance checks, or circumstances beyond our control.`
            },
            {
                id: "4.7",
                title: "Service Modifications",
                content: `40Gate may modify, suspend, or discontinue platform services with reasonable notice. We will endeavor to minimize disruption to Merchant operations.`
            }
        ]
    },
    {
        id: "5",
        title: "MERCHANT OBLIGATIONS AND RESPONSIBILITIES",
        subRules: [
            {
                id: "5.1",
                title: "Account Setup and Maintenance",
                content: `Merchants must:<br />Provide accurate and complete registration information<br />Maintain current contact and business information<br />Notify 40Gate immediately of material changes to business operations<br />Maintain adequate security measures for account access<br />Keep Account secure and not share login credentials with others<br />Notify 40Gate immediately of any security breaches or unauthorized use`
            },
            {
                id: "5.2",
                title: "Control and Responsibility",
                content: `Merchants acknowledge and agree that they:<br />Maintain exclusive control and responsibility for their funds and virtual currencies<br />Are responsible for maintaining adequate Account balance to cover fees and complete transactions<br />Undertake all transactions at their sole risk<br />Must settle outstanding fees and amounts due to 40Gate in a timely manner`
            },
            {
                id: "5.3",
                title: "Transaction Processing",
                content: `Merchants are responsible for:<br />Obtaining proper authorization for all transactions<br />Providing clear transaction descriptions to customers<br />Maintaining accurate transaction records<br />Processing refunds and handling customer disputes promptly<br />Complying with all applicable payment network rules<br />Understanding that blockchain transactions are irreversible`
            },
            {
                id: "5.4",
                title: "Compliance Obligations",
                content: `Merchants must:<br />Comply with all applicable laws and regulations<br />Maintain PCI DSS compliance where required<br />Implement appropriate data security measures<br />Report suspected fraudulent activity<br />Cooperate with 40Gate's compliance and risk management procedures<br />Not use the Account for any illegal purposes or Prohibited Activities`
            },
            {
                id: "5.5",
                title: "Customer Service",
                content: `Merchants are responsible for:<br />Providing adequate customer support<br />Handling customer inquiries and complaints<br />Maintaining clear refund and return policies<br />Resolving disputes in good faith`
            }
        ]
    },
    {
        id: "6",
        title: "ELIGIBILITY AND REGISTRATION REQUIREMENTS",
        subRules: [
            {
                id: "6.1",
                title: "Eligibility Criteria",
                content: `To access the Services, Merchants must:<br />Be at least 18 years of age (for individuals) or duly incorporated (for entities)<br />Have capacity to enter into legally binding contracts<br />Not be prohibited from using the Services by applicable law<br />Be residing or incorporated in supported jurisdictions<br />Not have a previously suspended Account with 40Gate`
            },
            {
                id: "6.2",
                title: "Registration and Verification",
                content: `In order to receive access to the Services, Merchants must:<br />Undergo a registration procedure and provide required information and documents<br />Provide additional documents and information when requested by 40Gate<br />Ensure accuracy, validity, and correctness of all submitted information<br />Notify 40Gate immediately of any changes to submitted information`
            },
            {
                id: "6.3",
                title: "Document Processing",
                content: `Information and documents submitted by Merchants are processed according to our Privacy Policy and may be disclosed to authorities as required by applicable law.`
            }
        ]
    },
    {
        id: "7",
        title: "FEES AND PAYMENT TERMS",
        subRules: [
            {
                id: "7.1",
                title: "Fee Structure",
                content: `Merchants agree to pay fees as specified in the Fee Schedule, which may include:<br />Transaction processing fees<br />Monthly or annual service fees<br />Chargeback fees<br />Setup and integration fees<br />Premium service fees<br />Mining fees for virtual currency transactions<br />Exchange fees for currency conversion`
            },
            {
                id: "7.2",
                title: "Fee Display and Charging",
                content: `The Platform operates on an automatically fee-charging basis<br />Applicable fees will be displayed before executing transactions<br />40Gate does not issue invoices for automatically charged fees<br />Fees are paid in the currency corresponding to the respective Service<br />Fees shall be paid at the time of completion of each transaction`
            },
            {
                id: "7.3",
                title: "Fee Changes",
                content: `40Gate may modify fees with 30 days' written notice, including adding new fees for new Services. Continued use of Services after fee changes constitutes acceptance of new rates.`
            },
            {
                id: "7.4",
                title: "Payment and Settlement",
                content: `Transaction funds will be settled according to the agreed settlement schedule<br />Fees may be deducted from settlement amounts or billed separately<br />40Gate may hold reserves for risk management purposes<br />All fees are non-refundable unless otherwise specified`
            },
            {
                id: "7.5",
                title: "Taxes",
                content: `Merchants are responsible for all applicable taxes. 40Gate may collect applicable VAT or other taxes as required by law.`
            }
        ]
    },
    {
        id: "8",
        title: "USER CONDUCT",
        subRules: [
            {
                id: "8.1",
                title: "Permitted Use",
                content: `While using the Services, Merchants agree to:<br />Comply with these Terms and all applicable laws<br />Provide accurate, complete, and truthful information<br />Respect intellectual property rights<br />Use the Services only for authorized business purposes<br />Maintain the security of their Account`
            },
            {
                id: "8.2",
                title: "Prohibited Conduct",
                content: `Merchants must not:<br />Violate or assist others in violating these Terms or applicable laws<br />Provide false, inaccurate, incomplete, or misleading information<br />Violate intellectual property rights of 40Gate or third parties<br />Use the Services in ways that damage, disable, or overburden the Platform<br />Upload viruses, malware, or perform attacks on the Platform<br />Attempt unauthorized access to the Platform or other users' accounts<br />Share Account credentials or use another person's Account<br />Impersonate others or make fraudulent representations<br />Engage in any Prohibited Activities listed in Section 9`
            }
        ]
    },
    {
        id: "9",
        title: "PROHIBITED ACTIVITIES AND RESTRICTED BUSINESSES",
        subRules: [
            {
                id: "9.1",
                title: "Prohibited Activities",
                content: `Merchants may not use the Services for any of the following prohibited activities:`
            },
            {
                id: "9.1.1",
                title: "Unlawful Activity",
                content: `Being sanctioned under applicable sanctions programs<br />Violating any laws, regulations, or court orders<br />Processing proceeds of unlawful activities<br />Publishing or distributing illegal materials<br />Money laundering or terrorism financing`
            },
            {
                id: "9.1.2",
                title: "Unlawful Businesses",
                content: `Child pornography and obscene materials<br />Unlawful gambling and gaming activities<br />Fraudulent businesses and sale of counterfeit items<br />Illegal marijuana dispensaries<br />Tobacco, e-cigarettes, and related products<br />Unlicensed pharmaceutical services<br />Age-restricted goods without proper authorization<br />Weapons, munitions, and explosives<br />Narcotics and illegal substances<br />Ponzi schemes and predatory investment schemes`
            },
            {
                id: "9.1.3",
                title: "Abusive Activity",
                content: `Transmitting malicious software or harmful code<br />Imposing unreasonable loads on 40Gate's infrastructure<br />Attempting unauthorized access to systems or accounts<br />Using another party's account information<br />Transferring Account access without permission<br />Defrauding 40Gate, merchants, or other parties<br />Reverse engineering or modifying the Services<br />Transmitting spam or unsolicited communications<br />Bypassing security measures or access restrictions`
            },
            {
                id: "9.2",
                title: "Additional Restricted Categories",
                content: `The following business types require special approval or are prohibited:<br />Adult entertainment services<br />High-risk financial services<br />Multi-level marketing schemes<br />Businesses that 40Gate determines pose elevated financial or legal risks`
            },
            {
                id: "9.3",
                title: "Monitoring and Enforcement",
                content: `40Gate reserves the right to monitor transactions for compliance and may suspend or terminate Services for violations of this section without prior notice.`
            }
        ]
    },
    {
        id: "10",
        title: "RISK MANAGEMENT AND RESERVES",
        subRules: [
            {
                id: "10.1",
                title: "Risk Assessment",
                content: `40Gate conducts ongoing risk assessments and may implement additional controls based on:<br />Transaction volume and patterns<br />Chargeback rates<br />Business type and model<br />Geographic considerations<br />Regulatory requirements<br />Account behavior and compliance history`
            },
            {
                id: "10.2",
                title: "Reserve Requirements",
                content: `40Gate may establish reserve requirements to mitigate risk, including:<br />Rolling reserves based on processing volume<br />Fixed reserves for specific time periods<br />Additional reserves for high-risk activities<br />Reserves may earn interest at 40Gate's discretion`
            },
            {
                id: "10.3",
                title: "Account Monitoring",
                content: `40Gate may monitor accounts for unusual activity and may request additional information or documentation as needed for compliance and risk management purposes.`
            }
        ]
    },
    {
        id: "11",
        title: "DEPOSITS, WITHDRAWALS, AND SETTLEMENTS",
        subRules: [
            {
                id: "11.1",
                title: "Deposits",
                content: `Before using certain Services, Merchants may need to deposit funds or virtual currencies to their Account by following deposit instructions. Merchants must carefully read and follow all deposit instructions.`
            },
            {
                id: "11.2",
                title: "Withdrawals",
                content: `Merchants can withdraw funds at any time subject to Account limits and restrictions<br />Withdrawals are subject to applicable fees and mining fees for virtual currencies<br />Merchants are solely responsible for accuracy of withdrawal information<br />40Gate is not liable for transfers to incorrect addresses or accounts<br />Blockchain transactions are irreversible once sent to the network`
            },
            {
                id: "11.3",
                title: "Settlement Process",
                content: `When processing transactions, respective assets shall be debited and credited to Merchant Accounts according to the agreed settlement schedule.`
            },
            {
                id: "11.4",
                title: "Cancellations and Refunds",
                content: `Once orders are completed, they generally cannot be canceled or reversed<br />Exchanges and transactions are final with no refunds unless required by law<br />Orders may be canceled by 40Gate due to technical faults or compliance requirements`
            }
        ]
    },
    {
        id: "12",
        title: "CHARGEBACKS AND DISPUTES",
        subRules: [
            {
                id: "12.1",
                title: "Chargeback Process",
                content: `When a chargeback occurs:<br />40Gate will notify the Merchant promptly<br />Funds will be debited from the Merchant account<br />Merchants may provide evidence to dispute the chargeback<br />40Gate will assist with the dispute process<br />Chargeback fees apply regardless of outcome`
            },
            {
                id: "12.2",
                title: "Merchant Responsibilities",
                content: `Merchants must:<br />Respond to chargeback notifications promptly<br />Provide complete and accurate dispute documentation<br />Maintain adequate records for chargeback defense<br />Implement measures to minimize chargebacks`
            },
            {
                id: "12.3",
                title: "Excessive Chargebacks",
                content: `Merchants with excessive chargeback rates may be subject to:<br />Additional monitoring and reporting requirements<br />Increased reserves or fees<br />Mandatory chargeback reduction programs<br />Account termination`
            }
        ]
    },
    {
        id: "13",
        title: "DATA PROTECTION AND SECURITY",
        subRules: [
            {
                id: "13.1",
                title: "Data Processing",
                content: `40Gate processes Personal Data in accordance with applicable data protection laws and our Privacy Policy. By using the Services, Merchants consent to such processing.`
            },
            {
                id: "13.2",
                title: "Security Measures",
                content: `40Gate implements appropriate technical and organizational security measures to protect Customer Data and Payment Data, including:<br />Encryption of sensitive data<br />Secure transmission protocols<br />Access controls and authentication<br />Regular security assessments<br />Incident response procedures`
            },
            {
                id: "13.3",
                title: "Merchant Security Obligations",
                content: `Merchants must:<br />Implement appropriate security measures for their systems<br />Maintain PCI DSS compliance where applicable<br />Report security incidents promptly<br />Not store sensitive payment data unless authorized<br />Follow 40Gate's security guidelines and best practices`
            },
            {
                id: "13.4",
                title: "Data Breach Notification",
                content: `Both parties will notify each other of any suspected or actual data breaches within 24 hours of discovery and cooperate in breach response activities.`
            },
            {
                id: "13.5",
                title: "Disclosure to Authorities",
                content: `40Gate may be obliged to disclose personal information to law enforcement authorities, regulators, and other authorized persons as required by applicable law.`
            }
        ]
    },
    {
        id: "14",
        title: "ACCOUNT SUSPENSION AND TERMINATION",
        subRules: [
            {
                id: "14.1",
                title: "Merchant Termination Rights",
                content: `Merchants can close their Account at any time. Before closing, all assets must be withdrawn to external wallets or accounts.`
            },
            {
                id: "14.2",
                title: "40Gate Suspension Rights",
                content: `40Gate reserves the right to suspend Accounts in the following events:<br />Reasonable belief that Account has been compromised or poses security risks<br />Account being used by unauthorized persons<br />Failure to comply with these Terms or related policies<br />Provision of false, incomplete, or misleading information<br />Account or behavior poses regulatory risks to 40Gate<br />Reasonable suspicion of fraud or law violations<br />Other violations of these Terms or applicable law`
            },
            {
                id: "14.3",
                title: "Termination Process",
                content: `40Gate may, but is not obliged to, notify Merchants about suspension reasons<br />Assets from suspended Accounts will be handled according to applicable procedures<br />In case of Account closure or suspension, Merchants remain liable for applicable fees<br />40Gate is not liable for losses suffered due to Account closure or suspension`
            },
            {
                id: "14.4",
                title: "Effect of Termination",
                content: `Upon termination:<br />Service access will cease<br />Outstanding obligations survive termination<br />40Gate may retain reserves for a reasonable period<br />Confidentiality obligations continue<br />Data return procedures will be followed according to applicable law`
            }
        ]
    },
    {
        id: "15",
        title: "INTELLECTUAL PROPERTY",
        subRules: [
            {
                id: "15.1",
                title: "40Gate IP Rights",
                content: `40Gate retains all rights, title, and interest in:<br />The Services and underlying technology<br />40Gate trademarks and branding<br />Documentation and technical specifications<br />Website content and materials<br />Improvements and modifications to the Services`
            },
            {
                id: "15.2",
                title: "License Grant",
                content: `40Gate grants Merchants a limited, non-exclusive, non-transferable license to use the Services and Documentation solely for authorized business purposes.`
            },
            {
                id: "15.3",
                title: "Merchant Content",
                content: `Merchants retain ownership of their content and data but grant 40Gate necessary rights to provide the Services.`
            },
            {
                id: "15.4",
                title: "Restrictions",
                content: `Merchants must not reproduce, modify, distribute, or otherwise exploit content or technology from 40Gate without prior written consent.`
            },
            {
                id: "15.5",
                title: "Feedback",
                content: `Any feedback or suggestions provided by Merchants may be used by 40Gate without compensation or attribution.`
            }
        ]
    },
    {
        id: "16",
        title: "CONFIDENTIALITY",
        subRules: [
            {
                id: "16.1",
                title: "Confidential Information",
                content: `Both parties acknowledge that they may have access to Confidential Information and agree to:<br />Maintain strict confidentiality<br />Use Confidential Information only for authorized purposes<br />Implement appropriate safeguards<br />Return or destroy Confidential Information upon termination`
            },
            {
                id: "16.2",
                title: "Exceptions",
                content: `Confidentiality obligations do not apply to information that:<br />Is publicly available through no breach of this Agreement<br />Was known prior to disclosure<br />Is independently developed<br />Must be disclosed by law or regulation`
            }
        ]
    },
    {
        id: "17",
        title: "REPRESENTATIONS AND WARRANTIES",
        subRules: [
            {
                id: "17.1",
                title: "Mutual Representations",
                content: `Each party represents and warrants that:<br />It has full corporate power and authority to enter this Agreement<br />Execution and performance will not violate any laws or agreements<br />This Agreement constitutes a valid and binding obligation`
            },
            {
                id: "17.2",
                title: "Merchant Representations",
                content: `Merchants additionally represent and warrant that:<br />All information provided is accurate and complete<br />Business operations are lawful and properly licensed<br />They will comply with all applicable laws and regulations<br />They have appropriate rights to any content or data provided<br />They will not use the Services for Prohibited Activities`
            },
            {
                id: "17.3",
                title: "Disclaimer of Warranties",
                content: `EXCEPT AS EXPRESSLY STATED, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. 40GATE DISCLAIMS ALL IMPLIED WARRANTIES INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. 40GATE DOES NOT GUARANTEE ERROR-FREE, RELIABLE, OR UNINTERRUPTED SERVICES.`
            }
        ]
    },
    {
        id: "18",
        title: "LIMITATION OF LIABILITY",
        subRules: [
            {
                id: "18.1",
                title: "General Limitation",
                content: `Each party represents and warrants that:<br />It has full corporate power and authority to enter this Agreement<br />Execution and performance will not violate any laws or agreements<br />This Agreement constitutes a valid and binding obligation`
            },
            {
                id: "18.2",
                title: "Exclusions",
                content: `Merchants additionally represent and warrant that:<br />All information provided is accurate and complete<br />Business operations are lawful and properly licensed<br />They will comply with all applicable laws and regulations<br />They have appropriate rights to any content or data provided<br />They will not use the Services for Prohibited Activities`
            },
            {
                id: "18.3",
                title: "Indirect Damages",
                content: `EXCEPT AS EXPRESSLY STATED, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. 40GATE DISCLAIMS ALL IMPLIED WARRANTIES INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. 40GATE DOES NOT GUARANTEE ERROR-FREE, RELIABLE, OR UNINTERRUPTED SERVICES.`
            }
        ]
    },
    {
        id: "19",
        title: "FORCE MAJEURE",
        content: `Neither party shall be liable for delays or failures due to Force Majeure Events including natural disasters, wars, terrorist attacks, government actions, labor disputes, power failures, communication system failures, or other technical failures beyond reasonable control. The term for fulfillment of obligations shall be extended for the period of effect of such events.`
    },
    {
        id: "20",
        title: "COMMUNICATIONS",
        subRules: [
            {
                id: "20.1",
                title: "Official Announcements",
                content: `40Gate may post official announcements, news, and notices on the Website or send communications via email. Merchants are responsible for staying informed of such announcements.`
            },
            {
                id: "20.2",
                title: "Contact Information",
                content: `For questions, comments, or complaints regarding these Terms, please contact 40Gate at the address provided in Section 23.`
            }
        ]
    },
    {
        id: "21",
        title: "DISPUTE RESOLUTION",
        subRules: [
            {
                id: "21.1",
                title: "Governing Law",
                content: `This Agreement is governed by the laws of Cyprus, excluding conflict of law principles.`
            },
            {
                id: "21.2",
                title: "Dispute Resolution Process",
                content: `Disputes shall be resolved through:<br />Good faith negotiations for 30 calendar days<br />Mediation if negotiations fail<br />Final resolution through competent courts in Cyprus`
            },
            {
                id: "21.3",
                title: "Jurisdiction",
                content: `The courts of Cyprus have exclusive jurisdiction over all disputes arising from this Agreement.`
            }
        ]
    },
    {
        id: "22",
        title: "GENERAL PROVISIONS",
        subRules: [
            {
                id: "22.1",
                title: "Amendment",
                content: `This Agreement may only be modified in writing or through 40Gate's standard modification procedures as outlined in Section 3.4.`
            },
            {
                id: "22.2",
                title: "Assignment",
                content: `Merchants may not assign this Agreement without 40Gate's written consent. 40Gate may assign this Agreement with notice to Merchants.`
            },
            {
                id: "22.3",
                title: "Severability",
                content: `If any provision is found invalid or unenforceable, the remainder of the Agreement remains in full force and effect.`
            },
            {
                id: "22.4",
                title: "Waiver",
                content: `Failure to enforce any provision does not constitute a waiver of that provision or any other rights.`
            },
            {
                id: "22.5",
                title: "Language",
                content: `In the event the Website is available in multiple languages, the English version of these Terms shall prevail.`
            },
            {
                id: "22.6",
                title: "Multiple Platforms",
                content: `All provisions applicable to the Website shall apply to other means of providing Services, including mobile applications, unless specifically stated otherwise.`
            },
            {
                id: "22.7",
                title: "Notices",
                content: `All notices must be in writing and delivered to the addresses specified in the Agreement or as updated by the parties.`
            },
            {
                id: "22.8",
                title: "Survival",
                content: `Provisions that by their nature should survive termination will continue in effect after termination, including confidentiality, indemnification, and limitation of liability provisions.`
            }
        ]
    },
    {
        id: "23",
        title: "Contact Information",
        content: `For questions about these Terms of Service, please contact:<br />Email: support@forty.gate`
    }
] 