import React, {Component} from 'react'
import './Reception.scss'

import arrow from '../../../../img/arrow.svg'
import avatarOne from '../../../../img/write_logo1.png'
import DateRangePickerCalendarExample from './Calendary';

class Reception extends Component {

    constructor(props) {
        super(props);
        this.state = {
        isToggleOn: true,
        display: false
        };
        this.toggleHandler = this.toggleHandler.bind(this);
    }

    toggleHandler = () => {
        const currentStatus = this.state.display;
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
            display: !currentStatus
          }));
    }
    render() {
        let content = null;
        if(this.state.display) {
            content = 
            <div className="col-1">
            <h2 className="title_write">Понедельник 15.06.20 | 15:30 </h2>
            <p className="text_write">СПБ ГБУЗ "Городская поликлиника №25",</p>
            <p className="text_write">пр. Солидарности, д. 1, к. 1, лит. А</p>

            <div className="write_bottom">
                <div>
                    <img className="write_ava" src={avatarOne}/>
                    <h2 className="name">Малушко Т. Н.</h2>
                    <p className="profesion">Хирургия</p>
                </div>

                <button onClick={ () => {alert('Запись отменена')}} className="write_btn">Отменить</button>
            </div>
            </div>
        }
        return (
            <div className="reception">
            <p className="reception_title"> <img src={arrow} />Мои записи</p>

            <div className="reception_content">
                <div className="posts">
                    <a
                     onClick={this.toggleHandler}
                     className="posts_link">
                         {this.state.isToggleOn
                         ? 'Показать записи'
                         : 'Скрыть'}
                         </a>
                <div className="col-1">
                    <h2 className="title_write">Понедельник 15.06.20 | 15:30 </h2>
                    <p className="text_write">СПБ ГБУЗ "Городская поликлиника №25",</p>
                    <p className="text_write">пр. Солидарности, д. 1, к. 1, лит. А</p>

                    <div className="write_bottom">
                        <div>
                            <img className="write_ava" src={avatarOne}/>
                            <h2 className="name">Малушко Т. Н.</h2>
                            <p className="profesion">Хирургия</p>
                        </div>

                        <button onClick={ () => {alert('Запись отменена')}} className="write_btn">Отменить</button>
                    </div>
                </div>
                <div className="col-1">
                    <h2 className="title_write">Понедельник 15.06.20 | 15:30 </h2>
                    <p className="text_write">СПБ ГБУЗ "Городская поликлиника №25",</p>
                    <p className="text_write">пр. Солидарности, д. 1, к. 1, лит. А</p>

                    <div className="write_bottom">
                        <div>
                            <img className="write_ava" src={avatarOne}/>
                            <h2 className="name">Малушко Т. Н.</h2>
                            <p className="profesion">Хирургия</p>
                        </div>

                        <button onClick={ () => {alert('Запись отменена')}} className="write_btn">Отменить</button>
                    </div>
                </div>
                {content}
                </div>
                <div className="calendary">
                    <DateRangePickerCalendarExample/>
                </div>
            </div>
        </div>
        )
    }
}

export default Reception;