export type Topic = {
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  questions: string[];
  statutoryAnchors: string[];
};

export type ContentRecord = {
  id: string;
  title: string;
  type: string;
  citation: string;
  year?: string;
  summary: string;
  topics: string[];
  sourceUrl: string;
  importance: 'Foundational' | 'Core' | 'Specialist' | 'Current';
};

export const topics: Topic[] = [
  {
    id: 'incorporation',
    title: 'Incorporation, Registration, and Corporate Administration',
    shortTitle: 'Incorporation',
    summary:
      'Company formation, continuing registration duties, company names, registered offices, company records, significant controllers, and Companies Registry administration.',
    questions: [
      'Which features distinguish a Hong Kong company from a branch or business registration?',
      'How does Cap. 622 structure private companies, public companies, and companies limited by guarantee?',
      'Which filings and registers sustain corporate transparency after incorporation?',
    ],
    statutoryAnchors: ['Companies Ordinance Cap. 622', 'Business Registration Ordinance Cap. 310'],
  },
  {
    id: 'corporate-personality',
    title: 'Corporate Personality, Capacity, and Attribution',
    shortTitle: 'Personality',
    summary:
      'Separate legal personality, corporate capacity, agency, attribution of knowledge, and the limits of treating the company as distinct from its controllers.',
    questions: [
      'When does the company bear responsibility for the knowledge or misconduct of its officers?',
      'How do attribution rules interact with fraud, insolvency, and shareholder remedies?',
      'What work is done by corporate personality in litigation and tax disputes?',
    ],
    statutoryAnchors: ['Companies Ordinance Cap. 622', 'Common law attribution principles'],
  },
  {
    id: 'constitutional-documents',
    title: 'Articles, Model Articles, and Internal Governance',
    shortTitle: 'Constitution',
    summary:
      'The company constitution, model articles, member rights under the articles, internal management, and board/shareholder authority allocation.',
    questions: [
      'How do articles operate as a statutory contract?',
      'Which governance choices should be drafted rather than left to model articles?',
      'How should internal irregularities be analysed in disputes?',
    ],
    statutoryAnchors: ['Companies Ordinance Cap. 622', 'Companies (Model Articles) Notice Cap. 622H'],
  },
  {
    id: 'capital-shares',
    title: 'Share Capital, Distributions, and Member Economics',
    shortTitle: 'Capital',
    summary:
      'Shares, class rights, reductions of capital, financial assistance, dividends, buy-backs, and economic rights attached to membership.',
    questions: [
      'What replaced par value and why does that matter in practice?',
      'How are distributions and buy-backs constrained by creditor-protection principles?',
      'When do class rights require separate procedural protection?',
    ],
    statutoryAnchors: ['Companies Ordinance Cap. 622', 'Companies (Winding Up and Miscellaneous Provisions) Ordinance Cap. 32'],
  },
  {
    id: 'directors-duties',
    title: 'Directors’ Duties, Board Powers, and Liability',
    shortTitle: 'Directors',
    summary:
      'The statutory duty of care, fiduciary duties, conflicts, disclosure of interests, delegation, non-executive director risk, and liability in distress.',
    questions: [
      'How does section 465 coexist with uncodified fiduciary duties?',
      'When is a conflict or opportunity outside the company’s proper scope of business?',
      'What changes when a company approaches insolvency?',
    ],
    statutoryAnchors: ['Companies Ordinance Cap. 622, Part 10', 'Companies Registry Guide on Directors’ Duties'],
  },
  {
    id: 'shareholder-governance',
    title: 'Shareholder Governance, Meetings, and Information Rights',
    shortTitle: 'Shareholders',
    summary:
      'Member decision-making, written resolutions, general meetings, requisitions, voting, inspection rights, and board accountability mechanisms.',
    questions: [
      'Which matters are reserved to members and which remain board powers?',
      'How can minority shareholders force information or meetings?',
      'What procedural defects matter enough to affect corporate decisions?',
    ],
    statutoryAnchors: ['Companies Ordinance Cap. 622, Parts 12 and 13'],
  },
  {
    id: 'minority-remedies',
    title: 'Minority Protection and Unfair Prejudice',
    shortTitle: 'Minority Remedies',
    summary:
      'Unfair prejudice petitions, buy-out orders, just and equitable winding up, personal and corporate relief, valuation, and procedural strategy.',
    questions: [
      'When is prejudicial conduct also unfair?',
      'How should the court value shares after a breakdown in trust?',
      'When should a claimant seek personal relief, corporate relief, or winding up?',
    ],
    statutoryAnchors: ['Companies Ordinance Cap. 622, unfair prejudice provisions', 'Cap. 32 winding-up jurisdiction'],
  },
  {
    id: 'derivative-actions',
    title: 'Derivative Actions and Reflective Loss',
    shortTitle: 'Derivative Actions',
    summary:
      'Common law and statutory derivative actions, multiple derivative claims, leave requirements, corporate loss, and limits on shareholder claims.',
    questions: [
      'Who may sue when the wrong is done to the company?',
      'What remains of common law derivative actions after statutory reform?',
      'How does reflective loss police the boundary between company and shareholder claims?',
    ],
    statutoryAnchors: ['Companies Ordinance Cap. 622', 'Common law derivative action doctrine'],
  },
  {
    id: 'listed-companies',
    title: 'Listed Companies, Disclosure, and Corporate Governance',
    shortTitle: 'Listed Companies',
    summary:
      'The interaction between company law, securities regulation, HKEX Listing Rules, disclosure duties, board governance, and market discipline.',
    questions: [
      'How do Listing Rules supplement ordinary company-law governance?',
      'When does a Listing Rule breach matter for directors’ duties?',
      'How do disclosure rules reshape corporate decision-making?',
    ],
    statutoryAnchors: ['Securities and Futures Ordinance Cap. 571', 'HKEX Listing Rules'],
  },
  {
    id: 'takeovers-schemes',
    title: 'Takeovers, Schemes of Arrangement, and Privatizations',
    shortTitle: 'Takeovers',
    summary:
      'Public takeover regulation, mandatory offers, schemes of arrangement, headcount tests, share splitting, compulsory acquisition, and shareholder approval.',
    questions: [
      'How do Cap. 622 schemes interact with the SFC Takeovers Code?',
      'What does the court police at scheme sanction?',
      'How do voting mechanics affect minority protection in privatizations?',
    ],
    statutoryAnchors: ['Companies Ordinance Cap. 622, Part 13', 'SFC Codes on Takeovers and Mergers and Share Buy-backs'],
  },
  {
    id: 'winding-up-restructuring',
    title: 'Winding Up, Insolvency, and Restructuring',
    shortTitle: 'Winding Up',
    summary:
      'Compulsory and voluntary winding up, creditor protection, insolvent companies, schemes for debt restructuring, directors’ conduct, and cross-border issues.',
    questions: [
      'When is winding up a debt remedy and when is it a shareholder remedy?',
      'How does insolvency alter directors’ risk calculus?',
      'What can schemes achieve in the absence of a full rescue statute?',
    ],
    statutoryAnchors: ['Companies (Winding Up and Miscellaneous Provisions) Ordinance Cap. 32', 'Companies Ordinance Cap. 622'],
  },
];

