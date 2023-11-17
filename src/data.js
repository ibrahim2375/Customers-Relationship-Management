//icon
import { AiOutlineSetting, AiOutlineTag, AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineCodepen, AiOutlineBank } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";

// pages data
export const menu_links = [
    {
        id: 0,
        title: "Dashboard",
        icon: AiOutlineDashboard,
        path: "/dashboard",
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

            },
            {
                id: 1,
                page: "List Customers",
                path: "/list-customers",

            },
            {
                id: 2,
                page: "Companies",
                path: "/companies",

            },
            {
                id: 3,
                page: "Groups",
                path: "/groups",

            },
            {
                id: 4,
                page: "Files",
                path: "/files",

            }
        ]
    },
    {
        id: 2,
        title: "Accounting",
        icon: AiOutlineDashboard,
        list: [
            {
                id: 0,
                page: "New Desposit",
                path: "/new-desposit",

            },
            {
                id: 1,
                page: "New Expense",
                path: "/new-expense",

            },
            {
                id: 2,
                page: "Transfer",
                path: "/transfer",

            },
            {
                id: 3,
                page: "Bills",
                path: "/transfer",

            },
            {
                id: 4,
                page: "View Transactions",
                path: "/transactions",

            },
            {
                id: 5,
                page: "Balance Sheet",
                path: "/balance-sheet",

            },
            {
                id: 6,
                page: "Accounts",
                path: "/accounts",

            },
            {
                id: 7,
                page: "New Account",
                path: "/accounts/new-account",

            },
            {
                id: 8,
                page: "Assets",
                path: "/assets",

            }
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

            },
            {
                id: 1,
                page: "New Invoice",
                path: "/invoices/new-invoice",

            },
            {
                id: 2,
                page: "Recurring Invoices",
                path: "/recurring-invoices",

            },
            {
                id: 3,
                page: "New Recurring Invoice",
                path: "/recurring-invoices/new-invoice",

            },
            {
                id: 4,
                page: "Quotes",
                path: "/quotes",

            },
            {
                id: 5,
                page: "Create New Quote",
                path: "/quotes/new-quote",

            },
            {
                id: 6,
                page: "Payment",
                path: "/payment",

            },
        ]
    },
    {
        id: 4,
        title: "Purchase",
        icon: AiOutlineShoppingCart,
        list: [
            {
                id: 0,
                page: "Purchase Orders",
                path: "/purchases",

            },
            {
                id: 1,
                page: "NewPurchase Orders",
                path: "/purchases/new-purchase",

            },

        ]
    },
    {
        id: 5,
        title: "Projects",
        icon: AiOutlineDashboard,
        path: "/projects",
    },

    {
        id: 6,
        title: "Orders",
        icon: AiOutlineShoppingCart,
        list: [
            {
                id: 0,
                page: "List All Orders",
                path: "/list-orders",

            },
            {
                id: 1,
                page: "Add New Order",
                path: "/new-order",

            },

        ]
    },
    {
        id: 7,
        title: "Documents",
        icon: AiOutlineDashboard,
        path: "/documents",
    },
    {
        id: 8,
        title: "Tasks",
        icon: AiOutlineDashboard,
        path: "/tsaks",
    },
    {
        id: 9,
        title: "Calendar",
        icon: AiOutlineDashboard,
        path: "/calendar",
    },
    {
        id: 10,
        title: "Products & Services",
        icon: AiOutlineCodepen,
        list: [
            {
                id: 0,
                page: "Products",
                path: "/products",

            },
            {
                id: 1,
                page: "New Product",
                path: "/products/new-product",

            },
            {
                id: 2,
                page: "Services",
                path: "/services",

            },
            {
                id: 3,
                page: "New Service",
                path: "/services/new-service",

            },
        ]
    },
    {
        id: 11,
        title: "Bank & Cash",
        icon: AiOutlineBank,
        list: [
            {
                id: 0,
                page: "New Account",
                path: "/new-account",

            },
            {
                id: 1,
                page: "List Accounts",
                path: "/list-accounts",

            },
            {
                id: 2,
                page: "Account Balances",
                path: "/account-balances",

            },
        ]
    },
    {
        id: 12,
        title: "Settings",
        icon: AiOutlineSetting,
        list: [
            {
                id: 0,
                page: "General Settings",
                path: "/settings/general",

            },
            {
                id: 1,
                page: "Staff",
                path: "/settings/staff",

            },
            {
                id: 2,
                page: "Roles",
                path: "/settings/roles",

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
export const BoxAreaChartData =
{
    title: "Box Area Chart",
    areaDataKey1: "uv",
    areaDataKey2: "pv",
    areaDataKey3: "amt",
    areaDataKey1Bg: "#8884d8",
    areaDataKey2Bg: "#82ca9d",
    areaDataKey3Bg: "#ffc658",
    areaDataKey1Stroke: "#8884d8",
    areaDataKey2Stroke: "#82ca9d",
    areaDataKey3Stroke: "#ffc658",
    chartData: [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ]
}


