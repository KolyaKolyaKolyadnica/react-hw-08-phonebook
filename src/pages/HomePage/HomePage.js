import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>My Phonebook</h1>
      <div className={style.content}>
        <p className={style.text}>
          Вы когда нибудь думали что может произойти если все ваши мессенджеры
          вдруг исчезнут? Вот так неожиданно. Раз... И их нет. А вместе с ними с
          вашего телефона пропадут все ранее сохраненные номера. Не важно что
          станет тому причиной. То ли новый вирус, то ли чья то злобная шутка.
          Главное, что вы уже не сможете набрать чей то номер. А что если в
          такой жуткий день вам срочно нужно набрать маму что бы спросить её
          "стоит ли кроме хлеба купить что-нибудь ещё?". Или узнать пойдёт ли та
          горячая штучка сегодня с вами на свидание. А может вы забыли где
          сегодня у вас свадьба, а рядом никого нет что бы спросить об этом...
        </p>
        <p className={style.text}></p>
        <p className={style.text}>
          Именно в такой ситуации вас спасёт это небольшое, но очень полезное
          приложение для хранения контактов! Тут, в вашем личном кабинете,
          контакты уже никогда не исчезнут.
        </p>
        <p className={style.text}>
          А самое интересное, что такое, необходимое в каждой семье, приложение
          стало результатом моего изучения React. Так что надеюсь вам всё
          понравится и в будующем мы создадим ещё не один, уже настоящий, алмаз
          :D
        </p>
      </div>
      <div className={style.decor}></div>
    </div>
  );
};
export default HomePage;
