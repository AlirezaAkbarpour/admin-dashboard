import './home.css';
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import Chart from '../../components/chart/Chart';
import {userData} from '../../dummyDate';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
export default function Home() {
  return (
    <div className='home'>
         <FeaturedInfo/> 
         <Chart title='آمار فروش ها' data={userData} dataKey='Active User' grid/>
         <div className="homeWidget">
                <WidgetLg/> 
                <WidgetSm/>
         </div>
    </div>
  )
}
