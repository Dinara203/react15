import Accordion from '../Accordion/Accordion'
import Banner from '../Banner/Banner'
import SliderComp from '../Slider/SliderComp'

export default function Start(){


    return (
    <>
    <Banner/>
    <div className="container">
    <br/>
    <br/>
    <SliderComp/>
    <br/>
    <br/>
    <h1>Новости</h1>
        <br/>
    <Accordion title="Что такое устойчивая мода?" text="Устойчивая мода — это одежда и аксессуары, которые производятся, продаются, используются и утилизируются экологически и социально ответственным образом."/>
    <Accordion title="Редкий сарафан XVIII века отреставрируют в музее Пскова" text="В Псковском музее-заповеднике восстанавливают редкий сарафан XVIII века. До этого он не был представлен широкой общественности. Вещь имеет особую историческую ценность, так как дает представление о культуре России того времени."/>
    <Accordion title="Стилист: одежда из экокожи может навредить здоровью" text="В категорию вредоносной одежды специалист отнесла брюки из экокожи с флисовым подкладом."/>
    </div>
    <br/>
    <br/>
    </>
)
}
