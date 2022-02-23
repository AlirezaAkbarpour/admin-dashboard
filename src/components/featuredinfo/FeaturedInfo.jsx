import './featuredinfo.css';
import { ArrowDownward,ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featureItem">
                <span className='featuredTitle'>ٔدرآمد</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">۱۱,۴۵۲ ریال</span>
                    <span className="featureMoneyRate">-۳ ریال <ArrowDownward className='featuredIcon negative'/> </span>
                </div>
	              <span className='featuredSub'>نسبت به ماه گذشته</span>
        </div>
        <div className="featureItem">
                <span className='featuredTitle'>فروش ها</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">۱۲۵۰۰۰ ریال</span>
                    <span className="featureMoneyRate">-۱ ریال <ArrowDownward className='featuredIcon negative'/> </span>
                </div>
	              <span className='featuredSub'>نسبت به ماه گذشته</span>
        </div>
        <div className="featureItem">
                <span className='featuredTitle'>قیمت</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">۱۰۰۰ ریال</span>
                    <span className="featureMoneyRate">+۱ ریال <ArrowUpward className='featuredIcon'/> </span>
                </div>
	              <span className='featuredSub'>نسبت به ماه گذشته</span>
        </div>
    </div>
  )
}
