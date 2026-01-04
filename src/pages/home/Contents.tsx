import { useState } from "react";
import type { ContentType } from "../../interface/Contents";

interface Content {
  content: ContentType;
}


export default function ContentsBody({ content }: Content) {
  const [likeBool, setLikeBool] = useState<boolean | null>(() => {
    const savedItem = localStorage.getItem(`likeBool${content.id}`)
    return savedItem
      ? JSON.parse(savedItem)
      : null
  })

  const [commentBool, setCommentBool] = useState<boolean | null>(() => {
    const savedItem = localStorage.getItem(`commentBool${content.id}`)
    return savedItem
      ? JSON.parse(savedItem)
      : null
  })

  const handleLike = () => {
    setLikeBool(prev => {
      localStorage.setItem(`likeBool${content.id}`, JSON.stringify(!prev))
      return !prev
    })
  }

  const handleComment = () => {
    console.log(commentBool)
    setCommentBool(prev => {
      localStorage.setItem(`commentBool${content.id}`, JSON.stringify(!prev))
      return !prev
    })
  }


  return (
    <>
      {commentBool
        ? <div className="mx-auto   max-w-sm sm:max-w-lg lg:max-w-3xl mb-5 font-[Roboto,sans-serif] p-4 bg-red-200 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
          <div className="text-xl font-bold pb-5">{content.title}</div>
          <div>{content.body}</div>
          <div className="flex items-center italic text-sm text-gray-300">
            <div className="pr-1">tags:</div>
            {content.tags.map(tag => {
              return (
                <div key={crypto.randomUUID()} className="mr-2 cursor-pointer hover:text-blue-300">
                  {tag}
                </div>
              );
            })}
          </div>
          <div className="flex justify-evenly">
            {likeBool
              ? <div className="cursor-pointer text-blue-600" onClick={() => handleLike()}>Like</div>
              : <div className="cursor-pointer" onClick={() => handleLike()}>Like</div>
            }
            <div className="cursor-pointer" onClick={() => handleComment()}>Comment</div>
            <div className="cursor-pointer">Share</div>
          </div>
        </div>
        : <div className="mx-auto   max-w-sm sm:max-w-lg lg:max-w-3xl mb-5 font-[Roboto,sans-serif] p-4 bg-white shadow-[0_0_5px_rgba(0,0,0,0.1)]">
          <div className="text-xl font-bold pb-5">{content.title}</div>
          <div>{content.body}</div>
          <div className="flex items-center italic text-sm text-gray-300">
            <div className="pr-1">tags:</div>
            {content.tags.map(tag => {
              return (
                <div key={crypto.randomUUID()} className="mr-2 cursor-pointer hover:text-blue-300">
                  {tag}
                </div>
              );
            })}
          </div>
          <div className="flex justify-evenly">
            {likeBool
              ? <div className="cursor-pointer text-blue-600" onClick={() => handleLike()}>Like</div>
              : <div className="cursor-pointer" onClick={() => handleLike()}>Like</div>
            }
            <div className="cursor-pointer" onClick={() => handleComment()}>Comment</div>
            <div className="cursor-pointer">Share</div>
          </div>


        </div>
      }
    </>

  );
}