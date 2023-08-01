import DashBoard from "./components/pages/DashBoard";
import CompanyInfo from "./components/pages/CompanyInfo";
import CompanyPart from "./components/pages/CompanyPart";
import Vehicle from "./components/pages/Vehicle";
import VehicleRepair from "./components/pages/VehicleRepair";
import VehicleCrash from "./components/pages/VehicleCrash";
import VehicleImage from "./components/pages/VehicleImage";

export default [
    {
        path: '/',
        component: DashBoard
    },

    {
        path: '/company/info',
        component: CompanyInfo
    },

    {
        path: '/company/part',
        component: CompanyPart
    },

    {
        path: '/vehicle',
        component: Vehicle
    },

    {
        path: '/vehicle/repair',
        component: VehicleRepair
    },

    {
        path: '/vehicle/crash',
        component: VehicleCrash
    },

    {
        path: '/vehicle/image',
        component: VehicleImage
    },

]

/*기존에 있던 메뉴들을 Routes 파일을 따로 만들어 배열 형식으로 각각 기재해줌*/
