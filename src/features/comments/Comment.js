import { formateDate } from '../../utils/formateDate';

const Comment = ({ comment }) => {
    const { text: commentText, rating, author, date } = comment;

    return (
        <p>
            {commentText}
            <br />
            {rating}/5 stars -- {author}, {formateDate(date)}
        </p>
    );
};

export default Comment;