export const lawsRules: ContentRecord[] = [
  {
    id: 'companies-ordinance-cap-622',
    title: 'Companies Ordinance',
    type: 'Ordinance',
    citation: 'Cap. 622',
    year: '2014',
    summary:
      'The central statute for Hong Kong incorporated companies, covering incorporation, administration, share capital, directors, members, remedies, schemes, and registered non-Hong Kong companies.',
    topics: [
      'incorporation',
      'constitutional-documents',
      'capital-shares',
      'directors-duties',
      'shareholder-governance',
      'minority-remedies',
      'derivative-actions',
      'takeovers-schemes',
    ],
    sourceUrl: 'https://www.elegislation.gov.hk/hk/cap622',
    importance: 'Foundational',
  },
  {
    id: 'companies-registry-cap-622-portal',
    title: 'Companies Ordinance: Statutory Provisions and Subsidiary Legislation',
    type: 'Official portal',
    citation: 'Companies Registry',
    summary:
      'Official Companies Registry gateway linking the full Cap. 622 text, subsidiary legislation, commencement materials, and explanatory resources.',
    topics: ['incorporation', 'constitutional-documents', 'directors-duties', 'shareholder-governance'],
    sourceUrl: 'https://www.cr.gov.hk/en/legislation/companies-ordinance/cap622/companies-ordinance.htm',
    importance: 'Foundational',
  },
  {
    id: 'model-articles-notice',
    title: 'Companies (Model Articles) Notice',
    type: 'Subsidiary legislation',
    citation: 'Cap. 622H',
    year: '2014',
    summary:
      'Default constitutional forms for private companies limited by shares, public companies, and companies limited by guarantee.',
    topics: ['constitutional-documents', 'shareholder-governance'],
    sourceUrl: 'https://www.elegislation.gov.hk/hk/cap622H',
    importance: 'Core',
  },
  {
    id: 'cwump-cap-32',
    title: 'Companies (Winding Up and Miscellaneous Provisions) Ordinance',
    type: 'Ordinance',
    citation: 'Cap. 32',
    summary:
      'The principal winding-up and corporate insolvency legislation, still central for liquidations, creditor remedies, and just and equitable winding up.',
    topics: ['minority-remedies', 'winding-up-restructuring', 'capital-shares'],
    sourceUrl: 'https://www.elegislation.gov.hk/hk/cap32',
    importance: 'Foundational',
  },
  {
    id: 'sfo-cap-571',
    title: 'Securities and Futures Ordinance',
    type: 'Ordinance',
    citation: 'Cap. 571',
    summary:
      'Market-regulation framework for listed companies, disclosure, market misconduct, SFC powers, and securities-facing governance obligations.',
    topics: ['listed-companies', 'takeovers-schemes'],
    sourceUrl: 'https://www.elegislation.gov.hk/hk/cap571',
    importance: 'Core',
  },
  {
    id: 'hkex-listing-rules',
    title: 'HKEX Listing Rules and Guidance Search',
    type: 'Market rulebook',
    citation: 'Hong Kong Exchanges and Clearing Limited',
    summary:
      'The primary rule and guidance portal for Main Board and GEM issuers, including governance, disclosure, transactions, connected transactions, and listing decisions.',
    topics: ['listed-companies', 'takeovers-schemes', 'directors-duties'],
    sourceUrl: 'https://www.hkex.com.hk/Listing/Listing-Rules-and-Guidance-Search?sc_lang=en',
    importance: 'Core',
  },
  {
    id: 'hkex-corporate-governance-code',
    title: 'Corporate Governance Code',
    type: 'Listing rule appendix',
    citation: 'HKEX Listing Rules, Appendix C1',
    summary:
      'Corporate governance principles and code provisions for listed issuers, including board composition, committees, risk management, and reporting.',
    topics: ['listed-companies', 'directors-duties'],
    sourceUrl: 'https://en-rules.hkex.com.hk/rulebook/corporate-governance-code',
    importance: 'Core',
  },
  {
    id: 'sfc-takeovers-code',
    title: 'Codes on Takeovers and Mergers and Share Buy-backs',
    type: 'Regulatory code',
    citation: 'Securities and Futures Commission',
    summary:
      'The central code-based regime for public takeovers, mergers, privatizations, whitewash waivers, mandatory offers, and share buy-backs.',
    topics: ['takeovers-schemes', 'listed-companies'],
    sourceUrl: 'https://www.sfc.hk/en/Regulatory-functions/Corporates/Takeovers-and-mergers',
    importance: 'Foundational',
  },
  {
    id: 'business-registration-ordinance',
    title: 'Business Registration Ordinance',
    type: 'Ordinance',
    citation: 'Cap. 310',
    summary:
      'Complements company incorporation by governing business registration obligations for entities carrying on business in Hong Kong.',
    topics: ['incorporation'],
    sourceUrl: 'https://www.elegislation.gov.hk/hk/cap310',
    importance: 'Core',
  },
];

