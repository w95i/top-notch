export interface CompanyProfile {
    id: number;
    descp: string;
    imageProfile: string;
}

export interface Hero {
    id: number;
    descp: string;
    imageProfile: string;
}

export interface HeroSection {
    id: number;
    title: string;
    descp: string;
    url: string;
}

export interface TopNotchAccountantsInfo {
    id: number;
    title: string;
    descp: string;
}

export interface Definition {
    id: number;
    title: string;
    descp: string;
}

export interface WhyTopNotchAccountant {
    id: number;
    point: string;
}

export interface DemoContent {
    id: number;
    title: string;
    descp: string;
}

export interface Service {
    id: number;
    title: string;
    descp: string;
    iconSvg: string | null;
}

export interface AccountingService {
    id: number;
    title: string;
    descp: string;
    url: string | null;
    iconSvg: string | null;
}

export interface HomePageData {
    companyProfile: CompanyProfile;
    hero: Hero;
    heroSections: HeroSection[];
    topNotchAccountantsInfo: TopNotchAccountantsInfo;
    definitions: Definition[];
    whyTopNotchAccountants: WhyTopNotchAccountant[];
    demoContent : DemoContent;
    service: Service[];
    accountingService: AccountingService[];
}

export interface accountingService {
    id: number;
    title: string;
    url: string;
}

export interface taxationService {
    id: number;
    title: string;
    url: string;
}

export interface contactUs {
    id: number;
    facebook: string;
    instagram: string;
    linkedIn: string;
    youtube: string;
    whatsApp: string;
    tikTok: string;
    x: string;
    telegram: string;
    firstPhoneNumber: string;
    secondPhoneNumber: string;
    contactInfo: string;
    address: string;
    email: string;
    lng: number;
    lat: number;
}

export interface FooterData {
    CompanyProfile: CompanyProfile;
    accountingService: accountingService[];
    taxationService: taxationService[];
    contactUs: contactUs;
}
