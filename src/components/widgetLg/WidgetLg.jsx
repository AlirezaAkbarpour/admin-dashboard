import './WidgetLg.css';

export default function WidgetLg() {
  
  const Button = ({type,value})=>{
    return <button className={"widgetLgButton "+type}>{value}</button>
  }
  
  return (
    <div className='widgetLg'>
          <h1 className="widgetLgTitle">
            معاملات اخیر
          </h1>
          <table className="widgetLgTable">
              <tr className="widgetLgTr">
                <th className="widgetLgTh">مشتری</th>
                <th className="widgetLgTh">تاریخ</th>
                <th className="widgetLgTh">میزان خرید</th>
                <th className="widgetLgTh">وضعیت</th>
              </tr>

              <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jpFQ934XAec6pbC3S1uBv4sORosYK-LEbzO6tGX3-n5VQjJunAaJHpJTIzOmMGGeSnI&usqp=CAU" 
                    alt=""
                    className='widgetLgImg' 
                    />
                  <span className="widgetLgName"> سوزان گری</span>
                </td> 
                    
                    <th className='widgetLgDate'> ۲۱ فروردین ۱۳۹۸ </th>
                    <th className='widgetLgAmount'>۱۵۰۰ ریال</th>
                    <th className='widgetLgStatus'>
                      <Button type={'Approved'} value='تایید شده' />
                    </th>
              </tr>

               <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jpFQ934XAec6pbC3S1uBv4sORosYK-LEbzO6tGX3-n5VQjJunAaJHpJTIzOmMGGeSnI&usqp=CAU" 
                    alt=""
                    className='widgetLgImg' 
                    />
                  <span className="widgetLgName">محمد قاسمی</span>
                </td> 
                    <th className='widgetLgDate'>۱۶ اسفند ۱۴۰۰</th>
                    <th className='widgetLgAmount'>۵۵۵۰ ریال</th>
                    <th className='widgetLgStatus'>
                      <Button type={'Declined'} value='نپذیرفتن'/>
                    </th>
              </tr>

               <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jpFQ934XAec6pbC3S1uBv4sORosYK-LEbzO6tGX3-n5VQjJunAaJHpJTIzOmMGGeSnI&usqp=CAU" 
                    alt=""
                    className='widgetLgImg' 
                    />
                    <span className="widgetLgName">احمد شمسی</span>
                </td> 
                    <th className='widgetLgDate'>۱۳ آبان ۱۳۹۹</th>
                    <th className='widgetLgAmount'>۴۸۰۵ ریال</th>
                    <th className='widgetLgStatus'>
                      <Button type={'Pending'} value='در انتظار' />
                    </th>
              </tr>
          </table>
    </div>
  )
}
