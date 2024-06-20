function Category(props) {
  const {title,type} = props;
  return (
    <div className="Category flex flex-col gap-y-2 pb-3">
      <label htmlFor={title} className='text-gray-400'>
        <div className="inline-block mr-2">
          <input type={type} name={title} id={title} />
        </div>
        {title}
      </label>
    </div>
  )
}

export default Category