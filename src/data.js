//icon
import { AiOutlineSetting, AiOutlineTag, AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineCodepen, AiOutlineBank } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
import { LuCircleDotDashed } from "react-icons/lu";
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