import { FaMoneyBillAlt } from "react-icons/fa";
import { GiLoveInjection } from "react-icons/gi"

// using this data in home page to render cards using PrimaryCard component
// which excepts several props ( heading, description, Icon, Icon_Color, external_link, internal_route, bg_color, heading_color, text_color)

export const HomePaymentCardsData = [
    {
        heading: 'DONATE IN PM RELIEF FUND COVID-19',
        description: 'You can donate for Covid19 using Debit / Credit card.',
        Icon: FaMoneyBillAlt,
        internal_route: '/',
        bg_color: '#e9bc50',
        Icon_Color: 'white',
        text_color: '#e7e7e7e0',
        heading_color: 'white'

    },
    {
        heading: 'COVID BOOSTER VACCINATION FEE PAYMENT',
        description: 'You can donate for Covid19 using Debit / Credit card.',
        Icon: GiLoveInjection,
        internal_route: '/',
        bg_color: '#e9bc50',
        Icon_Color: 'white',
        text_color: '#e7e7e7e0',
        heading_color: 'white'
    },
]