export const cases: ContentRecord[] = [
  {
    id: 'waddington-v-chan',
    title: 'Waddington Ltd v Chan Chun Hoo Thomas',
    type: 'Derivative action',
    citation: '[2008] HKEC 1498; FACV 15/2007',
    year: '2008',
    summary:
      'A leading Hong Kong authority on multiple derivative actions, useful for understanding how shareholder litigation can proceed where wrongs are done down a corporate chain.',
    topics: ['derivative-actions', 'minority-remedies', 'corporate-personality'],
    sourceUrl: 'https://www.legco.gov.hk/yr09-10/english/bc/bc03/papers/bc030420cb1-1638-1-e.pdf',
    importance: 'Foundational',
  },
  {
    id: 're-chime',
    title: 'Re Chime Corporation Ltd',
    type: 'Unfair prejudice',
    citation: '(2004) 7 HKCFAR 546',
    year: '2004',
    summary:
      'Court of Final Appeal authority on unfair prejudice and the relationship between personal shareholder relief, corporate relief, and winding-up style remedies.',
    topics: ['minority-remedies', 'derivative-actions', 'shareholder-governance'],
    sourceUrl: 'https://trusts.it/admincp/UploadedPDF/201103011452100.jHongKongKung2004.pdf',
    importance: 'Foundational',
  },
  {
    id: 're-pccw',
    title: 'Re PCCW Ltd',
    type: 'Scheme of arrangement',
    citation: '[2009] HKCA 178; [2009] 3 HKC 292',
    year: '2009',
    summary:
      'A leading privatization and scheme case on vote manipulation, share splitting, and the court’s role at scheme sanction.',
    topics: ['takeovers-schemes', 'listed-companies', 'minority-remedies'],
    sourceUrl: 'https://apps.sfc.hk/edistributionWeb/gateway/EN/news-and-announcements/news/doc?refNo=09PR62',
    importance: 'Foundational',
  },
  {
    id: 'cheng-wai-tao',
    title: 'Cheng Wai Tao v Poon Ka Man Jason',
    type: 'Directors’ fiduciary duties',
    citation: '(2016) 19 HKCFAR 144',
    year: '2016',
    summary:
      'Court of Final Appeal decision on directors’ no-conflict duty and the relevance of the company’s scope of business when assessing alleged diversion of opportunity.',
    topics: ['directors-duties', 'corporate-personality'],
    sourceUrl: 'https://blogs.law.ox.ac.uk/business-law-blog/blog/2016/04/icymi-%E2%80%93-hong-kong-court-final-appeal-decision-directors%E2%80%99-fiduciary',
    importance: 'Foundational',
  },
  {
    id: 'moulin-global-eyecare',
    title: 'Moulin Global Eyecare Trading Ltd v Commissioner of Inland Revenue',
    type: 'Attribution and fraud',
    citation: '(2014) 17 HKCFAR 218',
    year: '2014',
    summary:
      'A Court of Final Appeal decision on attribution of fraudulent directors’ knowledge to a company, relevant to corporate personality, insolvency, and remedies.',
    topics: ['corporate-personality', 'directors-duties', 'winding-up-restructuring'],
    sourceUrl: 'https://legalref.judiciary.hk/doc/judg/html/vetted/other/en/2013/FACV000005_2013_files/FACV000005_2013ES.htm',
    importance: 'Core',
  },
  {
    id: 'dennis-kwok-v-poon',
    title: 'Dennis Kwok Hon Ming v Poon Sui Cheong Albert',
    type: 'Unfair prejudice and valuation',
    citation: '[2022] 25 HKCFAR 1; related CA proceedings',
    year: '2022',
    summary:
      'A modern shareholder-remedies dispute illustrating unfair prejudice, buy-out relief, valuation, and appellate control of company litigation.',
    topics: ['minority-remedies', 'shareholder-governance'],
    sourceUrl: 'https://casebyte.ai/case/hkca/2021/1629',
    importance: 'Core',
  },
  {
    id: 'power-securities-v-sin',
    title: 'Power Securities Co Ltd v Sin Kwok Lam',
    type: 'Reflective loss',
    citation: '[2023] HKCA 594',
    year: '2023',
    summary:
      'Court of Appeal authority on reflective loss and the boundary between company claims and shareholder claims after recent UK developments.',
    topics: ['derivative-actions', 'minority-remedies', 'corporate-personality'],
    sourceUrl: 'https://www.hsfkramer.com/notes/asiadisputes/2023-05/hong-kong-court-of-appeal-provides-certainty-on-bar-against-reflective-loss',
    importance: 'Current',
  },
  {
    id: 'lui-yau-tak-v-melofield',
    title: 'Lui Yau Tak v Melofield Nursery and Landscape Contractor Ltd',
    type: 'Shareholder requisition and directors’ conduct',
    citation: '[2025] HKCFI 1037; [2025] 3 HKC 721',
    year: '2025',
    summary:
      'Recent first-instance decision on shareholder requisition tactics and directors’ conduct when minority shareholders attempt to trigger governance mechanisms.',
    topics: ['shareholder-governance', 'directors-duties', 'minority-remedies'],
    sourceUrl:
      'https://bernacchichambers.com/lui-yau-tak-%E9%9B%B7%E6%9C%89%E5%BE%97-anor-v-melofield-nursery-and-landscape-contractor-ltd-%E7%B6%93%E7%B7%AF%E5%9C%92%E8%97%9D%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-2025-3-hkc-721/',
    importance: 'Current',
  },
];

