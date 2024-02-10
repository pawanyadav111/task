import { Link } from "react-router-dom"

const Footer = ()=>{
    const menus = [
        {
            path: '/contact us',
            label: 'contact us'
        },
        {
            path: '/about us',
            label: 'about us'
        },
        {
            path: '/careers',
            label: 'careers'
        },
        {
            path: '/flipkart stories',
            label: 'flipkart stories'
        },
        {
            path: '/press',
            label: 'press'
        },
        {
            path: '/corporate information',
            label: 'corporate information'
        }
    ]

    const communities = [
        {
            path: '/myntra',
            label: 'myntra'
        },
        {
            path: '/flipkart wholesale',
            label: 'flipkart wholesale'
        },
        {
            path: '/cleartrip',
            label: 'cleartrip'
        },
        {
            path: '/shopsy',
            label: 'shopsy'
        },
    ]

    const teachings = [
        {
            path: '/payments',
            label: 'paymetns'
        },
        {
            path: '/shippings',
            label: 'shippings'
        },
        {
            path: '/cancellation',
            label: 'cancellation'
        }
    ]

    const consumer = [
        {
            path: '/cancellation',
            label: 'cancellation'
        },
        {
            path: '/term of use',
            label: 'term of use'
        },
        {
            path: '/security',
            label: 'security'
        },
        {
            path: '/privacy',
            label: 'privacy'
        },
        {
            path: '/sitemap',
            label: 'sitemap'
        },
        {
            path: '/grievance',
            label: 'grievance'
        }
    ]

    const mail = [
        {
            path: '/flipkart internet private limited,',
            label: 'flipkart internet private limited,'
        },
        {
            path: '/buildings alyssa',
            label: 'buildings alyssa'
        },
        {
            path: '/clove embassy',
            label: 'clove embassy'
        },
        {
            path: '/bangaluru, 560103',
            label: 'bangaluru, 560103'
        },
        {
            path: '/karnatka,india',
            label: 'karnatka,india'
        },
    ]

    const socials = [
        {
            icon: 'fa fa-facebook text-[#5374BC]',
            link: process.env.REACT_APP_FACEBOOK_PAGE
        },
        {
            icon: 'fa fa-twitter text-[#3AABDC]',
            link: process.env.REACT_APP_TWITTER_PAGE
        },
        {
            icon: 'fa fa-youtube-play text-[#207EB4]',
            link: process.env.REACT_APP_LINKEDIN_PAGE
        }
    ]

    return(
        <footer className="p-8 md:px-[10%] md:py-16 shadow-inner bg-black">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24">
            <div className="flex flex-col gap-4">
                <h1 className="text-sm text-gray-400 font-semi-bold">ABOUT</h1>
                <ul className="flex flex-col gap-2">
                        {
                            menus.map((menu, index)=>(
                                <li key={index}>
                                    <Link to={menu.path} className="capitalize text-gray-600 text-white">{menu.label}</Link>
                                </li>
                            ))
                        }
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semi-bold text-gray-400">GROUP COMAPANIES</h1>
                <ul className="flex flex-col gap-2">
                        {
                            communities.map((community, index)=>(
                                <li key={index}>
                                    <Link to={community.path} className="capitalize text-gray-600 text-white">{community.label}</Link>
                                </li>
                            ))
                        }
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semi-bold text-gray-400">HELP</h1>
                <ul className="flex flex-col gap-2">
                        {
                            teachings.map((teaching, index)=>(
                                <li key={index}>
                                    <Link to={teaching.path} className="capitalize text-gray-600 text-white">{teaching.label}</Link>
                                </li>
                            ))
                        }
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semi-bold text-gray-400">CONSUMER POLICY</h1>
                <ul className="flex flex-col gap-2">
                        {
                            consumer.map((comsumers, index)=>(
                                <li key={index}>
                                    <Link to={comsumers.path} className="capitalize text-gray-600 text-white">{comsumers.label}</Link>
                                </li>
                            ))
                        }
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-sm font-semi-bold text-gray-400">Mail Us:</h1>
                <ul className="flex flex-col gap-2">
                        {
                            mail.map((mails, index)=>(
                                <li key={index}>
                                    <Link to={mails.path} className="capitalize text-gray-600 text-white">{mails.label}</Link>
                                </li>
                            ))
                        }
                </ul>
                <div className="flex flex-col gap-4 md:w-1/3">
                    <h1 className="text-sm font-semi-bold text-gray-400">Socials:</h1>
                    <div className="flex gap-4">
                        {socials.map((social, index) => (
                        <Link key={index} to={social.link}>
                            <button className="bg-white p-2 shadow-lg rounded-lg">
                            <i
                                className={social.icon}
                                style={{
                                fontSize: '18px',
                                color: social.color,
                                }}
                            ></i>
                            </button>
                        </Link>
                        ))}
                </div>
            </div>
        </div>
        </div>
    </footer>
    )
}

export default Footer