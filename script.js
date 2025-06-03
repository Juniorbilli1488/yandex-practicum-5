const openEditButton = document.querySelector('.edit__button');
const closeEditButton = document.querySelector('.close__button-profile');
const safeEditButton = document.querySelector('.button_safe');

const openCardButton = document.querySelector('.add__button');
const closeCardButton = document.querySelector('.close__button-card')
const createCardButton = document.querySelector('.button_create')

const wrapperOpenPopupEdit = document.querySelector('.pop-up');
const wrapperOpenPopupCard = document.querySelector('.pop-upp');

const profileTitle = document.querySelector('.profile_title');
const profileDescription = document.querySelector('.profile_subtitle');

const inputName = document.querySelector('.pop-up__input_name');
const inputDescription = document.querySelector('.pop-up__input_description');

const user = {
  name: 'Жак-Ив Кусто',
  description: 'Исследователь океана'
};

inputName.value = user.name;
inputDescription.value = user.description;

profileTitle.textContent = inputName.value;
profileDescription.textContent = inputDescription.value;

function firstLetter(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}

function inputSafe() {
  profileTitle.textContent = firstLetter(inputName.value);
  profileDescription.textContent = firstLetter(inputDescription.value);

  closeEditPopup();
};

function openEditPopup() {
  wrapperOpenPopupEdit.classList.remove('pop-up__content-user');
};

function closeEditPopup() {
  wrapperOpenPopupEdit.classList.add('pop-up__content-user');
};

function openCardPopup() {
  wrapperOpenPopupCard.classList.remove('pop-up__content-card');
};

function closeCardPopup() {
  wrapperOpenPopupCard.classList.add('pop-up__content-card');
};

openEditButton.addEventListener('click', openEditPopup);
closeEditButton.addEventListener('click', closeEditPopup);
safeEditButton.addEventListener('click', inputSafe);

openCardButton.addEventListener('click', openCardPopup);
closeCardButton.addEventListener('click', closeCardPopup);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const parrentsCard = document.querySelector('.elemenets__container');
const inputCardName = document.querySelector('.pop-up__input_name-card');
const inputCardLink = document.querySelector('.pop-up__input_link-card');

initialCards.forEach(function(card) {
  const renderCard = document.querySelector('.template__card').cloneNode(true).content;
  const imageCard = renderCard.querySelector('.element__main_img');
  const titleCard = renderCard.querySelector('.element__content_title');

  imageCard.src = card.link;
  titleCard.textContent = card.name;

  parrentsCard.append(renderCard);
})

function createCardPopup() {
  const renderCard = document.querySelector('.template__card').cloneNode(true).content;
  const imageCard = renderCard.querySelector('.element__main_img');
  const titleCard = renderCard.querySelector('.element__content_title');

  imageCard.src = inputCardLink.value;
  titleCard.textContent = firstLetter(inputCardName.value);
  
  if (inputCardLink.value.length > 0 && inputCardLink.value.includes('http')) {
    parrentsCard.prepend(renderCard);
    inputCardName.value = '';
    inputCardLink.value = '';
    closeCardPopup();
  } else {
    alert('Проверьте ссылку и название.')
  }
} 

createCardButton.addEventListener('click', createCardPopup);

const likeButtons = document.querySelectorAll('.like__button');

function clickLike(evt) {
  evt.target.classList.toggle('like__button-active')
};

likeButtons.forEach(function(button) {
  button.addEventListener('click', clickLike);
});

const deleteButton = document.querySelectorAll('.button__delete');

function deleteCard(evt) {
  const deleteItem = evt.target;
  const card = deleteItem.closest('.element__item')
  card.remove()
}

deleteButton.forEach(function(button) {
  button.addEventListener('click', deleteCard);
});

const openClickImage = document.querySelectorAll('.element__main_img');

function openImage(evt) {
  const pageList = document.querySelector('.page');
  const renderCard = document.querySelector('.template__card');
  const imageCard = renderCard.querySelector('.element__main_img');
  const titleCard = renderCard.querySelector('.element__content_title');

  const boxTemplate = document.querySelector('.template-card-image').cloneNode(true).content;
  const imageOpen = boxTemplate.querySelector('.fig__image');
  const textOpen = boxTemplate.querySelector('.fig__description');

  imageOpen.src = imageCard;
  textOpen.textContent = titleCard;

  pageList.append(boxTemplate);
}

openClickImage.forEach(function(button) {
  button.addEventListener('click', openImage);
});