export const academicWorks: ContentRecord[] = [
  {
    id: 'law-of-companies-hk',
    title: 'Law of Companies in Hong Kong',
    type: 'Book',
    citation: 'Thomson Reuters, 4th ed.',
    summary:
      'A leading practitioner-academic treatment of Hong Kong company law, useful as a doctrinal reference across incorporation, governance, capital, remedies, and transactions.',
    topics: ['incorporation', 'directors-duties', 'minority-remedies', 'takeovers-schemes'],
    sourceUrl: 'https://store.thomsonreuters.com.hk/en-HK/product/law-of-companies-in-hong-kong-4th-edition-bundle-isbn-9789888591329/',
    importance: 'Foundational',
  },
  {
    id: 'butterworths-company-law-handbook',
    title: 'Butterworths Hong Kong Company Law Handbook',
    type: 'Annotated handbook',
    citation: 'LexisNexis / Butterworths',
    summary:
      'A current annotated statutory handbook for working with the Companies Ordinance, subsidiary legislation, forms, and related materials.',
    topics: ['incorporation', 'constitutional-documents', 'capital-shares', 'directors-duties'],
    sourceUrl: 'https://www.pbookshop.com/butterworths-hong-kong-company-law-handbook-27th-edition-9789888865628.html',
    importance: 'Core',
  },
  {
    id: 'hong-kong-company-law-legislation-commentary',
    title: 'Hong Kong Company Law: Legislation and Commentary',
    type: 'Looseleaf commentary',
    citation: 'LexisNexis Hong Kong',
    summary:
      'Section-by-section commentary on Cap. 622 and winding-up legislation, designed for practitioners and researchers needing close statutory analysis.',
    topics: ['directors-duties', 'minority-remedies', 'winding-up-restructuring', 'takeovers-schemes'],
    sourceUrl: 'https://www.lexisnexis.com/en-hk/products-and-services/print-publication/looseleaf/hk-company-law-legislation-and-commentary',
    importance: 'Core',
  },
  {
    id: 'shareholder-rights-remedies-hk',
    title: 'Shareholder Rights and Remedies in Hong Kong',
    type: 'Book',
    citation: 'LexisNexis, 2nd ed.',
    summary:
      'Specialist treatment of shareholder rights, minority remedies, derivative actions, unfair prejudice, and litigation strategy in Hong Kong.',
    topics: ['minority-remedies', 'derivative-actions', 'shareholder-governance'],
    sourceUrl: 'https://store.lexisnexis.com/en-hk/shareholder-rights-and-remedies-in-hong-kong-second-edition.html',
    importance: 'Core',
  },
  {
    id: 'yap-whither-common-law-derivative-action',
    title: 'Whither the Common Law Derivative Action?',
    type: 'Journal article',
    citation: 'Ji Lian Yap, Common Law World Review',
    summary:
      'Compares Hong Kong and Singapore derivative-action frameworks and explains why common law derivative actions remain analytically important.',
    topics: ['derivative-actions', 'minority-remedies'],
    sourceUrl: 'https://hub.hku.hk/bitstream/10722/124777/1/Content.pdf',
    importance: 'Specialist',
  },
  {
    id: 'corporate-governance-reform-hk',
    title: 'Corporate Governance and Its Reform in Hong Kong',
    type: 'Journal article',
    citation: 'Corporate Governance, Vol. 15 Iss. 4',
    summary:
      'Analyses Hong Kong corporate governance reform through local institutions, market structure, and comparative corporate governance theory.',
    topics: ['listed-companies', 'directors-duties', 'shareholder-governance'],
    sourceUrl: 'https://www.emerald.com/insight/content/doi/10.1108/cg-11-2014-0130/full/html',
    importance: 'Specialist',
  },
  {
    id: 'koh-directors-duty-loyalty',
    title: 'A Director’s Duty of Loyalty and the Relevance of the Company’s Scope of Business',
    type: 'Case note',
    citation: 'Pearlie Koh, Modern Law Review',
    summary:
      'Academic case note on Cheng Wai Tao and the CFA’s treatment of directors’ fiduciary duties, business scope, and conflicts of interest.',
    topics: ['directors-duties', 'corporate-personality'],
    sourceUrl: 'https://ink.library.smu.edu.sg/sol_research/2952/',
    importance: 'Specialist',
  },
  {
    id: 'comparative-takeover-regulation-hk',
    title: 'Evolutionary Development in Hong Kong of Transplanted UK-Origin Takeover Rules',
    type: 'Book chapter',
    citation: 'Comparative Takeover Regulation, Cambridge University Press',
    summary:
      'Explains the evolution of Hong Kong takeover regulation as a transplanted but locally adapted UK-origin framework.',
    topics: ['takeovers-schemes', 'listed-companies'],
    sourceUrl:
      'https://www.cambridge.org/core/books/comparative-takeover-regulation/evolutionary-development-in-hong-kong-of-transplanted-ukorigin-takeover-rules/4A09595A6B54DB2B261408EEE2860EED',
    importance: 'Specialist',
  },
];

