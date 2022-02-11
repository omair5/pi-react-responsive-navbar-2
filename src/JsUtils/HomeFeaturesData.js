import { FaStickyNote, FaPhoneAlt, FaInfoCircle, FaQuestionCircle } from "react-icons/fa";

// using this data in home page (features) to render cards using PrimaryCard component
// which excepts several props ( heading, description, Icon, Icon_Color, external_link, internal_route, bg_color, heading_color, text_color)

export const HomeFeaturesData = [
    {
        heading: 'ABOUT COVID-19',
        description: 'COVID-19 (Novel Coronavirus-19) is a new strain of coronavirus (a large family of viruses) that had previously not been identified in humans...',
        Icon: FaStickyNote,
        internal_route: '/aboutcovid19',
        heading_color: '363c42',
        text_color: '#8f8e8e'
    },
    {
        heading: 'ABOUT US',
        description: 'We aims to sensitize the public, including patients and visitors at healthcare facilities,to support frontline healthcare workers by following...',
        Icon: FaInfoCircle,
        internal_route: '',
        heading_color: '363c42',
        text_color: '#8f8e8e'
    },
    {
        heading: 'CONTACT US',
        description: 'Please click here to know our contact details.',
        Icon: FaPhoneAlt,
        internal_route: '/contactus',
        heading_color: '363c42',
        text_color: '#8f8e8e'
    },
    {
        heading: 'FAQS',
        description: 'Click here to get answers to your questions.',
        Icon: FaQuestionCircle,
        internal_route: '/faqs',
        heading_color: '363c42',
        text_color: '#8f8e8e'
    },
]