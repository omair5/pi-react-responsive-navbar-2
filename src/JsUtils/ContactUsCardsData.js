import { FaLocationArrow, FaEnvelope, FaPhoneAlt, FaGlobeAsia } from "react-icons/fa";

// using this data in contact us page to render cards using PrimaryCard component
// which excepts several props (  heading, description, Icon, Icon_Color, external_link, internal_route, bg_color, heading_color, text_color)

export const ContactUsCardsData = [
    {
        heading: 'Address',
        description: 'National Bank of Pakistan <br /> I.I.Chundrigar Road, Karachi, Pakistan',
        Icon: FaLocationArrow,
        external_link: '',
        text_color: '#808080',
        Icon_Color: '#009a54'
    },
    {
        heading: 'Email',
        description: 'pmreliefcovid19@nbp.com.pk',
        Icon: FaEnvelope,
        external_link: 'mailto:info@nbp.com.pk',
        text_color: '#808080',
        Icon_Color: '#009a54'


    },
    {
        heading: 'Call',
        description: '+92-21-111-627-627',
        Icon: FaPhoneAlt,
        external_link: 'tel:+9221111627627',
        text_color: '#808080',
        Icon_Color: '#009a54'


    },
    {
        heading: 'Website',
        description: 'www.nbp.com.pk',
        Icon: FaGlobeAsia,
        external_link: 'https://www.nbp.com.pk',
        text_color: '#808080',
        Icon_Color: '#009a54'


    },
]