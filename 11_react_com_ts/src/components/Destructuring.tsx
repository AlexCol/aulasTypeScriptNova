import React from 'react'

type Props = {
    title: string,
    content: string,
    commentsQty: number,
    tags: string[]
    //+ enum
    category: Category
}
export enum Category {
  JS = "Javascript",
  TS = "TypeScript",
  C = "C#"
}

//function Destructuring(props: Props) {
function Destructuring({title, content, commentsQty, tags, category}: Props) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de comentários: {commentsQty}</p>
        <div>
            {tags.map((tag) => {
                return <span>#{tag}</span>
            })}
        </div>
        <h4>Categoria do post: {category}</h4>
    </div>
  )
}

export default Destructuring;