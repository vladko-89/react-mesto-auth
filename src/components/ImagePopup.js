import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.card.isOpen ? 'popup_show' : false}`}>
      <div className={`popup__body popup__body_modal_image ${props.card.isOpen ? 'popup__body_slice' : false}`}>
        <figure className="popup__image">
          <img src={`${props.card.isOpen ? props.card.el.link : 'props.card.el.link'}`} alt="Большое изображение карточки" className="popup__card-image" />
          <figcaption className="popup__sign">{`${props.card.isOpen ? props.card.el.name : 'props.card.el.name'}`}</figcaption>
        </figure>
        <button onClick={props.onClose} type="button" className="popup__button-close popup__button-close_modal_image"
          aria-label="кнопка Закрыть" />
      </div>
    </div>
  );
}

export default ImagePopup;