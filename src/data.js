//icon
import { AiOutlineSetting, AiOutlineTag, AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineCodepen, AiOutlineBank } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
import { LuCircleDotDashed } from "react-icons/lu";
// cart boxes icons
// import { FaRegChartBar } from "react-icons/fa";
// pages data
export const menu_links = [
    {
        id: 0,
        title: "Menu",
        icon: AiOutlineDashboard,
        list: [
            {
                id: 0,
                page: "Dashboard",
                path: "/dashboard",
                icon: LuCircleDotDashed
            },
            {
                id: 1,
                page: "Companies",
                path: "/companies",
                icon: LuCircleDotDashed
            },
            {
                id: 2,
                page: "Calendar",
                path: "/calendar",
                icon: LuCircleDotDashed
            },
            {
                id: 3,
                page: "Documents",
                path: "/documents",
                icon: LuCircleDotDashed
            },
        ]
    },

    {
        id: 1,
        title: "Customers",
        icon: RiCustomerService2Line,
        list: [
            {
                id: 0,
                page: "Add Customer",
                path: "/add-customers",
                icon: LuCircleDotDashed
            },
            {
                id: 1,
                page: "List Customers",
                path: "/list-customers",
                icon: LuCircleDotDashed
            },
            {
                id: 2,
                page: "Groups",
                path: "/groups",
                icon: LuCircleDotDashed
            }
        ]
    },
    {
        id: 2,
        title: "Transactions",
        icon: BiTransfer,
        list: [
            {
                id: 0,
                page: "New Desposit",
                path: "/new-desposit",
                icon: LuCircleDotDashed
            },
            {
                id: 1,
                page: "New Expense",
                path: "/new-expense",
                icon: LuCircleDotDashed
            },
            {
                id: 2,
                page: "Transfer",
                path: "/transfer",
                icon: LuCircleDotDashed
            },
            {
                id: 3,
                page: "View Transactions",
                path: "/transactions",
                icon: LuCircleDotDashed
            },
            {
                id: 4,
                page: "Balance Sheet",
                path: "/balance-sheet",
                icon: LuCircleDotDashed
            },
        ]
    },
    {
        id: 3,
        title: "Sales",
        icon: AiOutlineTag,
        list: [
            {
                id: 0,
                page: "Invoices",
                path: "/invoices",
                icon: LuCircleDotDashed
            },
            {
                id: 1,
                page: "New Invoice",
                path: "/new-invoice",
                icon: LuCircleDotDashed
            },
            {
                id: 2,
                page: "Recurring Invoice",
                path: "/recurring-invoice",
                icon: LuCircleDotDashed
            },
            {
                id: 3,
                page: "New Recurring Invoice",
                path: "/new-invoice",
                icon: LuCircleDotDashed
            },
            {
                id: 4,
                page: "Quotes",
                path: "/quotes",
                icon: LuCircleDotDashed
            },
            {
                id: 5,
                page: "Create New Quote",
                path: "/new-quote",
                icon: LuCircleDotDashed
            },
            {
                id: 6,
                page: "Payment",
                path: "/payment",
                icon: LuCircleDotDashed
            },
        ]
    },
    {
        id: 4,
        title: "Orders",
        icon: AiOutlineShoppingCart,
        list: [
            {
                id: 0,
                page: "List All Orders",
                path: "/list-orders",
                icon: LuCircleDotDashed
            },
            {
                id: 1,
                page: "Add New Order",
                path: "/new-order",
                icon: LuCircleDotDashed
            },

        ]
    },
    {
        id: 5,
        title: "Products & Services",
        icon: AiOutlineCodepen,
        list: [
            {
                id: 0,
                page: "Products",
                path: "/products",
                icon: LuCircleDotDashed
            },
            {
                id: 1,
                page: "New Product",
                path: "/new-product",
                icon: LuCircleDotDashed
            },
            {
                id: 2,
                page: "Services",
                path: "/services",
                icon: LuCircleDotDashed
            },
            {
                id: 3,
                page: "New Service",
                path: "/new-service",
                icon: LuCircleDotDashed
            },
        ]
    },
    {
        id: 6,
        title: "Bank & Cash",
        icon: AiOutlineBank,
        list: [
            {
                id: 0,
                page: "New Account",
                path: "/new-account",
                icon: LuCircleDotDashed
            },
            {
                id: 1,
                page: "List Accounts",
                path: "/list-accounts",
                icon: LuCircleDotDashed
            },
            {
                id: 2,
                page: "Account Balances",
                path: "/account-balances",
                icon: LuCircleDotDashed
            },
        ]
    },
    {
        id: 7,
        title: "Settings",
        icon: AiOutlineSetting,
        list: [
            {
                id: 0,
                page: "General Settings",
                path: "/settings/general",
                icon: LuCircleDotDashed
            },
            {
                id: 1,
                page: "Staff",
                path: "/settings/staff",
                icon: LuCircleDotDashed
            },
            {
                id: 2,
                page: "Roles",
                path: "/settings/roles",
                icon: LuCircleDotDashed
            },
        ]
    },

];

// tiny Cart Data for boxes ===========================================
export const tinyCartDataTotalIncome = {
    icon: "",
    title: "Total Income",
    value: "8753865",
    link: "/",
    chartColor: "green",
    dataKey: "pv",
    percentage: 20,
    duration: "month",
    chartData: [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ],
}

export const tinyCartDataTotalExpence = {
    icon: "",
    title: "Total Expence",
    value: "6565",
    link: "/",
    chartColor: "purple",
    dataKey: "pv",
    percentage: -5,
    duration: "month",
    chartData: [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ],
}
export const companiesData = {
    title: "Companies",
    value: "102",
    link: "/",
    chartColor: "gold",
    dataKey: "pv",
    percentage: 10,
    duration: "month",
    chartData: [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ],
}

export const customersData = {
    title: "Customers",
    value: "24",
    link: "/",
    chartColor: "gold",
    dataKey: "pv",
    percentage: 10,
    duration: "month",
    chartData: [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ],
}

export const BoxBarChartData =
{
    title: "Box Bar Chart",
    dataKey1: "income",
    dataKey2: "expence",
    dataKey1Bg: "#967cff",
    dataKey2Bg: "#fc9740",
    dataKey1ActiveStroke: "blue",
    dataKey2ActiveStroke: "orange",
    chartData: [
        {
            name: "Time A",
            expence: 4000,
            income: 2400,
            amt: 2400,
        },
        {
            name: "Time B",
            expence: 3000,
            income: 1398,
            amt: 2210,
        },
        {
            name: "Time C",
            expence: 2000,
            income: 9800,
            amt: 2290,
        },
        {
            name: "Time D",
            expence: 2780,
            income: 3908,
            amt: 2000,
        },
        {
            name: "Time E",
            expence: 1890,
            income: 4800,
            amt: 2181,
        },
        {
            name: "Time F",
            expence: 2390,
            income: 3800,
            amt: 2500,
        },
        {
            name: "Time G",
            expence: 3490,
            income: 4300,
            amt: 2100,
        },
    ]
}


