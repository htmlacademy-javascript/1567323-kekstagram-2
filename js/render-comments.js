
const SHOW_COMMENTS_STEP = 5;
let comments = [];
let currentCount = 0;

const photoModal = document.querySelector('.big-picture');
const commentsPhotoModal = photoModal.querySelector('.social__comments');
const commentPhotoModal = photoModal.querySelector('.social__comment');
const commentsShowPhotoModal = photoModal.querySelector('.social__comment-shown-count');
const commentsTotalPhotoModal = photoModal.querySelector('.social__comment-total-count');
const commentsLoader = photoModal.querySelector('.comments-loader');
const socialCommentPicture = commentsPhotoModal.querySelector('.social__picture');
const socialCommentText = commentsPhotoModal.querySelector('.social__text');

commentsPhotoModal.innerHTML = '';

const renderComments = () => {
  const commentsList = document.createDocumentFragment();
  const commentsNextShow = comments.slice(currentCount, currentCount + SHOW_COMMENTS_STEP);
  const commentsLength = commentsNextShow.length + currentCount;

  commentsNextShow.forEach((comment) => {
    const commentsSocial = commentPhotoModal.cloneNode(true);
    socialCommentPicture.src = comment.avatar;
    socialCommentPicture.alt = comment.name;
    socialCommentText.textContent = comment.message;

    commentsList.append(commentsSocial);
  });

  commentsPhotoModal.append(commentsList);
  commentsShowPhotoModal.textContent = commentsLength;
  commentsTotalPhotoModal.textContent = comments.length;

  if (commentsLength >= comments.length) {
    commentsLoader.classList.add('hidden');
  }

  currentCount += SHOW_COMMENTS_STEP;
};

const clearComments = () => {
  currentCount = 0;
  commentsPhotoModal.innerHTML = '';
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', renderComments);
};

const renderCommentsPhoto = (currentComments) => {
  comments = currentComments;
  renderComments();

  commentsLoader.addEventListener('click', renderComments);
};

export {
  clearComments,
  renderCommentsPhoto,
};
