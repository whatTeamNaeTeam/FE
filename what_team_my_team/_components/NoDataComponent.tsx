interface NoDataComponentProps {
  img?: string
  title?: string
  content?: string
}

function NoDataComponent({ img, title, content }: NoDataComponentProps) {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      {img && <img src={img} width={200} height={200} />}
      <h1 className="font-bold text-lg mt-4 text-gray-8">{title}</h1>
      <p>{content}</p>
    </section>
  )
}

export default NoDataComponent