export const practiceNotes: ContentRecord[] = [
  {
    id: 'companies-registry-directors-duties-guide',
    title: 'A Guide on Directors’ Duties',
    type: 'Official guidance',
    citation: 'Companies Registry',
    summary:
      'Companies Registry guidance explaining core directors’ duties, including good faith, proper purpose, conflicts, care, skill, diligence, and disclosure.',
    topics: ['directors-duties', 'listed-companies'],
    sourceUrl: 'https://www.cr.gov.hk/en/companies_ordinance/docs/Guide_DirDuties-e.pdf',
    importance: 'Foundational',
  },
  {
    id: 'companies-registry-cap-622-highlights',
    title: 'New Companies Ordinance: Highlights',
    type: 'Official explanatory note',
    citation: 'Companies Registry',
    summary:
      'Official explanatory overview of the Cap. 622 rewrite, including modernization of company law, no-par regime, governance changes, and compliance simplification.',
    topics: ['incorporation', 'capital-shares', 'directors-duties', 'shareholder-governance'],
    sourceUrl: 'https://www.cr.gov.hk/en/companies_ordinance/docs/NewCO_C622_HL_FullVersion-e.pdf',
    importance: 'Core',
  },
  {
    id: 'hkcgi-company-law-guidance',
    title: 'Company Law Guidance Note',
    type: 'Professional guidance',
    citation: 'Hong Kong Chartered Governance Institute',
    summary:
      'Governance-profession guidance on practical implementation of Companies Ordinance provisions and company secretarial issues.',
    topics: ['shareholder-governance', 'constitutional-documents', 'directors-duties'],
    sourceUrl: 'https://www.hkcgi.org.hk/media/publication/attachment/PUBLICATION_A_2406_HKICS_Company_Law_Guidance_Note%20(Eng).pdf.pdf',
    importance: 'Core',
  },
  {
    id: 'kpmg-companies-ordinance-briefings',
    title: 'Hong Kong Companies Ordinance Briefing Notes',
    type: 'Accounting and reporting briefing',
    citation: 'KPMG',
    summary:
      'Practitioner briefing series on Companies Ordinance accounting, reporting, and compliance issues with worked examples.',
    topics: ['capital-shares', 'incorporation', 'directors-duties'],
    sourceUrl: 'https://kpmg.com/cn/en/services/audit/accounting-and-reporting-focus/hong-kong-companies-ordinance.html',
    importance: 'Core',
  },
  {
    id: 'charltons-cap-622-key-changes',
    title: 'Key Changes under the Companies Ordinance (Cap. 622)',
    type: 'Law firm note',
    citation: 'Charltons',
    summary:
      'Law firm overview of major Cap. 622 reforms, including corporate administration, capital, directors, meetings, and shareholder protections.',
    topics: ['incorporation', 'capital-shares', 'directors-duties', 'shareholder-governance'],
    sourceUrl: 'https://www.charltonslaw.com/legal/company/Key-changes-introduced-by-the-Companies-Ordinance-Cap.622.pdf',
    importance: 'Core',
  },
  {
    id: 'hsf-derivative-unfair-prejudice',
    title: 'Leave to Bring Unfair Prejudice Proceedings by Way of Derivative Action',
    type: 'Law firm case note',
    citation: 'Herbert Smith Freehills Kramer',
    summary:
      'Practical note on the early post-Cap. 622 interaction between statutory derivative actions and unfair prejudice proceedings.',
    topics: ['derivative-actions', 'minority-remedies'],
    sourceUrl:
      'https://www.hsfkramer.com/notes/asiadisputes/2015-04/hong-kong-court-grants-leave-under-new-companies-ordinance-to-bring-unfair-prejudice-proceedings-by-way-of-derivative-action',
    importance: 'Specialist',
  },
  {
    id: 'stephenson-harwood-company-relief',
    title: 'When Can Shareholders Seek Relief in Favour of the Company?',
    type: 'Law firm case note',
    citation: 'Stephenson Harwood',
    summary:
      'Practitioner analysis of unfair prejudice petitions seeking company-level relief and the continued significance of Chime-style issues.',
    topics: ['minority-remedies', 'derivative-actions'],
    sourceUrl:
      'https://www.stephensonharwood.com/insights/when-can-shareholders-seek-relief-in-favour-of-the-company-alongside-an-unfair-prejudice-petition-and-does-the-approach-in-chime-no-longer-ring-true/',
    importance: 'Current',
  },
  {
    id: 'mayer-brown-company-litigation-2023',
    title: 'Key Highlights of Company Litigation Developments in Hong Kong in 2023',
    type: 'Law firm review',
    citation: 'Mayer Brown',
    summary:
      'Annual litigation review covering unfair prejudice, valuation, company participation in shareholder disputes, and other company-law developments.',
    topics: ['minority-remedies', 'shareholder-governance', 'derivative-actions'],
    sourceUrl:
      'https://www.mayerbrown.com/-/media/files/perspectives-events/publications/2024/01/unravelling-the-legal-landscape-key-highlights-of-company-litigation-developments-in-hong-kong-in-2023.pdf',
    importance: 'Current',
  },
  {
    id: 'hogan-lovells-insolvency-directors',
    title: 'Directors’ Duties in Insolvency: Hong Kong Court Warns of Personal Liability',
    type: 'Law firm case note',
    citation: 'Hogan Lovells',
    summary:
      'Current practitioner analysis of personal-liability risk where directors cause an insolvent company to pursue hopeless proceedings.',
    topics: ['directors-duties', 'winding-up-restructuring'],
    sourceUrl:
      'https://www.hoganlovells.com/en/publications/directors-duties-in-insolvency-hong-kong-court-warns-of-personal-liability-for-frivolous-challenges',
    importance: 'Current',
  },
];

export const allRecords = [...lawsRules, ...cases, ...academicWorks, ...practiceNotes];

export function getTopic(id: string) {
  return topics.find((topic) => topic.id === id);
}

export function getTopicRecords(topicId: string) {
  return allRecords.filter((record) => record.topics.includes(topicId));
}
