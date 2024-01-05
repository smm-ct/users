/* eslint-disable react/prop-types */
export const UserCard = ({userInfo}) => {
    const {image, firstName, lastName, university} = userInfo;
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={image} alt={firstName} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{firstName} {lastName}</h2>
            <p>{university}</p>
            <div className="card-actions">
            <button className="btn btn-primary">More Details</button>
            </div>
        </div>
    </div>
  )
}
